import React from "react";
import WorkshopD from "./Workshop";
import WorkCard from "./card";

export default function WorkshopPage() {
  return (
    <div className="mb-20">
      <div className="flex place-content-evenly pt-20 mb-40">
        {<WorkCard date="2024-05-20" time="11:22" />}
        {<WorkCard date="2025-05-01" time="23:43" />}
        {<WorkCard date="2027-11-15" time="01:17" />}
        {<WorkCard date="2029-13-22" time="11:13" />}
      </div>
      <WorkshopD />
    </div>
  );
}
