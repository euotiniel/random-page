import { SubTitle, DoCard, View } from "./styles";
import CardComponents from "./CardComponents";
import Elishir from "../../assets/elishir.png";
import Sumo from '../../assets/sumo.png'
import Book from '../../assets/book.png'

import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 25px;
  text-align: left;
  color: #97979E;
  margin-bottom: 30px;
`;

const Ancora = styled.a `
    color: ${props => props.theme.colors.white};
    text-decoration: underline;
    transition: all .5s;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`;


export default function ThirdSection() {
  return (
    <View>
      <SubTitle>What it was supposed to do</SubTitle>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore beatae <Ancora href="">consectetur ducimus</Ancora> quae dolores unde voluptatem illum dicta, et suscipit iure itaque! Fugit repudiandae quod omnis asperiores soluta nemo quis!</Paragraph>

      <DoCard>
        <CardComponents
          title="Be an experience"
          url={Elishir}
        />

<CardComponents
          title="Create documentation"
          url={Book}
        />

<CardComponents
          title="Practice front-end"
          url={Sumo}
        />
      </DoCard>
    </View>
  );
}
