import "./crew.css";
import Navbar from "../Navbar/Navbar";
import data from "../tech.json";
import { useState } from "react";

function Crew() {
  const [json, setjson] = useState(data);
  const [person, setperson] = useState("Douglas Hurley");
  const [role, setrole] = useState("Commander");
  const [bio, setbio] = useState(
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  );
  const [prsnimg, setprsnimg] = useState(
    "./assets/crew/image-douglas-hurley.png"
  );
  const [active, setactive] = useState(["active-dot"]);

  function crewpicker(e) {
    const person = e.target.id;
    json.crew.map((item) => {
      if (item.id == person) {
        setperson(item.name);
        setrole(item.role);
        setbio(item.bio);
        setprsnimg(item.images.png);
      }
    });

    const array = ["false", "false", "false"];
    array[person] = "active-dot";
    setactive(array);
  }

  return (
    <>
      <div className="backcrew w-full sm:h-screen">
        <Navbar />
        <div className="container m-auto flex flex-wrap-reverse">
          <div className="sm:w-1/2 sm:h-[650px] h-[400px] flex justify-end sm:justify-around items-center sm:flex-col flex-col-reverse sm:py-[30px] sm:pl-[70px]">
            <div className="w-3/4">
              <h1 className="uppercase text-3xl tracking-widest flex text-white sm:visible invisible ">
                <p className="pr-4 text-gray-500">03</p>meet your crew
              </h1>
            </div>
            <div className="text-white sm:w-3/4 text-center sm:text-left px-4 sm:px-0 h-[300px]">
              <h2 className="sm:text-4xl text-3xl text-gray-400 uppercase infos">
                {role}
              </h2>
              <h1 className="sm:text-5xl text-4xl uppercase pb-6 pt-3 infos">
                {person}
              </h1>
              <p className="text-xl text-gray-300">{bio}</p>
            </div>
            <div className="sm:py-4 pb-8 w-3/4 text-center sm:text-left ">
              <button
                className={`bg-gray-500 p-[6px] rounded-full mx-3 hover:bg-gray-300 ${active[0]}`}
                onClick={crewpicker}
                id={0}
              ></button>
              <button
                className={`bg-gray-500 p-[6px] rounded-full mx-3 hover:bg-gray-300 ${active[1]}`}
                onClick={crewpicker}
                id={1}
              ></button>
              <button
                className={`bg-gray-500 p-[6px] rounded-full mx-3 hover:bg-gray-300 ${active[2]}`}
                onClick={crewpicker}
                id={2}
              ></button>
              <button
                className={`bg-gray-500 p-[6px] rounded-full mx-3 hover:bg-gray-300 ${active[3]}`}
                onClick={crewpicker}
                id={3}
              ></button>
            </div>
          </div>
          <div className="sm:w-1/2 sm:h-[660px] h-[450px] flex flex-wrap justify-center sm:items-end items-center p-4 sm:p-0 bg-pink-60 w-full">
            <img className="sm:h-3/4 h-[400px] " src={prsnimg} alt="" />
            <div className="bg-white w-full h-[1px] sm:hidden"></div>
          </div>
          <div className="flex justify-center mb-4 w-full sm:hidden">
            <h1 className="uppercase text-3xl tracking-widest flex text-white  ">
              <p className="pr-4 text-gray-500">03</p>meet your crew
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Crew;
