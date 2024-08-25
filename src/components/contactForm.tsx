// mcbcTypescript/frontend/src/components/contactForm.tsx

import * as FormPrimitive from '@radix-ui/react-form'
import { Formik, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup'

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Name must be 50 characters or less')
    .required('Name is Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is Required'),
  message: Yup.string()
    .max(500, 'Message must be 500 characters or less')
    .required('Required'),
})

// Initial values for the form
const initialValues = {
  name: '',
  email: '',
  message: '',
}

const ContactForm: React.FC = () => {
  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    try {
      const response = await fetch('${process.env.REACT_APP_API_URL}/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()
      console.log('Message sent successfully:', data)
      alert('Message sent successfully!')
    } catch (error) {
      console.error('Failed to send message:', error)
      alert('Failed to send message. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormPrimitive.Root>
            <FormPrimitive.Field name="name" asChild>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" placeholder="Your Name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
            </FormPrimitive.Field>

            <FormPrimitive.Field name="email" asChild>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" placeholder="Your Email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
            </FormPrimitive.Field>

            <FormPrimitive.Field name="message" asChild>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <Field
                  name="message"
                  as="textarea"
                  placeholder="Your Message"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error"
                />
              </div>
            </FormPrimitive.Field>

            <FormPrimitive.Submit asChild>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </FormPrimitive.Submit>
          </FormPrimitive.Root>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
