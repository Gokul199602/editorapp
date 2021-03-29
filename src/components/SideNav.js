import React,{useEffect,useRef,useState} from "react";
import {Link,Route,Switch,  BrowserRouter as Router} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft,faExpandAlt,faPlus,faEllipsisV,faPlusSquare,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import Container from "./Container";
import {useSelector} from 'react-redux';
import Leaf from "./Leaf";
import {collapse} from "../actions/";
import {useDispatch} from 'react-redux';


const Sidenav = (props)=>{
  
  const inputCheckRef = useRef(null);
  const dispatch = useDispatch();
  let nodes =  props.isNode;
  const iscollapse = useSelector(state => state.collapse);
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
    list.push(<Container key={node.id} name={node} callFun={appendChild} isOpenModal={props.isOpenModal}  />);
    else
    list.push(<Leaf key={node.id} name={node} callFun={appendChild} getAllNodes={props.getAllNodes} />);
  }
    return (
        <div className={iscollapse?"sideNavBar collapsed":"sideNavBar"}>
            <span className="activeElement">
            </span>
            <div className="sideNavBar--header">
                <span className="sideNavBar--header--text">
                    DFIN
                </span>
                <span className="sideNavBar--header--icons">
                      <Link to={'/collection'} className="tooltip" title="Add Collection">
                       <FontAwesomeIcon icon={faPlus} onClick={props.isOpenModal}/>
                      </Link>
                      <span  className="tooltip" title="Expand">
                        <FontAwesomeIcon icon={faExpandAlt}/>
                      </span>
                      <span  className="tooltip" title="Minimize" onClick={()=>{dispatch(collapse())}}>
                      <FontAwesomeIcon icon={faAngleDoubleLeft}/>
                     </span>
                </span>
            </div>
            <div className="sideNavBar--collections">
                {list}
            </div>
        </div> 
)}

export default Sidenav;
