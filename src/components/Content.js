import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile} from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux';


const Content = (props)=>{
    
    const content = useSelector(state => state.content);
    return (
        <div className="mainContent">{
            content?
            <div className="mainContent--container">
                <div className="mainContent--header">
                    <span className="mainContent--header--container">
                        <span>{content.path}</span>
                        <span>Add Item Member</span>
                    </span>
                    <h2>{content.nodeName}</h2>
                </div>
                <div className="mainContent--contentEditor" contenteditable="true">
                    <span className="mainContent--contentEditor--text">
                        <h2>hello</h2>
                    </span>
                </div>
            </div>
            :
            <div className="mainContent--detail">
                <FontAwesomeIcon icon={faFile} />
                <p>Welcome to editor</p>
                <p>Please Create WYSIWYG Editor File from left side navbar</p>
            </div>
        }
        </div>

)}

export default Content;
