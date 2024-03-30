import React, { useState } from 'react';
import TopNavigation from "../TopNavigation";
import { ContentWrapper, HorizontalArea, PageWrapper, VerticalArea } from './styles';
import SideNavigation from '../SideNavigation';

const Page = ({ children, handleChangePage, pageName })  => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <PageWrapper>
      <TopNavigation
        pageName={pageName}
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />
     <VerticalArea>
        <HorizontalArea>
          <SideNavigation
            handleChangePage={handleChangePage}
            open={open}
            pageName={pageName} /> 
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </HorizontalArea>
      </VerticalArea>
    </PageWrapper>
  );
}

export default Page;