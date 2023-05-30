import {
  UilEstate,
  UilUserCheck,
  UilUtensilsAlt,
  UilBedDouble,
  UilUsersAlt,
  UilCommentQuestion,
  UilUser,
  UilFeedback,
  UilSignout,
} from "@iconscout/react-unicons";

const userSidebarData = [
  {
    id: 1,
    name: "Dashboard",
    icon: <UilEstate />,
    path: "/user/dashboard",
    class: "",
  },
  {
    id: 2,
    name: "Attendance",
    icon: <UilUserCheck />,
    path: "/user/attendance",
    class: "",
  },
  {
    id: 3,
    name: "Food",
    icon: <UilUtensilsAlt />,
    path: "/user/food",
    class: "",
  },
  {
    id: 4,
    name: "Room",
    icon: <UilBedDouble />,
    path: "/user/room",
    class: "",
  },

  {
    id: 5,
    name: "Ms",
    icon: <UilUsersAlt />,
    path: "/user/ms",
    class: "",
  },
  {
    id: 6,
    name: "Complaints",
    icon: <UilCommentQuestion />,
    path: "/user/complaints",
    class: "",
  },
  {
    id: 7,
    name: "Profile",
    icon: <UilUser />,
    path: "/user/profile",
    class: "",
  },
  {
    id: 8,
    name: "Feedback",
    icon: <UilFeedback />,
    path: "/user/feedback",
    class: "",
  },
  {
    id: 9,
    name: "Logout",
    icon: <UilSignout />,
    path: "/user/logout",
    class: " absolute bottom-4 min-w-max",
  },
];

export default userSidebarData;
