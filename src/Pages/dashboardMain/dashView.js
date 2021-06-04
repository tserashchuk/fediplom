import React from "react";
import {MainLayout} from "../../GlobalComponents/Layout/Layout";
import {KeyStatsContainer} from "./Components/KeyStats/KeyStatsContainer";
import DemoArea from "./Components/ProjectLInear/ProjectLinearContainer";
import {GlobalSexyAssTable} from "./Components/GlobalSexyAssTable/GlobalSexyAssTable";
export const DashboardMainView = () => {


    return (
        <MainLayout>
            <KeyStatsContainer/>
            <DemoArea/>
            <GlobalSexyAssTable/>
        </MainLayout>
    )
}