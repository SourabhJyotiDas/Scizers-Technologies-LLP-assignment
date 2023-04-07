import React, { useEffect } from 'react';
import { deleteUser, getAllUsers } from '../actions/user.js';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from './Loader.js';
import { toast } from 'react-toastify';

export default function Home() {

  const dispatch = useDispatch()
  const { users, loading } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch]);

  const deleteHandler = async (id) => {
    await dispatch(deleteUser(id));
    dispatch(getAllUsers())
    toast.success('User Deleted Successfully', {
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
          <div>
            <div className='p-10 flex items-center justify-center flex-wrap'>
              {
                users && users.map((element) => {
                  return <div className='p-5 bg-gray-300 shadow-xl m-3 w-[20vw] h-[20vh]' key={element._id}>
                    <h2> Name : {element.name}</h2>
                    <h2> Mobile number : {element.mobileNo}</h2>
                    <div className='items-center flex justify-between py-3'>

                      <Link to={`/update/user/${element._id}`}>
                        <button className='bg-blue-500 text-white p-3'>Update</button>
                      </Link>
                      <button className='bg-red-500 text-white p-3' onClick={() => { deleteHandler(element._id) }}>Delete</button>

                    </div>
                  </div>

                })
              }
            </div>
          </div>
      }
    </>
  )
}
