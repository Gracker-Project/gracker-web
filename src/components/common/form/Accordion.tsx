import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import {
  CustomAccordion,
  TitleTypography,
  ContentTypography,
  AccordionImg,
} from "./Accordion.style";

interface AccordionItemProps {
  title: string;
  content: string;
  number: number;
  img?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, number, img }) => {
  return (
    <CustomAccordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${number}-content`}
        id={`panel${number}-header`}
      >
        <TitleTypography>{title}</TitleTypography>
      </AccordionSummary>
      <AccordionDetails>
        {img && <AccordionImg src={img} alt={title} />}
        <ContentTypography>{content}</ContentTypography>
      </AccordionDetails>
    </CustomAccordion>
  );
};

export default AccordionItem;