import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

export function Footer() {
  return (
  <Container className="footer">
  <a href="/" className="logo">
    <span>Swati</span>
    <span>Mishra</span>
  </a>

  <div>
    <p>
      Built with <img src={reactIcon} alt="React" /> using modern web technologies
    </p>
  </div>

  <div className="social-media">
    <a
      href="https://www.linkedin.com/in/swati-mishra-52a04b296/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn Profile"
    >
      <img src={linkedin} alt="LinkedIn" />
    </a>

    <a
      href="https://github.com/swatimishra27"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub Profile"
    >
      <img src={githubIcon} alt="GitHub" />
    </a>
  </div>
</Container>
  )
}
