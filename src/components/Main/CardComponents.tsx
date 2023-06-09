import styled from "styled-components";

type CardProps = {
  title: string;
  description?: string;
  url: string;
};

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px !important;
  padding-bottom: 40px !important;
  padding: 20px;
  border: 1px solid ${(p) => p.theme.colors.darkWhite};
  border-radius: 10px;
  height: 300px;
  transition: all 0.9s;
  cursor: pointer;

  img {
    height: 45px;
  }

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.secondary};
  }
`;

const TitleCard = styled.h3`
  font-weight: bold;
  font-size: 0.99rem;
  color: ${(p) => p.theme.colors.primary};
  margin: 20px 0px;
`;

const DescriptionCard = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 25px;
  text-align: left;
  color: #97979e;
  text-align: center;
`;

export default function CardComponents({ title, description, url }: CardProps) {
  return (
    <Card>
      <img src={url} alt="" />
      <TitleCard>{title}</TitleCard>
      <DescriptionCard>{description}</DescriptionCard>
    </Card>
  );
}
