import React,{useEffect,useRef,useState} from "react";
import {Link,Route,Switch,  BrowserRouter as Router} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {detail} from "../actions/";

const Leaf = (props)=>{
    let nodes = props.getAllNodes();
    const dispatch = useDispatch();
    const getUrlId = ()=>
    {
        let pathname =  window.location.pathname;
        if(window.location.pathname.indexOf("collection")==-1)
        {
            return parseInt(pathname.split('/')[pathname.split('/').length-1]);
        }
        else
           return null;
    }
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
    if(getUrlId())
    {
        dispatch(detail(getNode(getUrlId())));
    }
    var removeActiveEls = ()=>{
        let activeEls = document.querySelectorAll(".sideNavBar--collections .active");
        activeEls.forEach((els)=>{
            els.classList.remove("active");
        }); 
    }
    var openLeaf = (e)=>
    {
        dispatch(detail(getNode(props.name.id)));
        removeActiveEls();
        let activeElement =  document.querySelector(".activeElement"),
        targetElement = e.target,
        topPosition = targetElement.offsetTop-8;
        targetElement.classList.add("active");
        activeElement.style.cssText = `
        top:${topPosition}px;
        display:block;
        `;
    }

    console.log("leaf nodes",nodes);
    return (
        <Link to={'/leaf/'+props.name.id} onClick={openLeaf} className="sideNavBar--collections--subNode" data-path={props.name.path}>
                    <span data-path={props.name.path}>{props.name.nodeName}</span>
        </Link>
        
)}

export default Leaf;
