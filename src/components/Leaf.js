import React,{useEffect,useRef,useState} from "react";


const Leaf = (props)=>{
    return (
        <div className="sideNavBar--collections--subNode">
             <span>{props.name.nodeName}</span>
        </div>
)}

export default Leaf;
