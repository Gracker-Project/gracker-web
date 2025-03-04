import styled from "@emotion/styled";

export const ButtonStyled = styled.button<{ type?: "button" | "submit" | "reset" }>`
  width: 90%;
  margin-top: 20px;
  padding: 10px 30px;
  border-radius: 20px;

  font-size: 20px;
  font-weight: 600;
  color: #fff;

  background-color: #9a2828;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;