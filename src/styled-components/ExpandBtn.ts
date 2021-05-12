import styled from "styled-components";

const ExpandBtn = styled.button`
  background-color: var(--paleSilver);
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  border-radius: 0.5rem;
  border: none;
  transition-property: background-color, padding, border-radius, content;
  transition-duration: 0.3s;

  &:hover {
    background-color: var(--floralWhite);
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    padding-right: 1.1rem;
    cursor: pointer;
    &::after {
      position: absolute;
      content: "->";
    }
  }
`;

export default ExpandBtn;
