import styled from "styled-components";

export const Container = styled.div`
    padding: 0px 10%;  
`;

export const Hero = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 55px;
    height: 95vh;
`;

export const DivTitle = styled.div`
    p {
        color: #97979E;
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    div {
        display: flex;
        column-gap: 15px;

        button {
            padding: 10px 30px;
            border-radius: 50px;
            border: 1px solid  ${p => p.theme.colors.darkWhite};
            background-color: ${p => p.theme.colors.primary};
            font-size: 0.88rem;
            font-weight: 600;
            cursor: pointer;
            transition: all .5s;

            a {
                    color: ${p => p.theme.colors.black};

                }

            
            &.dark-btn {
                background-color: ${p => p.theme.colors.darkWhite};
                border: 1px solid  ${p => p.theme.colors.darkWhite};

                &:hover {
                background-color: ${p => p.theme.colors.black};
            }


                a {
                    color: ${p => p.theme.colors.white};



                }
                
            }
        }
    }
`;

export const Title = styled.h1`
    color: ${p => p.theme.colors.white};
    font-size: 3.125rem;
    font-weight: 600;
    width: 60%;
`;

export const DivImg  = styled.div`
    .blue-blur {
    display: flex;
    justify-content: center;
    background-color: ${p => p.theme.colors.secondary};
    filter: blur(80px);
    border-radius:100%;
    transform: rotate(-20deg);
    position: absolute;
    width: 100px;
    height: 100px;
    left: -3%;
    top: 170%;
    }

    .blue-blur1 {
    display: flex;
    justify-content: center;
    background-color: ${p => p.theme.colors.secondary};
    filter: blur(90px);
    border-radius:100%;
    transform: rotate(-20deg);
    position: absolute;
    width: 100px;
    height: 100px;
    left: 70%;
    top: 40%;
    }

    .green-blur {
    display: flex;
    justify-content: center;
    background-color: ${p => p.theme.colors.primary};
    filter: blur(70px);
    border-radius: 100%;
    transform: rotate(-20deg);
    position: absolute;
    width: 100px;
    height: 100px;
    left: 65%;
    top: 59%;
    }
`;

export const View = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;



export const SubTitle = styled.h2`
    color: ${p => p.theme.colors.white};
    font-size: 2rem;
    margin: 40px 0;
`;

export const DoCard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 2rem;
    row-gap: 2rem;
    height: 50vh;
`;


 