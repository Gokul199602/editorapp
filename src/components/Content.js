import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile} from '@fortawesome/free-solid-svg-icons'
import {useSelector, useDispatch} from 'react-redux';


const Content = (props)=>{
    
    const content = useSelector(state => state.content);
    return (
        <div className="mainContent">{
            content?<h2>{content.nodeName}</h2>:
            <div className="mainContent--detail">
                <FontAwesomeIcon icon={faFile} />
                <p>Welcome to editor</p>
                <p>Please Create WYSIWYG Editor File from left side navbar</p>
            </div>
        }
        </div>

)}

export default Content;
