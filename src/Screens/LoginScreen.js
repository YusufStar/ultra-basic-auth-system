import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom'
import { data } from '../App'

const LoginScreen = () => {
  const navigate = useNavigate()
  const handleLogin = e => {
    e.preventDefault()
    const findUser = data.users.find((item) => {
      return item.username.toLowerCase() === e.target[0].value.toLowerCase()
    })

    if(findUser) {
      if(findUser.password === e.target[1].value) {
        data.user = findUser
        toast.success("Success Login")
        navigate("/home")
      } else {
        toast.error("Invalid Password")
      }
    }else {
      toast.error("User Not Found.")
    }
  }

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <form onSubmit={handleLogin} className="bg-[#2f2f2f] w-full max-w-[400px] mx-auto p-8 px-8 rounded-lg">
        <h2 className='text-4xl text-white font-bold text-center'>SIGN IN</h2>
        <div className='flex flex-col text-gray-400 py-2 text-xs'>
          <label>User Name</label>
          <input req="true" required type="text" className='rounded-lg bg-gray-700 mt-2 p-2 px-4 text-xs text-white focus:border-blue-500 focus:bg-gray-800 border-[1px] border-transparent outline-none transition-all duration-300' />
        </div>
        <div className='flex flex-col text-gray-400 py-2 text-xs'>
          <label>Password</label>
          <input req="true" required type="password" className='rounded-lg bg-gray-700 mt-2 p-2 px-4 text-xs text-white focus:border-blue-500 focus:bg-gray-800 border-[1px] border-transparent outline-none transition-all duration-300' />
        </div>
        <div className="flex justify-between text-gray-400 text-sm py-2">
          <p className='flex items-center cursor-pointer'><input className='mr-2' type="checkbox" />Remember Me</p>
          <p className='cursor-pointer'>Forgot Password</p>
        </div>
        <button className='w-full my-5 py-4 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 transition-all duration-300 text-white font-semibold rounded-lg text-sm'>Sign In</button>
      </form>
    </div>
  )
}

export default LoginScreen