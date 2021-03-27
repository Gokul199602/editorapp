import React,{useEffect,useRef,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
<i class="far fa-window-close"></i>


const Modal = (props)=>{
    const [formdata, setFormdata] = useState({
        id:'',
        nodeName:'',
        nodeType:"",
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
        {isModalShow?<div className="modalElement">
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
        </div>:null}
        </div>
)}

export default Modal;