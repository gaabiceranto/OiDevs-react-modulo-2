import styled, {css} from "styled-components";

const textCss = css`
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Rubik&display=swap');
  color: ${(props) => props.color || "#fff"};
  font-weight: ${(props) => (props.bold ? "900" : "")};
  ${(props) => (props.size === "small" ? "font-size: 12px;" : "")}
  font-family: "Rubik";
`;

export const Text = styled.div`
  ${textCss}
`;

export const TextLink = styled.a`
  all: unset;
  ${textCss};
  cursor: pointer;
`;