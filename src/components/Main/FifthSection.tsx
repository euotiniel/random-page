import Newslater from "./Newslater";
import { View, SubTitle, Paragraph } from "./styles";

export default function FifthSection() {
  const gradient = "linear-gradient(60deg, #2CC887, #36c4b3)";

  const gradientText = {
    background: gradient,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <View>
      <SubTitle>
        Don't miss the <span style={gradientText}>news</span>
      </SubTitle>

      <Paragraph>
        Minima hic itaque. Architecto cumque rerum temporibus quo eius
        aspernatur ad nesciunt sed.
      </Paragraph>

      <Newslater />
    </View>
  );
}
