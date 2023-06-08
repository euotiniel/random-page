import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 60%;
  padding: 10px;
  margin-top: 50px;
  border: 1px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.darkWhite};
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
`;

const Code = styled.code`
  padding: 8px;
  color: ${props => props.theme.colors.white};
  font-size: 0.88rem;
  font-weight: 500;
`;

const CopyButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.secondary};
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
  };

  return (
    <CardContainer>
      <Code>{code}</Code>
      <CopyButton onClick={copyCodeToClipboard}>
        {isCopied ? "Copied!" : "Copy Code"}
      </CopyButton>
    </CardContainer>
  );
};

export default Card;
