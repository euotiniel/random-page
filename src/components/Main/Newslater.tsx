import styled from "styled-components"

const Newslatercontainer = styled.div`
   form {
    display: flex;
    align-items: center;
    column-gap: 0.88rem;
   }

    input {
        background-color: transparent;
        outline: none;
        border: 1px solid ${props => props.theme.colors.darkWhite};
        border-radius: 7px;
        padding: 12px;
        width: 400px;
        font-size: 1rem;
        font-weight: 500;
        color: ${props => props.theme.colors.white};
    }

    button {
        background: linear-gradient(60deg, #2CC887, #36c4b3);
        padding: 1px 20px;
        height: 35px;
        border: none;
        font-size: 0.88rem;
        font-weight: 600;
        color: ${props => props.theme.colors.black};
        border-radius: 10px;
        cursor: pointer;
        transition: all 1s;
        border: 1px solid ${props => props.theme.colors.secondary};
    }
`;

export default function Newslater() {
  return (
    <Newslatercontainer>
        <form action="">
        <input type="text" placeholder="Enter your most active email" />
        <button type="submit">Send</button>
        </form>
    </Newslatercontainer>
  )
}
