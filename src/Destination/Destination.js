import "./Destination.css"
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import data from "../tech.json"
import { NavLink } from "react-router-dom";

function Destination(){

    const[json , setjson] = useState(data)
    const[planet , setplanet] = useState({})
    const[planetname , setplanetname] = useState('moon')
    const[plntdisc , setplntdisc] = useState('See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.')
    const[plntpng , setplntpng] = useState("./assets/destination/image-moon.png")
    const[distance , setdistance] = useState('384,400 km')
    const[travel , settravel] = useState('3 days')
    const[active , setactive] = useState(["choose"])

    function destipicker(e){
        setplanet(e.target.innerText)
        const planetname = e.target.id ; 
        json.destinations.map(item =>{
            if(item.id == planetname){
                setplanet(item)
                setplanetname(item.name)
                setplntpng(item.images.png)
                setplntdisc(item.description)
                setdistance(item.distance)
                settravel(item.travel)
            }
        })

        const array=["false","false","false"]
        array[planetname] = 'choose'
        setactive(array)
    }


    return(
        <>
        <div className="w-full sm:h-screen h-[1200px] background">
            <Navbar/>
            <div className="container m-auto flex flex-wrap">
                <div className="md:w-1/2 w-full sm:h-[600px] flex sm:justify-end flex-col">
                    <div className="text-white w-full sm:h-[500px] h-[400px] flex justify-between flex-col items-center mb-[20px]">
                        <h1 className="uppercase text-3xl tracking-widest flex"><p className="px-4 text-gray-500">01</p> pick your destination</h1>
                        <img className="sm:w-1/2 w-2/3" src={plntpng} alt="" />
                    </div>
                </div>
                <div className="sm:w-1/2 flex items-center p-4 sm:p-0 ">
                    <div className="sm:w-2/3 h-[450px] text-white px-[10px] text-center sm:text-left"> 
                        <div className="w-full flex justify-center sm:block">
                            <ul className="flex justify-around text-xl sm:w-2/3 w-4/5 py-[10px]">
                                <li className={`option py-4 ${active[0]}`} onClick={destipicker} id={0}>MOON</li>
                                <li className={`option py-4 ${active[1]}`} onClick={destipicker} id={1}>MARS</li>
                                <li className={`option py-4 ${active[2]}`} onClick={destipicker} id={2}>EUROPA</li>
                                <li className={`option py-4 ${active[3]}`} onClick={destipicker} id={3}>TITAN</li>
                            </ul>
                        </div>
                        <h2 className="sm:text-9xl text-7xl uppercase header py-[20px]">{planetname}</h2>
                        <p className="text-xl pb-[30px]">{plntdisc}</p>
                        <hr className=""/>
                        <div className="flex justify-between sm:w-2/3 sm:flex-row flex-col bg-red-20">
                            <div className="p-[10px] ">
                                <p>AVG . DISTANCE</p>
                                <p className="sm:text-2xl text-4xl py-2 uppercase infos">{distance}</p>
                            </div>
                            <div className="p-[10px]">
                                <p>EST . TIME TRAVEL</p>
                                <p className="sm:text-2xl text-4xl py-2 uppercase infos">{travel}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Destination