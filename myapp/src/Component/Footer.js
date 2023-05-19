import React from 'react'
import discord from './discord.png'
export default function Footer() {
    return (
        <div className='mt-3 flex-col justify-end bg-blue-800 text-white p-3 font-extrabold text-6xl'>
            <div className='flex justify-center items-center'>
                Join our community 
            </div>
            <div className='flex justify-center items-center'>
                of active users on
                <button className='ml-3 mt-3' type='button' onClick={()=>{}}>
                    <img className='rounded-lg' width={"70px"} src={discord} alt="" />
                </button>
            </div>
        </div>
    )
}
