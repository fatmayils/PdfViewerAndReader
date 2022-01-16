//import useState hook to create menu collapse state
import React, { useState } from "react";

import { useHistory } from "react-router-dom";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";


const SidebarUser = () => {
  const history = useHistory();
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse} style={{paddingTop: "28%"}}>
        <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          <SidebarContent >  
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem>
              <MenuItem icon={<FaList />}  onClick={ () =>{history.push("uploadfile") ;}}>Upload File</MenuItem>
              <MenuItem icon={<FaRegHeart />}  onClick={ () =>{history.push("myAllFiles") ;}}>My Files</MenuItem>
              <MenuItem icon={<FaList />}  onClick={ () =>history.push("writerQueryUser") }>Writer Query</MenuItem>
              <MenuItem icon={<FaList />}  onClick={ () =>history.push("lessonQueryUser") }>Lesson Query</MenuItem>
              <MenuItem icon={<FaList />}  onClick={ () =>history.push("projectTitleQueryUser") }>ProjectTitle Query</MenuItem>
              <MenuItem icon={<FaList />}  onClick={ () =>history.push("keywordsQueryUser") }>Keywords Query</MenuItem>
              <MenuItem icon={<FaList />}  onClick={ () =>history.push("periodQueryUser") }>Period Query</MenuItem>
              <MenuItem icon={<FaList />}  onClick={ () =>history.push("periodWriterLessonQueryUser") }>Period-Writer-Lesson-Query</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={ () =>history.push("signinUser") }>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SidebarUser;