import React from "react";
import DashboardWidgets from "./dashboard-widgets/dashboard-widgets";
import { BrowserRouter, Route } from "react-router-dom";
import VisitEncounters from "./visit-encounters-widgets/visitencounters.component";

export default function Root(props: RootProps) {
  return (
    <BrowserRouter basename="/openmrs/spa">
      <Route
        path="/patient-dashboard/:patientUuid"
        exact={true}
        component={DashboardWidgets}
      />

      <Route
        path="/patient-dashboard/:patientUuid/visits/:visitUuid/encounters"
        component={VisitEncounters}
      />
    </BrowserRouter>
  );
}

type RootProps = {};
