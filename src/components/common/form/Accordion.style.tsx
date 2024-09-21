import styled from "@emotion/styled";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";

export const CustomAccordion = styled(Accordion)`
  padding: 5px 10px;
  border-radius: 20px;

  &::before {
    display: none;
  }
`;

export const TitleTypography = styled(Typography)`
  font-weight: 600;
  font-size: 18px;
  color: #9a2828;
`;

export const ContentTypography = styled(Typography)`
  max-width: 500px;
  font-size: 16px;
  white-space: pre-wrap;
`;

export const AccordionImg = styled.img`
  width: 100%;
  max-width: 500px;
`;