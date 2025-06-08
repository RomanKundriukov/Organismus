import React from 'react';
import cl from './SportPage.module.scss'
import LabTabs from "../../components/LabTabs/LabTabs.jsx";
import PlanPanel from "./TabPanels/PlanPanel/PlanPanel.jsx";
import StatistikPanel from "./TabPanels/StatistikPanel/StatistikPanel.jsx";

export default function SportPage(){

    const sportTabs = [
        {value: '1', label: 'Plan', content : <PlanPanel />},
        {value: '2', label: 'Statistik', content : <StatistikPanel />},
    ]

    return (

        <div className={cl.container}>
            <LabTabs tabs={sportTabs} />
        </div>
    );
};
