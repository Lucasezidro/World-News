import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
     --primary: #121420;
     --pink-200: #EF9CDA;
     --pink-400: #F62DAE;
     --pink-500: #B7245C;
     --pink-800: #93032E; 

     --green-300: #41D3BD;

    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-400: #94a3b8;
    --gray-600: #4b5563;
    --gray-700: #323238;
    --gray-800: #29292e;
    --gray-850: #1f2729;
    --gray-900: #121214;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--primary);
    color: var(--gray-100);
    font-family: "Inter", sans-serif;
  }
  @media (max-width: 1080px) {
    html{
        font-size: 93.75%;
    }
}
  @media (max-width: 720px) {
    html{
        font-size: 87.5%;
    }
} 
`