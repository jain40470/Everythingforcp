import React, { useState } from "react";

export default function WorkCard(props) {
  const [timeday, settimeday] = useState();
  const [time, settime] = useState();
  setInterval(() => {
    var year = parseInt(
      props.date[0] + props.date[1] + props.date[2] + props.date[3]
    );
    var month = parseInt(props.date[5] + props.date[6]);
    var day = parseInt(props.date[8] + props.date[9]);
    var hour = parseInt(props.time[0] + props.time[1]);
    var minute = parseInt(props.time[3] + props.time[4]);
    var destination = new Date(year, month, day, hour, minute).getTime();
    var now = new Date().getTime();
    var difference = destination - now;
    var days = Math.floor(difference / (86400 * 1000));
    var hours = Math.floor((difference % (86400 * 1000)) / (1000 * 86400));
    var minutes = Math.floor((difference % (3600 * 1000)) / (1000 * 60));
    var seconds = Math.floor((difference % (60 * 1000)) / 1000);
    settimeday(days.toString() + " days");
    settime(
      hours.toString() +
        " hrs : " +
        minutes.toString() +
        " min : " +
        seconds.toString() +
        " sec"
    );
  }, 1000);
  return (
    <>
      <div className="flex-col">
        <div class="bg-blue-900 flex flex-col items-center rounded-lg text-white mx-10 mb-5">
          <img
            class="h-50 w-full rounded-t-lg object-cover md:h-30 md:w-48 md:rounded-none md:rounded-l-lg"
            src={""}
            alt=""
          />
          <div class="flex flex-col items-center p-6">
            <h1 class="mb-2 text-xl font-medium">Event Name</h1>
            <h2>By Me</h2>
            <button className="w-full my-5 py-2 bg-green shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 hover:bg-white hover:text-blue-950 text-white font-semibold rounded-lg">
              Register
            </button>
            <div>{props.date}</div>
            <div>{props.time}</div>
          </div>
        </div>
        <div class="bg-blue-900 flex flex-col items-center rounded-lg text-white mx-10 mb-10">
          <div>{timeday}</div>
          <div>{time}</div>
        </div>
      </div>
    </>
  );
}
