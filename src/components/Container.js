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
     }
    return (
    <div className="sideNavBar--collections--mainNode">
            <div className="sideNavBar--collections--mainNode--content">
                <Link to={'/collection/'+props.name.id} className="sideNavBar--collections--mainNode--text" ref={inputCheckRef} onClick={collectionCollapse}>
                    <FontAwesomeIcon icon={faChevronRight} />
                    {props.name.nodeName}
                </Link>
                <span className="sideNavBar--collections--mainNode--icon">
                    <Link to={'/collection/'+props.name.id} onClick={props.isOpenModal}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Link>
                    <FontAwesomeIcon icon={faPlusSquare} />
                    <FontAwesomeIcon icon={faEllipsisV} />
                </span>
            </div>
            <div className="sideNavBar--collections--children">
                {props.callFun(props.name.children)}
            </div>
        </div>
)}

export default Container;


