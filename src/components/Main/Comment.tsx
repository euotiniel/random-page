import styled from 'styled-components';

type CommentProps = {
    url: string,
    comment: string,
    username: string,
}

const Card = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  height: 200px;
  transition: all .9s;

  @media (max-width: 660px) {
    height: 150px;
  }  


  img {
    height: 45px;
    border-radius: 100%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
  }
`;

const UserName = styled.p`
  font-size: 13px;
  font-weight: 600;
  line-height: 25px;
  text-align: left;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;


const Comment = styled.p`
  font-size: 14.3px;
  font-weight: 600;
  line-height: 25px;
  text-align: left;
  color: #97979E;
  margin-bottom: 20px;
  font-style: italic;
`;

export default function CardComponents({url, comment, username} : CommentProps) {
  return (
    <Card>
      <div>
      <Comment>"{comment}"</Comment>
      </div>

      <div>
      <img src={url} alt="" />
      <UserName>{username}</UserName>
      </div>
      
    </Card>
  )
}
