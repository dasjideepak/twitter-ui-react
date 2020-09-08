import React from "react";
import { ImHome2 } from "react-icons/im";
import { FiHash, FiMail, FiChevronDown } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { BiBookmark } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";

const LEFT_NAV_TAB = (props) => {
  return (
    <div class="tab">
      {props.icon}
      <h3>{props.text}</h3>
    </div>
  );
};

const LeftSideBar = () => {
  return (
    <div className="left-side-bar flex">
      <div className="top-content">
        <img
          className="logo"
          src="https://pngimg.com/uploads/twitter/twitter_PNG15.png"
          alt="logo"
        />
        <div class="nav-tab-container">
          <LEFT_NAV_TAB icon={<ImHome2 />} text="Home" />
          <LEFT_NAV_TAB icon={<FiHash />} text="Explore" />
          <LEFT_NAV_TAB icon={<IoMdNotifications />} text="Notifications" />
          <LEFT_NAV_TAB icon={<FiMail />} text="Messages" />
          <LEFT_NAV_TAB icon={<BiBookmark />} text="Bookmarks" />
          <LEFT_NAV_TAB icon={<RiFileList2Line />} text="Lists" />
          <LEFT_NAV_TAB icon={<HiOutlineUser />} text="Profile" />
          <LEFT_NAV_TAB icon={<CgMoreO />} text="More" />
        </div>
        <div>
          <button class="tweet-btn">Tweet</button>
        </div>
      </div>
      <div className="bottom-content flex">
        <div class="flex">
          <img
            className="user-avatar"
            src="https://avatars2.githubusercontent.com/u/38307844?s=460&u=f545a10c52359525a21efe75562a272f241ab57d&v=4"
            alt="user-avatar"
          />
          <div className="middle-sec">
            <h3>Deepak Sharma</h3>
            <p>@dasjideepak</p>
          </div>
        </div>
        <FiChevronDown />
      </div>
    </div>
  );
};

export default LeftSideBar;
