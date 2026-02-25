import { Container } from './styles'
import githubIcon from '../../assets/github.svg'
// import DownloadApp from '../../assets/download.webp'
import externalLink from '../../assets/external-link.svg'
import ScrollAnimation from 'react-animate-on-scroll'

const projects = [
  {
    title: "SmartRentBridge – Rental Web Platform",
    description:
      "A full-stack rental platform that enables property listing, search, and booking for owners and tenants with role-based access.",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    github: "https://github.com/YOUR-GITHUB/smartrentbridge",
    live: null,
  },
  {
    title: "MediConnect – Healthcare Appointment System",
    description:
      "A healthcare platform to find doctors via map view, manage medical records, and book appointments online.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/YOUR-GITHUB/mediconnect",
    live: null,
  },

  // ✅ ADD THIS
  {
    title: "Personal Portfolio Website",
    description:
      "My personal portfolio showcasing my skills, experience, and projects with smooth animations, responsive design, and modern UI.",
    tech: ["React", "CSS", "Scroll Animations", "Responsive Design"],
    github: "https://github.com/YOUR-GITHUB/portfolio",
    live: "https://YOUR-PORTFOLIO-LINK",
  },
];

export function Project() {
  return (
    <Container id='project'>
      <ScrollAnimation animateIn='fadeInUp'>
        <h2>My Projects</h2>
      </ScrollAnimation>

      <div className='projects'>
        {projects.map((project, index) => (
          <ScrollAnimation animateIn='flipInX' key={index}>
            <div className='project'>
              <header>
                <svg
                  width='50'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#23ce6b'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' />
                </svg>

                <div className='project-links'>
                  {project.github && (
                    <a href={project.github} target='_blank' rel='noreferrer'>
                      <img src={githubIcon} alt='GitHub Repository' />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target='_blank' rel='noreferrer'>
                      <img src={externalLink} alt='Live Demo' />
                    </a>
                  )}
                </div>
              </header>

              <div className='body'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <footer>
                <ul className='tech-list'>
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  )
}
