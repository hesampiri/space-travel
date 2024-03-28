import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [move, setmove] = useState(" close");

  function motionhandler() {
    if (move == " close") {
      setmove(" open");
    } else {
      setmove(" close");
    }
  }

  return (
    <>
      <div className="flex flex-row lg:pt-[40px] lg:py-0  py-[40px] justify-between  ">
        <div className="w-1/2">
          <hr className="relative lg:top-[45px] lg:left-[250px] z-20 w-4/5 lg:visible invisible" />
          <div className="logo h-full w-2/5 "></div>
        </div>
        <div className="bg-white flex justify-center w-1/2 right lg:block hidden pl-[70px] ">
          <ul className="flex [&>li]:text-white [&>li]:text-lg w-4/5 justify-around nav">
            <li>
              <NavLink to={"/"}>
                <p className="py-[30px] navitem flex">
                  <p className="pr-3">01</p>HOME
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/destination"}>
                <p className=" py-[30px] navitem flex">
                  <p className="pr-3 ">02</p>DESTINATION
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/crew"}>
                <p className=" py-[30px] navitem flex">
                  <p className="pr-3 ">03</p>CREW
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/technology"}>
                <p className=" py-[30px] navitem flex">
                  <p className="pr-3 ">04</p>TECHNOLOGY
                </p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="lg:hidden  w-1/5 flex justify-end items-center p-[10px]"
          onClick={motionhandler}
        >
          <img
            className="h-[30px]"
            src="./assets/shared/icon-hamburger.svg"
            alt=""
          />
        </div>
        <div
          className={`absolute border w-1/2 h-full top-0 right-0 sidebar lg:hidden ${move} z-40`}
        >
          <div className="p-[20px]" onClick={motionhandler}>
            <img src="./assets/shared/icon-close.svg" alt="" />
          </div>
          <ul className="[&>li]:text-white [&>li]:text-lg w-4/5 justify-around nav lg:hidden">
            <li>
              <NavLink to={"/"}>
                <p className="p-[30px]  flex">HOME</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/destination"}>
                <p className=" p-[30px] flex">DESTINATION</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/crew"}>
                <p className=" p-[30px]  flex">CREW</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/technology"}>
                <p className=" p-[30px]  flex sideitem">TECHNOLOGY</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
