import React from "react";

export default function Card(props) {
  return (
    <div className="flex justify-center my-56">
      <div className="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl dark:bg-blue-900">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Name : {props.name}
          </h5>
          <p className="font-normal text-2xl text-white">
            CF ID :{" "}
            <a
              href={`https://codeforces.com/profile/${props.CF_id}`}
              target="_blank"
              rel="noreferrer"
            >
              {props.CF_id}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
