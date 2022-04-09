import {css} from "styled-components";

const mobile = (props) => {
  return css`
  @media (max-width:500px){
      ${props}
  }
  `
};

export default mobile;
