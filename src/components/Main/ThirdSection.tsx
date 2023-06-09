import { SubTitle, DoCard, View, Paragraph } from "./styles";
import CardComponents from "./CardComponents";
import Elishir from "../../assets/elishir.png";
import Recycling from '../../assets/recycling.png'
import Stack from '../../assets/stack.png'

import styled from 'styled-components';



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
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore beatae <Ancora href="">consectetur ducimus</Ancora> quae dolores unde voluptatem illum dicta, et suscipit iure itaque!</Paragraph>

      <DoCard>
        <CardComponents
          title="Component recycling"
          url={Recycling}
        />

<CardComponents
          title="Esprience with computer science"
          url={Elishir}
        />

<CardComponents
          title="Data storage stack"
          url={Stack}
        />
      </DoCard>
    </View>
  );
}
