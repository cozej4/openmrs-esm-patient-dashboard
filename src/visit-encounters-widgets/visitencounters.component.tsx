import React from "react";
export default function VisitEncounters(prop: VisitProps) {
  return <div style={{ marginTop: "100px" }}>Hello World</div>;
}

type VisitProps = {
  patientUuid: string;
  visitUuid: string;
};
