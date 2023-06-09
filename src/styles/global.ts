import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

   ::-webkit-scrollbar {
        width: 7px;
        background-color:  #44444442;
    }
  
    ::-webkit-scrollbar-thumb {
        background-color: #050607;
        border-radius: 5px; 
    }
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
