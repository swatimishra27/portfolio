import { Container } from "./styles";
import java from "../../assets/java.svg"
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import SwatiImage from "../../assets/my-img.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
<Container id="about">
  <div className="about-text">
    <ScrollAnimation animateIn="fadeInLeft">
      <h2>About me</h2>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeInLeft" delay={100}>
      <p>
        Hi! I'm <strong>Swati Mishra</strong>, a passionate Software Engineer with
        hands-on experience in building responsive and scalable web applications.
      </p>
    </ScrollAnimation>

    <ScrollAnimation
      animateIn="fadeInLeft"
      delay={200}
      style={{ marginTop: "2rem", marginBottom: "2rem" }}
    >
      <p>
        I specialize in frontend development using <strong>React.js, Next.js,
        Redux, and Tailwind CSS</strong>, with experience integrating APIs and
        authentication systems.
      </p>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeInLeft" delay={300}>
      <p>
        I enjoy transforming Figma designs into clean, user-friendly interfaces
        and collaborating with teams to deliver high-quality products.
      </p>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeInLeft" delay={400}>
      <div className="education">
        <h3>Education</h3>
        <h4>BE – Computer Engineering</h4>
        <p>Savitribai Phule Pune University (SPPU)</p>
        <p>CGPA: 8.18 | 2025</p>
      </div>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeInLeft" delay={550}>
      <div className="experience">
        <h3>Experience</h3>
        <h4>Associate Software Engineer</h4>
        <p>Samprino Pvt Ltd | Jul 2025 – Present</p>
        <p>Pune, India</p>
      </div>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeInLeft" delay={650}>
      <h3>Here are my main skills:</h3>
    </ScrollAnimation>

    <div className="hard-skills">
      {[
        jsIcon,
        typescriptIcon,
        java,
        htmlIcon,
        cssIcon,
        reactIcon,
        boostrapIcon,
        nodeIcon,
      ].map((icon, index) => (
        <div className="hability" key={index}>
          <ScrollAnimation animateIn="fadeInUp" delay={index * 80}>
            <img src={icon} alt="skill-icon" />
          </ScrollAnimation>
        </div>
      ))}
    </div>
  </div>

  <div className="about-image">
    <ScrollAnimation animateIn="fadeInRight" delay={700}>
      <img src={SwatiImage} alt="Swati Mishra" />
    </ScrollAnimation>
  </div>
</Container>
  )
}
