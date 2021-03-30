import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'



const Navcontrol = ()=>{
    const [navIndex, setNavIndex] = useState({ activeIndex: 1 });
    function handleClick(index) 
    {
        setNavIndex({ activeIndex: index });
        console.log(navIndex);
    }
    return (
   <ul className="navControl">
       <li className={navIndex.activeIndex === 1 ? 'active' : null}  key={1} onClick={handleClick.bind(this,1)}>All</li>
       <li className={navIndex.activeIndex === 2 ? 'active' : null}  key={2} onClick={handleClick.bind(this,2)}>Board</li>
       <li className={navIndex.activeIndex === 3 ? 'active' : null} key={3} onClick={handleClick.bind(this,3)}>Graph</li>
       <li className={navIndex.activeIndex === 4 ? 'active' : null} key={4} onClick={handleClick.bind(this,4)}>Recent</li>
       <li className={navIndex.activeIndex === 5 ? 'active' : null} key={5} onClick={handleClick.bind(this,5)}><FontAwesomeIcon icon={faEllipsisV} /></li>
    </ul>
)}

export default Navcontrol;
