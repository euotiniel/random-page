import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #1E1E20;
        font-family: sans-serif;
    }

    
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
`;
