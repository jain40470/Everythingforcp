import React from "react";
import CardTeam from "./CardTeam";

export default function Team() {
  return (
    <div className='flex flex-wrap justify-evenly'>
      <CardTeam name="Akash Jain" CF_id="jain40470" />
      <CardTeam name="Amandeep Singh" CF_id="amandeep360" />
    </div>
  );
}
