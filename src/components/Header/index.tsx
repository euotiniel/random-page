import { Container, Nav, Logo } from "./styles";
import Switch from "react-switch";

export default function index() {
  return (
    <Container>
      <a href="#!">
        <Logo>
          <img src="/src/assets/lamp.png" alt="" height={20} /> Notes
          react
        </Logo>
      </a>

      <Nav>
        <ul>
          <li>
            <a href="#">Introduction</a>
          </li>
          <li>
            <Switch
              onChange={() => {}}
              checked={true}
              checkedIcon={false}
              uncheckedIcon={false}
              height={15}
              width={30}
              handleDiameter={17}
              offColor="#DFDFD6"
              onColor="#363636"
            />
          </li>
        </ul>
      </Nav>
    </Container>
  );
}
