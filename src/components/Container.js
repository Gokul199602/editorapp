import React,{useEffect,useRef,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft,faExpandAlt,faPlus,faEllipsisV,faPlusSquare,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {Link,Route,Switch,  BrowserRouter as Router} from 'react-router-dom';

const Container = (props)=>{
    const inputCheckRef = useRef(null);
    const [lists, setLists] = useState([]);
    const setOverflow = ()=>
    {
        document.querySelector(".sideNavBar--collections").style.cssText = "overflow:visible;";
    }
    const unsetOverflow = ()=>
    {
        document.querySelector(".sideNavBar--collections").style.cssText = "";
    }
    var removeActiveEls = ()=>
    {
        let allActiveEls =  document.querySelectorAll(".sideNavBar--collections--mainNode--text");
        allActiveEls.forEach((els)=>{
            els.classList.remove("active");
        })
    }
    const collectionCollapse = (e)=>{
        console.log("input",inputCheckRef);
        let navSide = inputCheckRef.current.parentElement.parentElement;
        removeActiveEls();
        e.currentTarget.classList.add("active");
        navSide.classList.toggle("expanded");
        setLists(props.callFun(props.name.children));
     }
    return (
    <div className="sideNavBar--collections--mainNode">
            <div className="sideNavBar--collections--mainNode--content">
                <Link to={'/collection/'+props.name.id} className="sideNavBar--collections--mainNode--text" ref={inputCheckRef} onClick={collectionCollapse.bind(this)} data-path={props.name}>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <span class="sideNavBar--collections--mainNode--content--text">{props.name.nodeName}</span>
                </Link>
                <span className="sideNavBar--collections--mainNode--icon">
                    <Link to={'/collection/'+props.name.id} onClick={props.isOpenModal} className="tooltip" title="Create Item"  onMouseOver={setOverflow} onMouseOut={unsetOverflow}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Link>
                    <span to={'/collection/'+props.name.id} onClick={props.isOpenModal} className="tooltip" title="Add Collection" onMouseOver={setOverflow} onMouseOut={unsetOverflow}>
                         <FontAwesomeIcon icon={faPlusSquare} />
                    </span>
                    <span className="tooltip" title="More" onMouseOver={setOverflow} onMouseOut={unsetOverflow}>
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


