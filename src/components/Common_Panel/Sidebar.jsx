import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import GroupsIcon from "@mui/icons-material/Groups";
import InfoIcon from '@mui/icons-material/Info';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import Cookies from "js-cookie";

const Sidebar = () => {
  return (
    <div className="w-72 h-screen text-white bg-black px-5 py-8 relative">
      <div className="flex items-center">
        <img style={{ height: "9vh" }} src="/stulyfe.png" alt="" />
        <div className="px-4">
          <div className="font-bold">Stulyfe Education</div>
          <div className="text-sm">Stulyfe Unite Admin</div>
        </div>
      </div>

      <div className="mt-8">
        <Link to="/home" className="flex items-center py-3">
          <div>
            <HomeIcon />
          </div>
          <div className="px-3">Home</div>
        </Link>
        <Link to="/home/feed" className="flex items-center py-3">
          <div>
            <DynamicFeedIcon />
          </div>
          <div className="px-3">Feed</div>
        </Link>
        <Link className="flex items-center py-3">
          <div>
            <GroupsIcon />
          </div>
          <div className="px-3">Analysis</div>
        </Link>
      </div>

      <div className="absolute bottom-0 py-7">
        <Link className="flex items-center py-3">
          <div>
            <InfoIcon />
          </div>
          <div className="px-3">About Unite</div>
        </Link>
        <Link className="flex items-center py-3">
          <div><AdminPanelSettingsIcon /></div>
          <div className="px-3">Privacy Policy</div>
        </Link>
        <Link className="flex items-center py-3">
          <div><InfoIcon /></div>
          <div className="px-3">About Us</div>
        </Link>
        <Link className="flex items-center py-3">
          <div>
            <LogoutIcon className="text-red-600" style={{transform: "rotate(180deg)",}} />
          </div>
          <Link to='/' onClick={()=>{console.log('clicked logout button');Cookies.remove('token')}} className="px-3 text-red-600">Log Out</Link>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
