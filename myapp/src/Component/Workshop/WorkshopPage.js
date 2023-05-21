import React from "react";
import { useState, useEffect } from "react";

import WorkshopD from "./Workshop";
import WorkCard from "./WorkCard";

export default function WorkshopPage() {
  const [data, setData] = useState([]);

  const host = "http://localhost:800";

  useEffect(() => {
    const fun = async () => {
      const response = await fetch(`${host}/Workshop`, {
        method: "GET",
      });

      const workdata = await response.json();
      setData(workdata);
    };

    fun();
  }, []);

  return (
    <div className="mb-20">
      <div className="flex place-content-evenly pt-20 mb-40">
<<<<<<< Updated upstream
        {<WorkCard userHandle="amandeep360" date="2024-05-20" time="11:22"/>}
        {<WorkCard userHandle="jain40470" date="2025-05-01" time="23:43"/>}
        {<WorkCard userHandle="12_Utpal" date="2027-11-15" time="01:17"/>}
        {<WorkCard userHandle="asishkumar" date="2029-13-22" time="11:13"/>}
=======
        {data.map((item) => {
          return (
            <WorkCard
              eventlink={item.eventlink}
              eventemail={item.email}
              topic={item.topic}
              date={item.date}
              eventid={item._id}
              time={item.time}
              setter={item.username}
            />
          );
        })}
>>>>>>> Stashed changes
      </div>
      <WorkshopD />
    </div>
  );
}

// <WorkCard date="2024-05-20" time="11:22" />;
