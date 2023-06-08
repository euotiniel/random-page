import { SubTitle, View } from "./styles";
import Code from "./Code";

import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 25px;
  text-align: left;
  color: #97979E;
  width: 70%;
`;

const Ancora = styled.a `
    color: ${props => props.theme.colors.white};
    text-decoration: underline;
    transition: all .5s;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`;


export default function SecondSection() {

const code = `> git clone https://github.com/otonielemanuel/random-repo.git`;

  return (
    <View>
        <SubTitle>Instalation</SubTitle>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore beatae <Ancora href="">consectetur ducimus</Ancora> quae dolores unde voluptatem illum dicta, et suscipit iure itaque! Fugit repudiandae quod omnis asperiores soluta nemo quis!</Paragraph>
        <Code code={code} />
    </View>
  );
}
