import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, clearMessage, getUserDetails, updateProfile } from '../actions/user';
import { useParams } from 'react-router-dom';
import Loader from "./Loader"
import { toast } from 'react-toastify';


export default function UpdateUser() {

  const { user, loading, error, message } = useSelector(state => state.user);

  const [name, setName] = useState("")
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const params = useParams()

  const updateHandler = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(name, number, params.id));
    setName("")
    setNumber("")
    toast.success('User Updated Successfully', {
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

  useEffect(() => {
    if (error) {
      dispatch(clearErrors())
    }
    if (message) {
      dispatch(clearMessage())
    }
    dispatch(getUserDetails(params.id))
  }, [dispatch, params.id])


  return (
    <div>
      {
        loading ? <Loader /> :
          <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
            {
              user && <form onSubmit={updateHandler} className='flex w-[40vw] h-[50vh] border border-blue-500 flex-col justify-center items-center mt-10'>
                <h1 className=' text-2xl'>Update User</h1>
                <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Name' className='w-[90%] py-2 border border-blue-500 outline-none my-2 px-2 ' />
                <input value={number} onChange={(e) => { setNumber(e.target.value) }} type="number" placeholder='Number' className='w-[90%] py-2 border border-blue-500 outline-none my-2 px-2 ' />
                <button type='submit' className=' flex justify-center items-center bg-blue-500 w-[90%] py-3 my-5  text-white font-semibold'>Update</button>
              </form>
            }
          </div>
      }
    </div>
  )
}
