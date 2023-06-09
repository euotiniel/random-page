import styled from "styled-components";

export const Footer = styled.footer`
  height: 60px;
  background: #1e1e20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 50px;
  border-top: 1px solid ${(p) => p.theme.colors.darkWhite};

  div:first-of-type {
    p {
      color: ${(p) => p.theme.colors.white};
      font-size: 0.94rem;
      font-weight: 500;
    }
  }

  div:last-of-type {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      color: ${(p) => p.theme.colors.white};
      font-size: 1.229rem;
    }
  }
`;
