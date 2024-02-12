import Crew from "./Crew/crew";
import Destination from "./Destination/Destination";
import Home from "./Home/Home";
import Technology from "./technology/tech";


const Routes = [
    { path:"/" , element : <Home/>},
    { path:"/destination" , element : <Destination/>},
    { path:"/crew" , element : <Crew/>},
    { path:"/technology" , element : <Technology/>},
]

export default Routes