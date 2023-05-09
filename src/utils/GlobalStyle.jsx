import { createGlobalStyle } from "styled-components";
import "../../node_modules/modern-normalize/modern-normalize.css";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #282c34;
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

    ul {
    margin: 0;
    padding: 0;
    list-style: none;
    }

    a {
    text-decoration: none;
    }

    button {
    cursor: pointer;
    border: none;
    padding: 0;
    }

`;

export default GlobalStyle;
