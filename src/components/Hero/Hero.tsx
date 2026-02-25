import { BrowserRouter } from 'react-router-dom'
import { Container } from './styles'
import ScrollAnimation from 'react-animate-on-scroll'
import Illustration from '../../assets/illustration.png'
import { NavHashLink } from 'react-router-hash-link'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import emailIcon from '../../assets/email-icon.svg'
import Hello from '../../assets/Hello.gif'
export function Hero() {
  return (
    <Container id='home'>
      <div className='hero-text'>
        <ScrollAnimation animateIn='fadeInUp'>
          <p>
            Hello <img src={Hello} alt='Hello' width='20px' />, I'm
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeInUp' delay={200}>
          <h1>Swati Mishra</h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeInUp' delay={400}>
          <h3>Associate Software Engineer</h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeInUp' delay={600}>
          <p className='small-resume'>
            Frontend Developer | React · Next.js · Redux
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeInUp' delay={800}>
          <BrowserRouter>
            <NavHashLink smooth to='#contact' className='button'>
              Contact Me
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeInUp' delay={1000}>
          <div className='social-media'>
            <a
              href='https://www.linkedin.com/in/swati-mishra-52a04b296/'
              target='_blank'
              rel='noreferrer'>
              <img src={linkedin} alt='LinkedIn' />
            </a>

            <a
              href='https://github.com/swatimishra27'
              target='_blank'
              rel='noreferrer'>
              <img src={githubIcon} alt='GitHub' />
            </a>

            <a
              href='mailto:swatimishra7588@gmail.com'
              target='_blank'
              rel='noreferrer'>
              <img src={emailIcon} alt='Email' />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className='hero-image'>
        <ScrollAnimation animateIn='fadeInRight' delay={1 * 1000}>
          <img src={Illustration} alt='Ilustração' />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
