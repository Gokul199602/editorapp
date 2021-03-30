import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
<i class="far fa-window-close"></i>


const Modal = (props)=>{
    const [formdata, setFormdata] = useState({
        id:'',
        nodeName:'',
        nodeType:"",
        content:`
        <div><font size="7" style="">Topic 1</font></div><strong style="margin: 0px; padding: 0px; font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; background-color: rgb(255, 255, 255);">Lorem Ipsum</strong><span style="font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; background-color: rgb(255, 255, 255);">&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span><div><div style="text-align: justify;"><font face="Open Sans, Arial, sans-serif"><span style="font-size: 14px;"><br></span></font></div><div style="text-align: justify;"><div style="text-align: start;"><font size="7">Topic 2</font></div><strong style="margin: 0px; padding: 0px; font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);">Lorem Ipsum</strong><span style="font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);">&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span><font face="Open Sans, Arial, sans-serif"><span style="font-size: 14px;"><br></span></font></div><div><span style="font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; background-color: rgb(255, 255, 255);"><br></span></div><div><br></div></div>
        `,
        children:[]
    });
    const [colName, setColName] = useState(true);
    const [colType, setColType] = useState(true);
    console.log(formdata);
     const formValidation = ()=>{
        let isValidation =  true;
        if(!formdata.nodeName)
        {
            setColName(false);
            isValidation = false;
        }
        if(!formdata.nodeType)
        {
            setColType(false);
            isValidation = false;
        }
        if(!isValidation)
         return;
        setColName(true);
        setColType(true);
        isSave(formdata);
        console.log(formdata);
        setFormdata({id:'',
        nodeName:'',
        nodeType:"",
        children:[]});
     }
    let isModalShow = props.isModal,
    closeModal = props.isCloseModal,
    isSave = props.isSave;
    return (
        <div>
        {isModalShow?<div className="bodyEls"><div className="modalElement">
            <span className="closeModal" onClick={closeModal}>
                <FontAwesomeIcon icon={faWindowClose} />
            </span>
            <h2>Add Collection</h2>
            <div className="modalElement--container">
                {colName?null:<span className="errorText">Please Enter Collection Name</span>}
                <input type="text" name="nodeName" value={formdata.nodeName} className="inputText" placeholder="Collection Name" onChange={e => setFormdata({ ...formdata, nodeName: e.target.value })}/>
            </div>
            <div className="modalElement--container">
                {colType?null:<span className="errorText">Please Enter Collection Type</span>}
                <select value={formdata.nodeType} name="nodeType" className="inputOptions" onChange={e => setFormdata({ ...formdata, nodeType: e.target.value })}>
                    <option value="" disabled selected>Node Type</option>
                    <option value="container">Container</option>
                    <option value="leaf">Leaf</option>
                </select>
            </div>
            <div className="modalElement--container">
                <select className="inputOptions" name="nodeName">
                    <option value="" disabled selected>Content Type</option>
                    <option value="text">Text</option>
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                    <option value="diagram">3D diagram</option>
                    <option value="activity">Custom Activity</option>
                </select>
            </div>
            <div className="modalElement--saveButton">
                <button type="button" onClick={closeModal}>Close</button>
                <button type="button" onClick={formValidation}>Save</button>
            </div>
        </div></div>:null}
        </div>
)}

export default Modal;