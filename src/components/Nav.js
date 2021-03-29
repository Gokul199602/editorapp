import React,{useEffect,useRef,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faBars, faUserPlus, faBell } from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';
import {collapse} from "../actions/";


function DropdownClose(ref,setSidenav) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setSidenav((prev) => false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}


const Nav = ()=>{
    const wrapperRef = useRef(null);
    const inputCheckRef = useRef(null);
    const [sidenav, setSidenav] = useState(false);
    const dispatch = useDispatch();
    const [isDark, setIsDark] = useState(false);
    DropdownClose(wrapperRef,setSidenav);
    const dropDownClick = ()=>{
        setSidenav((prev) => !prev);
    }
    const changeDarkMode = ()=>{
       console.log(inputCheckRef);
       setIsDark(inputCheckRef.current.checked)
    }
    return (
    <nav className={isDark?"nav dark":"nav"}>
       <div className="nav--left">
           <span className="collapse" onClick={()=>{dispatch(collapse())}}>
             <FontAwesomeIcon icon={faBars} />
           </span>
           <span className="input">
               <FontAwesomeIcon icon={faSearch} />
               <input type="text" placeholder="Search"/>
           </span>
       </div>
       <div className="nav--right">
            <span className="invite">
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Invite Team Member</span>
            </span>
            <span className="alert">
            <FontAwesomeIcon icon={faBell} />
            </span>
            <span className="profile" ref={wrapperRef}>
                <span className="profile--text" onClick={dropDownClick}>
                    <span className="profile--text--letter">
                        G
                    </span>
                    <span className="profile--text--pointer"></span>
                    <span className="profile--text--new">New</span>
                </span>
                <span className="profile--dropDown">
                { sidenav 
                    ?  
                            <ul>
                                <li>Dard Mode
                                <label className="switch">
                                <input type="checkbox" ref={inputCheckRef} onChange={changeDarkMode} checked={isDark?true:false}/>
                                <span className="slider round"></span>
                                </label>
                                </li>
                                <li className="linebreaker">Profile</li>
                                <li>What's New <span className="dot"></span></li>
                                <li>Help</li>
                                <li>Send Feedback</li>
                                <li className="linebreaker">Hints and Shortcuts</li>
                                <li>Logout</li>
                            </ul>
                    : null
                }
                  </span>
            </span>
       </div>
    </nav>
)}

export default Nav;
