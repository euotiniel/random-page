import { Footer } from "./styles";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

export default function index() {
  return (
    <Footer>
      <div>
        <p>&copy; 2023 Otoniel Emanuel</p>
      </div>
      <div>
        <a href="#!">
          <AiOutlineTwitter />
        </a>
        <a href="https://www.instagram.com/euotiniel/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/otonielemanuel/">
          <AiOutlineGithub />
        </a>
        <a href="https://www.linkedin.com/in/otoniel-emanuel-b80727261/">
          <AiFillLinkedin />
        </a>
      </div>
    </Footer>
  );
}
