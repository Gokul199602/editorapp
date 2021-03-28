import React,{useEffect,useRef,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile,faBold,faItalic,faUnderline,faParagraph,faHeading,faPlus} from '@fortawesome/free-solid-svg-icons'
import {useSelector,useDispatch} from 'react-redux';
import {detail} from "../actions/";
import ContentEditable from 'react-contenteditable';

const Content = (props)=>{
    let contentEditable = React.createRef();
    const [textSelect, setTextSelect] = useState({ activeIndex: 1 });
    const content = useSelector(state => state.content);
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    var updateNodeHtml = (evt) => {
        content.content = evt.target.value;
        dispatch(detail(content));
        props.updateNode((content.id,content));
    };
    var removeActiveEls = ()=>
    {
        let allActiveEls =  document.querySelectorAll(".mainContent--containertext>span>svg");
        allActiveEls.forEach((els)=>{
            els.classList.remove("active");
        })
    }
    var selecElement = () => {
        let selectedText =  window.getSelection().toString();
        if(selectedText)
        {
            removeActiveEls();
            let posObj = window.getSelection().getRangeAt(0).getBoundingClientRect();
            let top = posObj.top - 48;
            let left = posObj.left - 52;
            wrapperRef.current.classList.add("active");
            wrapperRef.current.style.cssText = `
            top: ${top}px;
            left: ${left}px;
            `;
            setTimeout(()=>{
                selecElement();
            },100)
        }
        else
        {
            wrapperRef.current.classList.remove("active");
        }
    }
    var getElement = (target)=>
    {
        let targetEl = null;
        let allActiveEls =  document.querySelectorAll(".mainContent--containertext>span>svg");
        allActiveEls.forEach((els)=>{
            if(els.contains(target))
            {
                targetEl = els;
            }
        })
        return targetEl
    }
    var bold = (e)=>  {
        e.preventDefault();
        let element = getElement(e.target);
        let isActive = element.classList.contains("active")?true:false;
        removeActiveEls();
        if(isActive)
        element.classList.remove("active");
        else
        element.classList.add("active");
        document.execCommand('bold');
      }
      
     var italic = (e) => {
        e.preventDefault();
        let element = getElement(e.target);
        let isActive = element.classList.contains("active")?true:false;
        removeActiveEls();
        if(isActive)
        element.classList.remove("active");
        else
        element.classList.add("active");
        document.execCommand('italic');
      }
      var header1 = (e) => {
        e.preventDefault();
        let element = getElement(e.target);
        let isActive = element.classList.contains("active")?true:false;
        removeActiveEls();
        if(isActive)
        element.classList.remove("active");
        else
        element.classList.add("active");
        document.execCommand('bold');
        document.execCommand('fontSize', 0, '12px');
      }
      var header2 = (e) => {
        e.preventDefault();
        let element = getElement(e.target);
        let isActive = element.classList.contains("active")?true:false;
        removeActiveEls();
        if(isActive)
        element.classList.remove("active");
        else
        element.classList.add("active");
        document.execCommand('bold');
        document.execCommand('fontSize', 0, '9px');
      }
      var header3 = (e) => {
        e.preventDefault();
        let element = getElement(e.target);
        let isActive = element.classList.contains("active")?true:false;
        removeActiveEls();
        if(isActive)
        element.classList.remove("active");
        else
        element.classList.add("active");
        document.execCommand('bold');
        document.execCommand('fontSize', 0, '7px');
      }
      var para = (e)=>
      {
        e.preventDefault();
        let element = getElement(e.target);
        let isActive = element.classList.contains("active")?true:false;
        removeActiveEls();
        if(isActive)
        element.classList.remove("active");
        else
        element.classList.add("active");
        document.execCommand('bold',false);
        document.execCommand('fontSize', 0, '3px');
      }
     var underline =(e) => {
        e.preventDefault();
        let element = getElement(e.target);
        let isActive = element.classList.contains("active")?true:false;
        removeActiveEls();
        if(isActive)
        element.classList.remove("active");
        else
        element.classList.add("active");
        document.execCommand('underline');
      }
    const wrapperRef = useRef(null);
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
                <div className="mainContent--containertext">
                     <ContentEditable
                    className="mainContent--contentEditor"
                    innerRef={contentEditable}
                    html={content.content||`<div><font size="7" style="">Topic 1</font></div><strong style="margin: 0px; padding: 0px; font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; background-color: rgb(255, 255, 255);">Lorem Ipsum</strong><span style="font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; background-color: rgb(255, 255, 255);">&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span><div><div style="text-align: justify;"><font face="Open Sans, Arial, sans-serif"><span style="font-size: 14px;"><br></span></font></div><div style="text-align: justify;"><div style="text-align: start;"><font size="7">Topic 2</font></div><strong style="margin: 0px; padding: 0px; font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);">Lorem Ipsum</strong><span style="font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);">&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span><font face="Open Sans, Arial, sans-serif"><span style="font-size: 14px;"><br></span></font></div><div><span style="font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; background-color: rgb(255, 255, 255);"><br></span></div><div><br></div></div>`} // innerHTML of the editable div
                    disabled={false}       // use true to disable editing
                    onChange={updateNodeHtml} // handle innerHTML change
                    onMouseUp={selecElement} 
                    onClick={selecElement}
                    tagName='article' // Use a custom HTML tag (uses a div by default)
                    /> 
                    <span className={edit?"mainContent--container--edit active":"mainContent--container--edit"} ref={wrapperRef} onMouseDown={(e)=>{e.preventDefault()}}>
                        <FontAwesomeIcon icon={faBold} onClick={bold}/>
                        <FontAwesomeIcon icon={faItalic} onClick={italic}/>
                        <FontAwesomeIcon icon={faUnderline} onClick={underline}/>
                        <FontAwesomeIcon icon={faHeading} onClick={header1}/>
                        <FontAwesomeIcon icon={faParagraph} onClick={para} />
                    </span>
                    <span className="addWidget">
                        <FontAwesomeIcon icon={faPlus}/>
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
