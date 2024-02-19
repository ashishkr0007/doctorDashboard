import Image from "next/image";
import Active from "./../components/Active";
import ActivePatient from "./../components/ActivePatient";
import Chats from "./../components/Chats";
import Consultation from "../components/Consultation";
import Navbar from "./../components/Navbar";
import Patientvisited from "./../components/Patientvisited";
import Profile from "./../components/Profile";
import Sidenavbar from "./../components/Sidenavbar";
import Statistic from "./../components/Statistic";
import Teameting from "./../components/Teameting";
import Upcomingevent from "./../components/Upcomingevent";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 ">
      <div className="bg-neutral-100 border-2 rounded-xl p-2">
        {" "}
        <Active />{" "}
      </div>
      N
      <div className="bg-neutral-100 border-2 rounded-xl p-2">
        {" "}
        <ActivePatient />{" "}
      </div>
      <div className="bg-neutral-100 border-2 rounded-xl p-2">
        {" "}
        <Chats />{" "}
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 bg-neutral-100 border-2 rounded-xl p-2 ">
        {" "}
        <Consultation />{" "}
      </div>
      <div className="bg-neutral-100 border-2 rounded-xl p-2">
        {" "}
        <Navbar />{" "}
      </div>
      <div className="bg-neutral-100 border-2 rounded-xl p-2">
        {" "}
        <Sidenavbar />{" "}
      </div>
      <div className="col-span-2 bg-neutral-100 border-2 rounded-xl p-2">
        {" "}
        <Patientvisited />{" "}
      </div>
      <div className="bg-neutral-100 border-2 rounded-xl p-2">
        <Profile />{" "}
      </div>
      <div className="bg-neutral-100 border-2 rounded-xl p-2">
        {" "}
        <Profile />{" "}
      </div>
      <div className="bg-neutral-100 border-2 rounded-xl p-2">
        {" "}
        <Statistic />{" "}
      </div>
      <div className=" bg-neutral-100 border-2 rounded-xl p-2">
        <Teameting />
      </div>
      <div className="bg-neutral-100 border-2 rounded-xl p-2">
        {" "}
        <Upcomingevent />
      </div>
    </div>
  );
}
