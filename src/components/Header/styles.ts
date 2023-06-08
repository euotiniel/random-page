import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    height: 60px;
    background: #1e1e20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px;
    border-bottom: 1px solid ${p => p.theme.colors.darkWhite};

    img {
        margin-bottom: -3px;
    }
`;

export const Nav = styled.nav`
    ul {
        display: flex;
        align-items: center;
        column-gap: 30px;

        li a {
            font-weight: 600;
            font-size: 0.95rem;
            color: ${p => p.theme.colors.white};
            transition: all .5s;

            &:hover {
                color: ${p => p.theme.colors.primary};
            }
        }
    }
`;

export const Logo = styled.p`
    color: ${p => p.theme.colors.white};
    font-size: 1.025rem;
    font-weight: 600;
`;
