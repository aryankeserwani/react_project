"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const page = () => {
  const [users, setusers] = useState([])
  const getUsers = async ()=>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    setusers(data)
  }
  useEffect(() => {
    getUsers()
  }, [])
  
  return (
   <>
   <button onClick={getUsers} className='bg-green-600 text-white mx-8 px-6 my-5
    py-2 rounded font-bold'>Get Data</button>
    <div className='p-8 bg-slate-200 mx-10'>
      <ul>
      {users.map((e)=>{
        return <li>{e.username} --- <a href={`/${e.id}`}>Explore</a></li>
        })}
      </ul>
    </div>
   </>
  );
};

export default page;
