import { css } from "styled-components";

export const Variables = css`
  :root {
    // Font
    --font-main: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;

    // Colors
    --background: var(--black);
    --background-navbar: rgba(18, 18, 20, 0.75);

    --white: #ededed;
    --white-hover: rgba(237, 237, 237, 0.8);
    --white-lowopacity: rgba(237, 237, 237, 0.1);

    --black: #121214;
    --black-brighter: #131214;
    --black-hover: rgba(18, 18, 20, 0.8);
    --black-lowopacity: rgba(18, 18, 20, 0.1);

    --gray: #e1e1e6;
    --text: #a8a8b3;
    --base-text: #c4c4cc;
    --support: #737380;
    --shape: #202024;
    --shape-light: #28282d;
    --shape-light-lowopacity: #28282d50;
    --shape-dark: #3c3c42;
    --shape-hover: #29292e;
    --icons: #41414d;
    --attention: #fd951f;
    --borders: #323238;

    --success: #1a8e28;
    --error: #b63535;

    --primary: #8257e5;
    --primary-hover: #8257e570;
    --primary-lowopacity: #8257e520;

    --secondary: #996dff;
    --secondary-hover: #996dff70;
    --secondary-lowopacity: #996dff20;

    --tertiary: #8e37d7;
    --tertiary-hover: #8e37d770;
    --tertiary-lowopacity: #8e37d720;

    // Other Values
    --max-width: 900px;
    --transition: 0.2s ease;
    --transition-medium: 0.35s ease;
    --transition-low: 0.5s ease;
    --transition-turtle: 0.75s ease;
  }
`;
