import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { useRef, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";

function Home() {
  const [hover, sethover] = useState("");
  const circle = useRef();

  function hoverhandler() {
    console.log("hovered");
    sethover("hovered");
  }

  function leavehandler() {
    sethover("removed");
  }
  function navigate(){
    return <NavLink to={'/crew'}/>
  }

  return (
    <>
      <div>
        <Navbar />
        <div className="container m-auto flex flex-wrap">
          <div className="text-white md:w-1/2 w-full lg:h-[600px] flex justify-center sm:items-center sm:p-0 p-6 ">
            <div className="md:w-1/2 bg-yellow-20 text-center sm:text-left">
              <h2 className="text-3xl md:text-4xl uppercase text-gray-300">So, you want to travel to</h2>
              <h1 className="text-8xl md:text-9xl py-[20px] header">SPACE</h1>
              <p className="text-lg text-gray-300">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
          </div>
          <div className="md:w-1/2 w-full lg:h-[600px] flex justify-center items-center right-sec">
            <div
              className="bg-white rounded-full w-[250px] h-[250px] flex justify-center items-center z-30 "
              onMouseEnter={hoverhandler}
              onMouseLeave={leavehandler}
              onClick={navigate}
            >
            <NavLink to={'/destination'}><p className="xl:px-[60px] xl:py-[100px] text-3xl rounded-full">EXPLORE</p></NavLink>
            </div>
            <div
              className={`bg-white rounded-full sm:w-[250px] sm:h-[250px] absolute layer ${hover}`}
              ref={circle}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
