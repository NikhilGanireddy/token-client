import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const CreateStudent = () => {
  const {
    user,
    darkMode,
    menu,
    setUser,
    setDarkMode,
    setReady,
    changeMainBg,
    changeBg,
    showSideBar,
    BtnBg,
    changeBgMenu,
    hoverBgChange,
    hoverTextChange,
  } = useContext(UserContext);

  const [name, setName] = useState("");
  const [hallTicket, setHallTicket] = useState("");
  const [room, setRoom] = useState("");
  const [year, setYear] = useState("");
  const [batch, setBatch] = useState("");
  const [branch, setBranch] = useState("");
  const [mobile, setMobile] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherMobile, setMotherMobile] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherMobile, setFatherMobile] = useState("");
  const [address, setAddress] = useState("");
  const [attendance, setAttendance] = useState("");
  const [outings, setOutings] = useState("");
  const [complaints, setComplaints] = useState("");
  const [messCharges, setMessCharges] = useState("");

  const resetInputs = (value) => {
    setAddress(value),
      setAttendance(value),
      setBatch(value),
      setBranch(value),
      setComplaints(value),
      setFatherMobile(value),
      setFatherName(value),
      setHallTicket(value),
      setMessCharges(value),
      setMobile(value),
      setMotherMobile(value),
      setMotherName(value),
      setName(value),
      setOutings(value),
      setRoom(value),
      setYear(value);
  };

  const createUser = async () => {
    if (
      !name ||
      !hallTicket ||
      !room ||
      !year ||
      !batch ||
      !branch ||
      !mobile ||
      !motherName ||
      !motherMobile ||
      !fatherName ||
      !fatherMobile ||
      !address ||
      !outings ||
      !attendance ||
      !messCharges
    ) {
      toast.error("Please fill all the forms");
    } else {
      try {
        await axios
          .post("/admin/students/createStudent", {
            name,
            hallTicket,
            room,
            year,
            batch,
            branch,
            mobile,
            motherName,
            motherMobile,
            fatherName,
            fatherMobile,
            address,
            attendance,
            outings,
            complaints,
            messCharges,
          })
          .then((data) => {
            toast.success(data.data.message);
            resetInputs("");
          });
      } catch (e) {
        toast.error(e.message);
      }
    }
  };

  return (
    <div
      className={`w-full h-full rounded-2xl flex flex-col p-4 gap-12 overflow-y-scroll scrollbar ${changeBg()}`}
    >
      <h1 className={` text-3xl font-semibold text-center`}>
        Upload Student Details
      </h1>
      <form
        action=""
        className={`grid sm:grid-cols-1 sm:gap-2 md:gap-3 lg:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
      >
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` font-semibold px-4`}>Name</label>
          <input
            type={"text"}
            placeholder="Student Name"
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={name}
            onChange={(e) => setName(e.target.value.toUpperCase())}
          />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` font-semibold px-4`}>Hall Ticket</label>
          <input
            type={"text"}
            placeholder="HallTicket no"
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={hallTicket}
            onChange={(e) => setHallTicket(e.target.value.toUpperCase())}
          />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` font-semibold px-4`}>Branch</label>
          <input
            type={"text"}
            placeholder="Branch"
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={branch}
            onChange={(e) => setBranch(e.target.value.toUpperCase())}
          />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` font-semibold px-4`}>Year</label>
          <input
            type={"text"}
            placeholder="Year"
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={year}
            onChange={(e) => setYear(e.target.value.toUpperCase())}
          />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` font-semibold px-4`}>Batch</label>
          <input
            type={"text"}
            placeholder="20XX-20XX"
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={`font-semibold  px-4`}>Room</label>
          <input
            type={"text"}
            placeholder="Room no"
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={room}
            onChange={(e) => setRoom(e.target.value.toUpperCase())}
          />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={`font-semibold  px-4`}>Robile</label>
          <input
            type={"text"}
            placeholder="Room no"
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={mobile}
            onChange={(e) => setMobile(e.target.value.toUpperCase())}
          />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` font-semibold px-4`}>Mother Name</label>
          <input
            type={"text"}
            placeholder="Mother name"
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={motherName}
            onChange={(e) => setMotherName(e.target.value.toUpperCase())}
          />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` font-semibold px-4`}>Mother Mobile</label>
          <input
            type={"text"}
            placeholder="Mother mobile no"
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={motherMobile}
            onChange={(e) => setMotherMobile(e.target.value)}
          />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` font-semibold px-4`}>Father Name</label>
          <input
            type={"text"}
            placeholder="Father name"
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value.toUpperCase())}
          />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` font-semibold px-4`}>Father Mobile</label>
          <input
            type={"text"}
            placeholder="Father mobile no"
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={fatherMobile}
            onChange={(e) => setFatherMobile(e.target.value)}
          />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` font-semibold px-4`}>Address</label>
          <input
            type={"text"}
            placeholder="His/Her's Address"
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` font-semibold px-4`}>Attendence</label>
          <input
            type={"text"}
            placeholder="Attendence"
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
          />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` font-semibold px-4`}>Outings</label>
          <input
            type={"text"}
            placeholder="No of outings"
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={outings}
            onChange={(e) => setOutings(e.target.value)}
          />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` font-semibold px-4`}>Complaints</label>
          <input
            type={"text"}
            placeholder={user.complaints.length}
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={complaints}
            onChange={(e) => setComplaints(e.target.value)}
          />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` font-semibold px-4`}>Mess Charges</label>
          <input
            type={"text"}
            placeholder="Mess charges"
            className={` placeholder:text-gray-900 placeholder:capitalize border-gray-600`}
            value={messCharges}
            onChange={(e) => setMessCharges(e.target.value)}
          />
        </div>
      </form>
      <div className={` flex w-full items-center justify-center `}>
        <Link
          className={`px-6 py-2 rounded-xl text-[#4F0DAA] font-semibold bg-white`}
          onClick={createUser}
          // to={"/admin/students"}
          type={"submit"}
        >
          Create Student
        </Link>
      </div>
    </div>
  );
};

export default CreateStudent;
