import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile} from '@fortawesome/free-solid-svg-icons'
import {useSelector,useDispatch} from 'react-redux';
import {detail} from "../actions/";
import ContentEditable from 'react-contenteditable';

const Content = (props)=>{
    let contentEditable = React.createRef();
    const content = useSelector(state => state.content);
    const dispatch = useDispatch();
    var updateNodeHtml = (evt) => {
        content.content = evt.target.value;
        dispatch(detail(content));
        props.updateNode((content.id,content));
    };
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
                <ContentEditable
                className="mainContent--contentEditor"
                innerRef={contentEditable}
                html={content.content||""} // innerHTML of the editable div
                disabled={false}       // use true to disable editing
                onChange={updateNodeHtml} // handle innerHTML change
                tagName='article' // Use a custom HTML tag (uses a div by default)
                />
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
