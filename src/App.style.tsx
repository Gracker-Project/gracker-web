import styled from "@emotion/styled";

export const FadeInContainer = styled.div<{ fadeIn: boolean }>`
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
  transition: opacity 0.5s ease-in;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;