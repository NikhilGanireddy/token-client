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

const adminSideBarData = [{
    id: 1, name: "Dashboard", icon: <UilEstate/>, path: "/admin/dashboard", class: "",
}, {
    id: 2, name: "Students", icon: <UilUsersAlt/>, path: "/admin/students", class: "",
},

    {
        id: 9, name: "Logout", icon: <UilSignout/>, path: "/admin/logout", class: " absolute bottom-4 min-w-max",
    },];

export default adminSideBarData;
