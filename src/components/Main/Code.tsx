import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 65%;
  padding: 10px;
  margin-top: 50px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.darkWhite};
  border-radius: 7px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1052px) {
    width: 100%;
  }

  @media (max-width: 498px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 20px;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;

const Code = styled.code`
  padding: 8px;
  color: ${(props) => props.theme.colors.white};
  font-size: 0.88rem;
  font-weight: 500;

  @media (max-width: 498px) {
    line-height: 20px;
    font-size: 12px;
    font-weight: 500;
  }

  @media (max-width: 375px) {

  }
`;

const CopyButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.secondary};
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  font-weight: 500;
`;

type CardProps = {
  code: string;
};

const Card: React.FC<CardProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000); // 3000ms = 3 segundos de atraso antes de voltar a habilitar o botão
  };

  return (
    <CardContainer>
      <Code>&gt; {code}</Code>
      <CopyButton onClick={copyCodeToClipboard} disabled={isCopied}>
        {isCopied ? "Copied!" : "Copy"}
      </CopyButton>
    </CardContainer>
  );
};

export default Card;
