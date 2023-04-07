import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/user';
import Loader from './Loader';
import { toast } from 'react-toastify';



export default function CreateUser() {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("");

    const { loading } = useSelector(state => state.user);


    const dispatch = useDispatch();

    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(register(name, number));
        setName("")
        setNumber("")
        toast.success('User Created Successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
    }

    return (
        <>
            {
                loading ? <Loader /> :
                    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
                        <form onSubmit={submitHandler} className='flex w-[40vw] h-[50vh] border border-blue-500 flex-col justify-center items-center mt-10'>
                            <h1 className=' text-2xl'>Create Users</h1>
                            <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Name' className='w-[90%] py-2 border border-blue-500 outline-none my-2 px-2 ' />
                            <input value={number} onChange={(e) => { setNumber(e.target.value) }} type="number" placeholder='Number' className='w-[90%] py-2 border border-blue-500 outline-none my-2 px-2 ' />
                            <button type='submit' className=' flex justify-center items-center bg-blue-500 w-[90%] py-3 my-5  text-white font-semibold'>Create</button>
                        </form>
                    </div>
            }
        </>
    )
}
