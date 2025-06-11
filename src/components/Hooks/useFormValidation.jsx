import { useReducer } from 'react';

function validate(form) {
	const errors = {};
	errors.name =
		form.name.trim().length < 2 ? 'Name must be at least 2 characters.' : '';
	errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
		? ''
		: 'Enter a valid email address.';
	errors.message =
		form.message.trim().length < 10
			? 'Please tell us why you want to volunteer (at least 10 characters).'
			: '';
	return errors;
}

const initialState = {
	form: {
		name: '',
		email: '',
		message: '',
	},
	touched: {},
	errors: {
		name: '',
		email: '',
		message: '',
	},
};

function reducer(state, action) {
	switch (action.type) {
		case 'CHANGE': {
			const form = { ...state.form, [action.name]: action.value };
			const errors = state.touched[action.name]
				? { ...state.errors, ...validate({ ...form }) }
				: state.errors;
			return { ...state, form, errors };
		}
		case 'BLUR': {
			const touched = { ...state.touched, [action.name]: true };
			const errors = { ...state.errors, ...validate({ ...state.form }) };
			return { ...state, touched, errors };
		}
		case 'FOCUS': {
			const touched = { ...state.touched, [action.name]: true };
			return { ...state, touched };
		}
		case 'RESET':
			return initialState;
		default:
			return state;
	}
}

export default function useFormValidation() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const isFormValid =
		!validate(state.form).name &&
		!validate(state.form).email &&
		!validate(state.form).message;

	const handleChange = (e) => {
		dispatch({ type: 'CHANGE', name: e.target.name, value: e.target.value });
	};

	const handleBlur = (e) => {
		dispatch({ type: 'BLUR', name: e.target.name });
	};

	const handleFocus = (e) => {
		dispatch({ type: 'FOCUS', name: e.target.name });
	};

	const resetForm = () => dispatch({ type: 'RESET' });

	return {
		form: state.form,
		touched: state.touched,
		errors: state.errors,
		isFormValid,
		handleChange,
		handleBlur,
		handleFocus,
		resetForm,
	};
}
