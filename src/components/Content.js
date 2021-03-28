import React,{useEffect,useRef,useState} from "react";
import {Link,Route,Switch,  BrowserRouter as Router} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faFileTextO, faUserPlus, faBell,faFile} from '@fortawesome/free-solid-svg-icons'




const Content = (props)=>{
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
    const [urlRoute, setUrlRoute] = useState(window.location.href);
    const [getNodeEl, setGetNodeEl] = useState(props.getId());
    return (
        <div className="mainContent">{
            props.getId()?<h2>Hello</h2>:
            <div className="mainContent--detail">
                <FontAwesomeIcon icon={faFile} />
                <p>Welcome to editor</p>
                <p>Please Create WYSIWYG Editor File from left side navbar</p>
            </div>
        }
        </div>

)}

export default Content;
