import { View, SubTitle, DoCard } from "./styles";
import Comment from "./Comment";

export default function FourthSection() {
  return (
    <View>
      <SubTitle>Comments on the site</SubTitle>

      <DoCard>
        <Comment
          comment="Quibusdam ut consequatur vel nam magnam assumenda labore porro. tempore-voluptates-enim Aut magnam consequatur qui fugit. illum eos et"
          url="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/535.jpg"
          username="Jacob Wintheiser"
        />
        <Comment
          comment="Quibusdam ut consequatur vel nam magnam assumenda labore porro. tempore-voluptates-enim Aut magnam consequatur qui fugit."
          url="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1093.jpg"
          username="Colleen Thompson"
        />
        <Comment
          comment="Quibusdam ut consequatur vel nam magnam assumenda labore porro. tempore-voluptates-enim Aut magnam consequatur qui fugit."
          url="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/61.jpg"
          username="Lonnie Hyatt"
        />
        <Comment
          comment="Quibusdam ut consequatur vel nam magnam assumenda labore porro. tempore-voluptates-enim Aut magnam consequatur qui fugit. illum eos et"
          url="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/548.jpg"
          username="Jacob Wintheiser"
        />
        <Comment
          comment="Quibusdam ut consequatur vel nam magnam assumenda labore porro. tempore-voluptates-enim Aut magnam consequatur qui fugit."
          url="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/573.jpg"
          username="June Reynolds"
        />
        <Comment
          comment="Quibusdam ut consequatur vel nam magnam assumenda labore porro. tempore-voluptates-enim Aut magnam consequatur qui fugit."
          url="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1138.jpg"
          username="Duane Prosacco"
        />
      </DoCard>
    </View>
  );
}
