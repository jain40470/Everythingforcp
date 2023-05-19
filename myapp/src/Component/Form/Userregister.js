import React from "react";
import { useState } from "react";

export default function User() {
  const [data, setData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    // console.log(data);
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const host = "http://localhost:800";

  const saveindb = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/cryptoUser`, {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        username: data.username,
        email: data.email,
      }),
    });

    const data1 = await response.json();

    if (data1.check === false) {
      alert("Some error Occurred! ");
    } else {
      alert("yhu! Meet in Event");

      setData({
        username: "",
        email: "",
      });
    }
  };

  return (
    <>
      <div className=" bg-blue-950  flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-blue-950 p-8 px-8">
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Register here
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              value={data.username}
              placeholder="User Name"
              className=" rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
              id="email"
              placeholder="EMAIL"
              className=" rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <button
            onClick={saveindb}
            className="w-full my-5 py-2 bg-green shadow-lg  text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
