import chroma from "chroma-js";
import { css, createGlobalStyle } from "styled-components";

const baseTheme = {
  primary: "#ff0000",
  scent: "#00ffff",
  white: "#fff",
  black: "#000",
  small: "0.8em",
  text: "1em",
  heading1: "3em",
  heading2: "2.5em",
  heading3: "2em",
  heading4: "1.5em",
};

const buildTheme = (t) => Object.assign(t, { primary50: "#880000" });

export default buildTheme(baseTheme);

const reset = css`
  /*** The new CSS Reset - version 1.2.0 (last updated 23.7.2021) ***/

  /* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /*
  Remove list styles (bullets/numbers)
  in case you use it with normalize.css
  */
  ol,
  ul {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-width: 100%;
  }

  /* Removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* Revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }
`;

const font = createGlobalStyle`
body {
  font-family: 'Gotham', sans-serif;
}
`;
export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${font}
`;
