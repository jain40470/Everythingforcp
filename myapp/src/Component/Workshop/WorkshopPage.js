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
              cfhandle={item.cfhandle}
            />
          );
        })}
      </div>
      <WorkshopD />
    </div>
  );
}

// <WorkCard date="2024-05-20" time="11:22" />;
