import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { styled } from "styled-components";
import "./Footer.css";
import logo from "./logo.svg";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-color: var(--color-black);
  padding: 2rem;
  box-sizing: border-box;
  border-top: 4px solid var(--color-blue);
  box-shadow: 0 -10px 15px 0 var(--color-button-shadow);
`;

const IconContainer = styled.ul`
  background-color: transparent;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    background-color: var(--color-black);
    display: inline-block;
    //margin-right: 1.5rem;
    padding: 0.5rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  img {
    width: 20%;
    background: transparent;
  }
`;

const FooterText = styled.p`
  background-color: transparent;
  font-size: 13px;
  color: var(--color-white-smoke);
  margin: 0;
  line-height: 1.4;
  text-align: center;
`;

function Footer() {
  return (
    <StyledFooter className="container">
      <LogoContainer className="logo">
        <img src={logo} alt="Logo" />
      </LogoContainer>
      <IconContainer>
        <li>
          <a href="#">
            <FaSquareFacebook className="icons" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaXTwitter className="icons" />
          </a>
        </li>
        <li>
          <a href="#">
            <BsInstagram className="icons" />
          </a>
        </li>
        <li>
          <a href="#">
            <BsLinkedin className="icons" />
          </a>
        </li>
      </IconContainer>
      <FooterText className="text">
        Diseñado por Alura.
        <br />
        Desarrollado por Jorge Peguero
        <br />
      </FooterText>
    </StyledFooter>
  );
}

export default Footer;
