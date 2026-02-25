import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
  <Container id="contact">
  <header>
    <h2>Contact</h2>
    <p>Interested in working together or have a question?</p>
    <p>Feel free to reach out — I’d love to connect.</p>
  </header>

  <div className="contacts">
    <div>
      <a href="mailto:swatimishra7588@gmail.com">
        <img src={emailIcon} alt="Email" />
      </a>
      <a href="mailto:swatimishra7588@gmail.com">
        swatimishra7588@gmail.com
      </a>
    </div>

    <div>
      <a href="tel:+918983092716">
        <img src={phoneIcon} alt="Phone Number" />
      </a>
      <a href="tel:+918983092716">
        (+91) 89830 92716
      </a>
    </div>
  </div>

  <Form />
</Container>
  )
}