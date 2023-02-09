import React, { useState } from "react";
import { data } from "../App";
import { AiTwotoneNotification } from "react-icons/ai";
import { FaHandSparkles } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [notifPanel, setNotifPanel] = useState(false)
  const user = data.user;
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-[225px] flex flex-col items-center relative">
        <div className="w-auto h-auto absolute left-full bottom-full">
          <div className="relative">
            <AiTwotoneNotification onClick={() => setNotifPanel(!notifPanel)} color="#fff" className="cursor-pointer" />
            {notifPanel && <div className="absolute left-6 w-[300px] h-[150px] px-2 py-2 bg-[#3f3f3f] flex flex-col gap-4 rounded-lg">
              {data.user.notifications.map((item) => (
                <div className="w-full py-3 bg-slate-700 flex px-4 rounded-md">
                  <FaHandSparkles color="#fff"/>
                  <h1 className="text-xs text-white pl-3">{item.text}</h1>
                </div>
              ))}
            </div>}
          </div>
        </div>
        <img
          src={user.profilePhoto}
          className="w-24 h-24 rounded-full object-cover"
        />
        <h1 className="w-full text-center font-semibold text-xl text-white py-2">
          {user.username}
        </h1>
        <div className="w-full flex pt-2 flex-col">
          <div className="w-full px-1 flex items-center justify-between">
            <p className="text-white font-semibold text-sm">Followers</p>
            <p className="text-white font-semibold text-sm">Following</p>
          </div>
          <div className="w-full flex items-center gap-2 justify-between">
            <div className="w-full h-auto min-h-[100px] overflow-y-auto bg-[#4f4f4f] rounded-xl">
              {user.followers.map((follower) => {
                const findUser = data.users.find((item) => {
                  return follower === item.name
                })
                return (
                  <Link to={`/user/${findUser.name}`} className="flex w-full cursor-pointer py-2 rounded-lg px-2 items-center justify-center">
                    <img src={findUser?.profilePhoto} className="w-6 h-6 object-cover mr-1 rounded-full"/>
                    <p className="text-xs font-semibold text-[#f3f3f3]">@{findUser.name}</p>
                  </Link>
                )
              })}
            </div>
            <div className="w-full h-auto min-h-[100px] overflow-y-auto bg-[#4f4f4f] rounded-xl">
              {user.following.map((follower) => {
                const findUser = data.users.find((item) => {
                  return follower === item.name
                })
                return (
                  <Link to={`/user/${findUser.name}`} className="flex cursor-pointer w-full py-2 rounded-lg px-2 items-center justify-center">
                    <img src={findUser?.profilePhoto} className="w-6 h-6 object-cover mr-1 rounded-full"/>
                    <p className="text-xs font-semibold text-[#f3f3f3]">@{findUser.name}</p>
                  </Link>
                )
              })}
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;