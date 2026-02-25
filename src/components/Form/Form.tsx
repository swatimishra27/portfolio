import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import validator from 'validator'

export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry')
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')

  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email))
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Message sent successfully!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  }, [state.succeeded])

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <p>I’ll get back to you as soon as possible.</p>
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
        >
          Back to top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Get in Touch</h2>
      <p>Have an opportunity or question? Send me a message.</p>

      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your email address"
          onChange={(e) => verifyEmail(e.target.value)}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message}
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <ToastContainer />
    </Container>
  )
}