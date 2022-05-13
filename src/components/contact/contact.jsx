import "./contact.css";
import { AiOutlineGithub, AiOutlineInstagram} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://wa.link/bywzv3"
          className="contact whatsapp"
          target={"blank"}
        >
          <FaDiscord className="icon" />
          <h2>
            discord <span>FullGreen.Sky#0401</span>
          </h2>
        </a>

        <a
            href="https://wa.link/bywzv3"
            className="contact whatsapp"
            target={"blank"}
        >
          <AiOutlineGithub className="icon"/>
          <h2>
            github <span>FullGreenDev</span>
          </h2>
        </a>

        <a href="#" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>fullgreensky</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
