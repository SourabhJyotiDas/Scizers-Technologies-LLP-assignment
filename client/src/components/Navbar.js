import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllUsers,  } from '../actions/user'
import { useDispatch } from 'react-redux';

export default function Navbar() {

    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(getAllUsers(text))
    }


    return (
        <div>
            <nav className="bg-blue-500 text-white p-3 space-x-5 flex items-center justify-end">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
                <input className='p-2 outline-none text-black w-[40%] rounded-lg' type="text" placeholder='Search by Name or Number' value={text} onChange={(e) => { setText(e.target.value) }} />
                <button onClick={handleSubmit} className='bg-white text-black py-2 px-3 rounded-md'>Search</button>
            </nav>
        </div>
    )
}
