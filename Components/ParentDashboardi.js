
//import useState hook to create menu collapse state
import React, { useState } from "react";

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
import { MdPreview } from "react-icons/md";
import { BiCog } from "react-icons/bi";
import { GrView } from "react-icons/gr";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  
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
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Tutor" : "Parent Dashboard"}</p>
            </div>
            
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
               <Link to="/Home3"></Link> Home
              </MenuItem>
              
              <MenuItem icon={<FaList />}><Link to="/UpdateParent"></Link>Set Profile</MenuItem>
              
              <MenuItem icon={<MdPreview />}><Link to="/AddParents"></Link>Register</MenuItem>
              <MenuItem icon={<GrView />}><Link to="/ParentLogin"></Link>Login</MenuItem>
              <MenuItem icon={<BiCog />}><Link to="/AllTutors"></Link>View Tutor</MenuItem>
              
              <MenuItem icon={<MdPreview />}><Link to="/demo"></Link>Request a Demo</MenuItem>
              <MenuItem icon={<GrView />}><Link to="/UpdateStatusRequest"></Link>Book a Tutor</MenuItem>
              <MenuItem icon={<BiCog />}><Link to="/AllBooking"></Link>View Booked Tutor</MenuItem>
                
              <MenuItem icon={<MdPreview />}><Link to="/AddRating"></Link>Rate Tutor</MenuItem>
              <MenuItem icon={<GrView />}><Link to="/AllBooking"></Link>
              <MenuItem icon={<MdPreview />}><Link to=""></Link>Register</MenuItem>
              <MenuItem icon={<GrView />}><Link to="/AllBooking"></Link>Login</MenuItem>
              <MenuItem icon={<BiCog />}><Link to="/Home"></Link>View Tutor</MenuItem>View E Book</MenuItem>
              



              
            </Menu>
          </SidebarContent>
          
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
