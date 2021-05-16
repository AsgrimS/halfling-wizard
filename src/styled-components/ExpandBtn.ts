import styled from "styled-components";

const ExpandBtn = styled.button`
  background-color: var(--paleSilver);
  padding: 0.5rem;
  border: none;
  transition-property: background-color, padding, border-radius, content;
  transition-duration: 0.3s;
  width: 100%;
  &:active {
    filter: brightness(90%);
  }
`;

export default ExpandBtn;
