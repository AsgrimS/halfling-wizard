import styled from "styled-components";

const ExpandBtn = styled.button`
  background-color: var(--paleSilver);
  padding: 0.5rem;
  border: none;
  transition-property: background-color, padding, border-radius, content;
  transition-duration: 0.3s;
  width: 100%;

  &:hover {
    background-color: var(--floralWhite);
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    padding-right: 1rem;
    cursor: pointer;
  }
`;

export default ExpandBtn;
