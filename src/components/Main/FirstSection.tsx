import { SubTitle, DoCard, View } from "./styles";
import CardComponents from "./CardComponents";
import Elishir from "../../assets/elishir.png";
import Sumo from '../../assets/sumo.png'
import Book from '../../assets/book.png'

export default function FirstSection() {
  return (
    <View>
      <SubTitle>What it was supposed to do</SubTitle>

      <DoCard>
        <CardComponents
          title="Be an experience"
          description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellat dolore maiores possimus. Integer volupt."
          url={Elishir}
        />

<CardComponents
          title="Create documentation"
          description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellat dolore maiores possimus. Integer volupt ut."
          url={Book}
        />

<CardComponents
          title="Practice front-end"
          description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellat dolore maiores possimus. Integer volupt ut."
          url={Sumo}
        />
      </DoCard>
    </View>
  );
}
