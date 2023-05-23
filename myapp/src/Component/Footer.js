import React from "react";
import discord from "./discord.png";
export default function Footer() {
  return (
    <div className='mt-3 flex-col justify-end bg-blue-800 text-white p-1 font-extrabold text-3xl'>
            <div className='flex justify-center'>
                <div> 
                    Join our community of active users on
                    <button className='ml-3 mt-3' type='button' onClick={()=>{}}>
                        <img className='rounded-lg' width={"30px"} src={discord} alt="" />
                    </button>
                </div>
            </div>
        </div>
  );
}
