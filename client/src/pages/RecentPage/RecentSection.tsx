import React from "react";
import { MainPageStates, application } from "../../components/model";
import Application from "../../components/Application/Application";
import { useOutletContext } from "react-router-dom";
import { RecentSectionBase, RecentSectionTitle } from "./RecentSection.style";

interface Props {
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
  fetchApplications: (dataKind?: string) => Promise<void>;
  isInAppView: boolean;
}

const RecentSection: React.FC<Props> = ({
  setIsInAppView,
  fetchApplications,
}) => {
  const { applicationData, isInAddView } = useOutletContext<MainPageStates>();

  return (
    <RecentSectionBase>
      <RecentSectionTitle>Recent Modified Applications</RecentSectionTitle>
      {applicationData.map((app) => (
        <Application
          applicationInfo={app}
          key={app.id}
          setIsInAppView={setIsInAppView}
          fetchApplications={fetchApplications}
          isInAppView={isInAddView}
        />
      ))}
    </RecentSectionBase>
  );
};

export default RecentSection;
