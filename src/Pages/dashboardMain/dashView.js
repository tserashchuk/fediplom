import React from "react";
import {MainLayout} from "../../GlobalComponents/Layout/Layout";
import {KeyStatsContainer} from "./Components/KeyStats/KeyStatsContainer";
import DemoArea from "./Components/ProjectLInear/ProjectLinearContainer";
import {GlobalSexyAssTable} from "./Components/GlobalSexyAssTable/GlobalSexyAssTable";
export const DashboardMainView = (props) => {
    let id = props.data[0]


    return (
        <MainLayout>
            {id.id}
            <KeyStatsContainer/>
            <DemoArea/>
            <GlobalSexyAssTable/>
        </MainLayout>
    )
}