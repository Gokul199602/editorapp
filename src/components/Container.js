import React,{useEffect,useRef,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft,faExpandAlt,faPlus,faEllipsisV,faPlusSquare,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {Link,Route,Switch,  BrowserRouter as Router} from 'react-router-dom';

const Container = (props)=>{
    const inputCheckRef = useRef(null);
    const [lists, setLists] = useState([]);
    const collectionCollapse = ()=>{
        console.log("input",inputCheckRef);
        let navSide = inputCheckRef.current.parentElement.parentElement;
        navSide.classList.toggle("expanded");
        setLists(props.callFun(props.name.children));
        let activeTarget = document.querySelector(".sideNavBar--collections .active");
        if(!activeTarget)
        return;
        let pathName = activeTarget.getAttribute("data-path");
        if(pathName.indexOf(props.name.path) == -1 || navSide.classList.contains("expanded"))
        {
            let activeElement =  document.querySelector(".activeElement"),
            topPosition = activeTarget.offsetTop-8;
            activeElement.style.cssText = `
            top:${topPosition}px;
            display:block;
            `;
        }
        else
        {
            let activeElement =  document.querySelector(".activeElement");
            activeElement.style.cssText = "display:none;";
        }
     }
    return (
    <div className="sideNavBar--collections--mainNode">
            <div className="sideNavBar--collections--mainNode--content">
                <Link to={'/collection/'+props.name.id} className="sideNavBar--collections--mainNode--text" ref={inputCheckRef} onClick={collectionCollapse} data-path={props.name}>
                    <FontAwesomeIcon icon={faChevronRight} />
                    {props.name.nodeName}
                </Link>
                <span className="sideNavBar--collections--mainNode--icon">
                    <Link to={'/collection/'+props.name.id} onClick={props.isOpenModal} className="tooltip" title="Create Item">
                        <FontAwesomeIcon icon={faPlus} />
                    </Link>
                    <span to={'/collection/'+props.name.id} onClick={props.isOpenModal} className="tooltip" title="Add Collection">
                         <FontAwesomeIcon icon={faPlusSquare} />
                    </span>
                    <span className="tooltip" title="More">
                         <FontAwesomeIcon icon={faEllipsisV} />
                    </span>
                </span>
            </div>
            <div className="sideNavBar--collections--children">
                {props.callFun(props.name.children)}
            </div>
        </div>
)}

export default Container;


