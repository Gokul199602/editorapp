import './App.css';
import React,{useState} from "react";
import Nav from "./components/Nav";
import Navcontrol from "./components/Navcontrol";
import Sidenav from "./components/SideNav";
import Content from "./components/Content";
import Modal from "./components/Modal";
import EditContent from "./components/EditContent";
import swal from 'sweetalert';
import {Link,Route,Switch,  BrowserRouter as Router} from 'react-router-dom';

function App() {
  var getLocally = ()=>{
    let saveData = JSON.parse(localStorage.getItem("nodes"));
    return saveData;
  }
  let globalNodeData = getLocally()||[];
  const [modal, setModal] = useState(false);
  const [nodes, setNodes] = useState(globalNodeData);
  var traverse = function(current,nodeArr,path) {
    for(var ck=0;ck<current.length;ck++) {
        var childPathName = path+`/${current[ck].nodeName}`;
        current[ck].path = childPathName;
        nodeArr.push(current[ck]);
        var child = current[ck].children;
        if(child)
        traverse(child,nodeArr,childPathName);
    }
  } 

var storeLocally = ()=>{
  let saveData = JSON.stringify(nodes);
  localStorage.setItem("nodes",saveData);
}

var createChildrenNode = function(current,id,obj) {
  for(var ck=0;ck<current.length;ck++) {
      if(id == current[ck].id)
      {
        current[ck].children.push(obj);
        return true;
      }
      var child = current[ck].children;
      if(child.length)
      {
       let isReturn = createChildrenNode(child,id,obj);
       if(isReturn)
       return isReturn;
      }
  }
}

var updateChildrenNode = function(current,id,obj) {
  for(var ck=0;ck<current.length;ck++) {
      if(id == current[ck].id)
      {
        current[ck] = obj;
        return true;
      }
      var child = current[ck].children;
      if(child)
      {
       let isReturn = createChildrenNode(child,id,obj);
       return isReturn;
      }
  }
}
  const getAllNodes = ()=>{
    let allNodes = [];
    let path = "";
    nodes.map((els)=>{
      path = `${els.nodeName}`;
      els.path = path;
      console.log(path);
      allNodes.push(els);
      if(els.children)
      traverse(els.children,allNodes,els.path);
    })
    return allNodes;
  };
  console.log("check path",getAllNodes());
  const getUniqueNodeId = ()=>
  {
    if(nodes.length)
    {
      let allNodes = getAllNodes();
      allNodes = allNodes.sort(function(a, b){return a.id - b.id});
      let firstNode = allNodes[allNodes.length-1].id;
      return firstNode+1;
    }
    else 
      return null;
  }
  const createNode = (parentid,obj) =>
  {
    let isObjectFound = false;
    nodes.map((els)=>{
      if(els.id == parentid && !isObjectFound)
      {
        els.children.push(obj);
        isObjectFound = true;
      }
      if(els.children && !isObjectFound)
      isObjectFound = createChildrenNode(els.children,parentid,obj);
    })
    if(!isObjectFound)
    {
      nodes.push(obj);
    }
  }
  const updateNode = (id,obj) =>
  {
    let isObjectFound = false;
    nodes.map((els)=>{
      if(els.id == id && !isObjectFound)
      {
        els = obj;
      }
      if(els.children && !isObjectFound)
      isObjectFound = updateChildrenNode(els.children,id,obj);
    })
    storeLocally();
    return isObjectFound;
  }
  const toggleModal = ()=>{
    setModal((prev) => !prev);
  }
  const getUrlId = ()=>
  {
    let pathname =  window.location.pathname;
    return parseInt(pathname.split('/')[pathname.split('/').length-1]);
  }
  const openModal = ()=>{
    setModal(true);
  }
  const closeModal = ()=>{
    setModal(false);
  }
  const saveModal = (formData)=>{
    // createNode();
    swal("Good job!", "Node Created successfully", "success");
    setModal(false);
    formData.id = getUniqueNodeId()||1;
    console.log("form data",formData);
    let colParentId = isNaN(parseInt(getUrlId()))?null:getUrlId();
    createNode(colParentId,formData);
    storeLocally();
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
          <Navcontrol />
          <div className="detailsContainer">
            <Sidenav isOpenModal={openModal} isNode={nodes} getAllNodes={getAllNodes}/>
            <Content getAllNodes={getAllNodes} getId={getUrlId} updateNode={updateNode}/>
          </div>
          <Modal isModal={modal} isCloseModal={closeModal} isSave={saveModal} />
      </div>
    </Router>
  );
}

export default App;
