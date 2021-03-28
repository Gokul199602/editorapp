import React,{useEffect,useRef,useState} from "react";
import {Link,Route,Switch,  BrowserRouter as Router} from 'react-router-dom';

const Leaf = (props)=>{
    return (
        <Link to={'/leaf/'+props.name.id} className="sideNavBar--collections--subNode">
                    <span>{props.name.nodeName}</span>
        </Link>
        
)}

export default Leaf;
