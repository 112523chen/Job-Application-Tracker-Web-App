import React, { useEffect } from "react";
import { application, applicationStatusType } from "../model";
import styled from "styled-components";
import { useState } from "react";
import ApplicationView from "../ApplicationView/ApplicationView";
import { getApplicationColor } from "../../helper/functions";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";

interface Props {
  applicationInfo: application;
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
  fetchApplications: () => Promise<void>;
}

const ApplicationBase = styled.div`
  background-color: #e1e1e1;
  width: 70%;
  height: 189px;
  display: flex;
  align-items: space-around;
  border-radius: 20px;
  margin-bottom: 2.8125rem;
  &:hover {
    box-shadow: rgb(0 140 105) 5px 5px 0px;
  }
`;

const ApplicationSide = styled.div`
  background-color: ${(props) => props.theme.main};
  width: 5%;
  border-radius: 20px 0 0 20px;
`;

const ApplicationMain = styled.div`
  margin-left: 1.5rem;
  width: 80%;
`;

const ApplicationRole = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 0.8rem;
`;

const ApplicationCompany = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
`;

const ApplicationDescription = styled.div`
  font-weight: 500;
  font-size: 16px;
  width: 40.5rem;
`;

const ApplicationActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  /* margin: 0 2rem; */
  width: 15%;
`;

const Application: React.FC<Props> = ({
  applicationInfo,
  setIsInAppView,
  fetchApplications,
}) => {
  const [applicationState, setApplicationState] = useState<boolean>(false);
  const [hoverState, setHoverState] = useState<boolean>(false);

  const handleHoverEnter = (): void => {
    setHoverState(true);
  };

  const handleHoverExit = (): void => {
    setHoverState(false);
  };

  useEffect(() => {}, [applicationState]);

  return (
    <ApplicationBase
      onMouseEnter={() => {
        handleHoverEnter();
      }}
      onMouseLeave={() => {
        handleHoverExit();
      }}
    >
      {applicationState ? (
        <ApplicationView
          applicationInfo={applicationInfo}
          setApplicationState={setApplicationState}
          applicationState={applicationState}
          setIsInAppView={setIsInAppView}
        />
      ) : null}
      <ApplicationSide
        theme={{
          main: getApplicationColor(
            applicationInfo.status as applicationStatusType
          ),
        }}
      ></ApplicationSide>
      <ApplicationMain>
        <ApplicationRole>{applicationInfo.title}</ApplicationRole>
        <ApplicationCompany>{applicationInfo.company}</ApplicationCompany>
        <ApplicationDescription>
          {applicationInfo.description}
        </ApplicationDescription>
      </ApplicationMain>
      {hoverState ? (
        <ApplicationActions>
          <EditButton
            applicationState={applicationState}
            setApplicationState={setApplicationState}
          />
          <DeleteButton
            id={applicationInfo.id}
            fetchApplications={fetchApplications}
          />
        </ApplicationActions>
      ) : null}
    </ApplicationBase>
  );
};

export default Application;
