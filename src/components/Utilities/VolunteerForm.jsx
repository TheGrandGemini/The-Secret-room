import React, { useState } from 'react';
import styles from './VolunteerForm.module.css';
import useFormValidation from '../Hooks/useFormValidation';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpwrdqol';

const VolunteerForm = () => {
	const {
		form,
		touched,
		errors,
		isFormValid,
		handleChange,
		handleBlur,
		handleFocus,
		resetForm,
	} = useFormValidation();

	const [modal, setModal] = useState({
		open: false,
		message: '',
		success: false,
	});
	const [submitting, setSubmitting] = useState(false);

	const sendForm = async (e) => {
		e.preventDefault();
		if (!isFormValid) return;
		setSubmitting(true);

		try {
			const response = await fetch(FORMSPREE_ENDPOINT, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: form.name,
					email: form.email,
					message: form.message,
				}),
			});
			if (response.ok) {
				setModal({
					open: true,
					message: 'Message sent successfully!',
					success: true,
				});
				resetForm();
			} else {
				setModal({
					open: true,
					message: 'Failed to send message. Try again.',
					success: false,
				});
			}
		} catch (error) {
			setModal({
				open: true,
				message: 'Failed to send message. Try again.',
				success: false,
			});
		}
		setSubmitting(false);
	};

	const closeModal = () => setModal({ ...modal, open: false });

	return (
		<div className={styles.formWrapper}>
			<form
				onSubmit={sendForm}
				className={styles.volunteerForm}
				autoComplete='off'>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					id='name'
					value={form.name}
					onChange={handleChange}
					onBlur={handleBlur}
					onFocus={handleFocus}
					required
					aria-invalid={!!errors.name}
					aria-describedby='name-error'
				/>
				{touched.name && errors.name && (
					<span
						className={styles.inputError}
						id='name-error'>
						{errors.name}
					</span>
				)}

				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					id='email'
					value={form.email}
					onChange={handleChange}
					onBlur={handleBlur}
					onFocus={handleFocus}
					required
					aria-invalid={!!errors.email}
					aria-describedby='email-error'
				/>
				{touched.email && errors.email && (
					<span
						className={styles.inputError}
						id='email-error'>
						{errors.email}
					</span>
				)}

				<label htmlFor='message'>Why do you want to volunteer?</label>
				<textarea
					name='message'
					id='message'
					value={form.message}
					onChange={handleChange}
					onBlur={handleBlur}
					onFocus={handleFocus}
					required
					aria-invalid={!!errors.message}
					aria-describedby='message-error'
				/>
				{touched.message && errors.message && (
					<span
						className={styles.inputError}
						id='message-error'>
						{errors.message}
					</span>
				)}

				<button
					type='submit'
					disabled={!isFormValid || submitting}
					className={!isFormValid || submitting ? styles.disabledBtn : ''}>
					{submitting ? 'Sending...' : 'Send'}
				</button>
			</form>

			{modal.open && (
				<div className={styles.modalOverlay}>
					<div className={styles.modal}>
						<p className={modal.success ? styles.success : styles.error}>
							{modal.message}
						</p>
						<button
							onClick={closeModal}
							className={styles.closeBtn}>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default VolunteerForm;
