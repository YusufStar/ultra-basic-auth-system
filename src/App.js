import { createContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import UserScreen from "./Screens/UserScreen";

export const data = {
  users: [
    {
      name: "TestUser",
      username: "test",
      country: "YusufStar",
      profilePhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfPrypAr-UwtCONzfNqZ4BkMVxIfK-rRAprQ&usqp=CAU",
      followers: ["Yusuf"],
      following: ["Yusuf"],
      password: "0000",
      notifications: [
        {
          text: "Hi I am YusufStar. Welcome To My Project",
          type: "Hello",
        },
      ],
    },
    {
      name: "Yusuf",
      username: "YusufStar",
      country: "Turkey",
      profilePhoto:
        "https://arkeofili.com/wp-content/uploads/2016/11/zeus21.jpg",
      followers: ["TestUser"],
      following: ["TestUser"],
      password: "1234",
      notifications: [
        {
          text: "Hi I am YusufStar. Welcome To My Project",
          type: "Hello",
        },
      ],
    },
  ],
};

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Navigate to="/login" />,
  },
  { path: "/login", element: <LoginScreen /> },
  { path: "/home", element: <HomeScreen /> },
  { path: "/user/:name", element: <UserScreen /> },
]);

function App() {
  const authContext = createContext();
  return (
    <authContext.Provider value={{ data }}>
      <div className="bg-[#1f1f1f] w-full h-auto min-h-screen">
        <Toaster position="top-center" reverseOrder={false} />
        <RouterProvider router={router} />
      </div>
    </authContext.Provider>
  );
}

export default App;