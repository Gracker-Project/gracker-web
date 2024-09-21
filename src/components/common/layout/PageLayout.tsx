import { Outlet } from "react-router-dom";
import Tabbar from "./Tabbar";
import { LayoutContainer, ContentContainer } from "./PageLayout.style";

export const PageLayout = () => {
  return (
    <LayoutContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <Tabbar />
    </LayoutContainer>
  );
};