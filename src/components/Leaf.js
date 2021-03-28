import React,{useEffect,useRef,useState} from "react";
import {Link,Route,Switch,  BrowserRouter as Router} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {detail} from "../actions/";

const Leaf = (props)=>{
    let nodes = props.getAllNodes();
    const dispatch = useDispatch();
    var getNode = (id) =>{
        let returnObj;
        props.getAllNodes().forEach((els)=>{
            if(els.id == id)
            {
                returnObj = els;
            }
        })
        return returnObj;
    }

    var openLeaf = ()=>
    {
        dispatch(detail(getNode(props.name.id)));
    }

    console.log("leaf nodes",nodes);
    return (
        <Link to={'/leaf/'+props.name.id} onClick={openLeaf} className="sideNavBar--collections--subNode">
                    <span>{props.name.nodeName}</span>
        </Link>
        
)}

export default Leaf;
