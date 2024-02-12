import './tech.css'
import Navbar from "../Navbar/Navbar";
import data from "../tech.json"
import { useState } from 'react';

function Technology(){
    
    const[json , setjson] = useState(data)
    const[techname , settechname] = useState('Launch vehicle')
    const[techimg , settechimg] = useState('./assets/technology/image-launch-vehicle-portrait.jpg')
    const[desc , setdesc] = useState("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!")
    
    const[active , setactive] = useState(["actived"])

    function techpicker(e){
        const tech = e.target.id
        json.technology.map(item =>{
            if(item.id == tech){
                settechname(item.name)
                settechimg(item.images.portrait)
                setdesc(item.description)
            }
        })

        const newarray = ['false' , 'false' , 'false'];
        newarray[tech] = "actived"
        setactive(newarray)
    }
    
    return(
        <>
        <div className="backtech w-full sm:h-screen h-[1100px]">
        <Navbar/>
        <div className='container m-auto flex flex-col-reverse sm:flex-row bg-blac'>
            <div className='sm:w-1/2 sm:h-[550px] flex flex-col items-center justify-between pt-[70px] sm:pl-[70px] '>
                <div className='text-3xl w-3/4 hidden sm:block'>
                    <h1 className='uppercase text-white flex tracking-widest'><p className='text-gray-500 pr-4'>04</p>space launch 101</h1>
                </div>
                <div className=' flex justify-around items-center flex-col sm:flex-row text-center sm:text-left'>
                    <div className='sm:w-1/4 w-1/2 flex sm:flex-col sm:h-[400px] items-center justify-center '>
                        <button className={`border-[1px] text-3xl text-white sm:py-[15px] py-[5px] sm:w-2/5  w-1/5 rounded-full my-3 ${active[0]}`} onClick={techpicker}  id={0} >1</button>
                        <button className={`border-[1px] text-3xl text-white sm:py-[15px] py-[5px] sm:w-2/5  w-1/5 rounded-full my-3 mx-3 sm:mx-01 ${active[1]}`} onClick={techpicker}  id={1}>2</button>
                        <button className={`border-[1px] text-3xl text-white sm:py-[15px] py-[5px] sm:w-2/5  w-1/5 rounded-full my-3 ${active[2]}`} onClick={techpicker}  id={2} >3</button>
                    </div>
                    <div className='sm:w-3/5 p-4 sm:p-0 flex flex-col justify-center '>
                        <h2 className='uppercase text-gray-300'>the terminology...</h2>
                        <h1 className='text-5xl text-white uppercase infos pb-4 pt-2'>{techname}</h1>
                        <p className='text-xl text-gray-300'>{desc}</p>
                    </div>
                </div>
            </div>
            <div className='sm:w-1/2 flex justify-end sm:pt-[70px] h-[400px] sm:h-[600px]'>
                <img src={techimg} alt="" />
            </div>
        </div>
        </div>
        </>
    )
}

export default Technology