import { createGlobalStyle } from "styled-components";
import bg from "../../public/images/bg.jpg";

const GlobalStyle = createGlobalStyle`
    html {
        min-height:100%;
    }
    body {
        background: url(${bg});
        background-size: cover;
        min-height:100%;
        background-position: right;
    }
`;

export default GlobalStyle;
