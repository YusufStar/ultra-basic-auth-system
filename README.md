# ultra-basic-auth-system
[Go Website](https://my-sc.vercel.app/)

```javascript Test Data In App.js
data = {
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
}
