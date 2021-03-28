import React,{useEffect,useRef,useState} from "react";
import {Link,Route,Switch,  BrowserRouter as Router} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft,faExpandAlt,faPlus,faEllipsisV,faPlusSquare,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import Container from "./Container";
import Leaf from "./Leaf";


const Sidenav = (props)=>{
  const inputCheckRef = useRef(null);
  let nodes =  props.isNode;
  const appendChild = (nodeEls)=>
  {
      if(!nodeEls)
        return;
      let childList = [];
      for (const [i, node] of nodeEls.entries()) {
        if(node.nodeType == "container")
        childList.push(<Container key={node.id}   name={node} callFun={appendChild} isOpenModal={props.isOpenModal}/>);
        else
        childList.push(<Leaf key={node.id}   name={node} callFun={appendChild} getAllNodes={props.getAllNodes} />);
      }    
      return childList;
  }
  let list = [];
  for (const [i, node] of nodes.entries()) {
    if(node.nodeType == "container")
    list.push(<Container key={node.id} name={node} callFun={appendChild} isOpenModal={props.isOpenModal} />);
    else
    list.push(<Leaf key={node.id} name={node} callFun={appendChild} getAllNodes={props.getAllNodes} />);
  }
    return (
        <div className="sideNavBar">
            <div className="sideNavBar--header">
                <span className="sideNavBar--header--text">
                    DFIN
                </span>
                <span className="sideNavBar--header--icons">
                      <Link to={'/collection'} className="tooltip" title="Add Collection">
                       <FontAwesomeIcon icon={faPlus} onClick={props.isOpenModal}/>
                      </Link>
                     <FontAwesomeIcon icon={faExpandAlt} />
                     <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </span>
            </div>
            <div className="sideNavBar--collections">
                {list}
            </div>
        </div> 
)}

export default Sidenav;
