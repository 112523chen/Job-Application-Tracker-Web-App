import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { application } from "../../components/model";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";
import { MainPageBase } from "./MainPage.style";

interface Props {
  applicationData: application[];
  isInAddView: boolean;
  setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInRecentView: React.Dispatch<React.SetStateAction<boolean>>;
  isInAppView: boolean;
}

const MainPage: React.FC<Props> = ({
  applicationData,
  isInAddView,
  setIsInAddView,
  setIsInRecentView,
  isInAppView,
}) => {
  let { pathname } = useLocation();

  useEffect(() => {
    setIsInRecentView(pathname === "/recent" ? true : false);
  }, [pathname]);

  return (
    <MainPageBase isInAddView={isInAddView}>
      <Sidebar isInAddView={isInAddView} isInAppView={isInAppView} />
      <Outlet
        context={{ applicationData, pathname, isInAddView, setIsInAddView }}
      />
    </MainPageBase>
  );
};

export default MainPage;
