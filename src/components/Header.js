import React from "react";
import "../css/Header.css";
import youtube from "../images/youtube_dark.png";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MicIcon from "@material-ui/icons/Mic";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Tooltip } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Fuse from "fuse.js";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  firstLayer,
  secondLayer,
  thirdLayer,
  fourthLayer,
} from "../youtubeVideos";
import { useEffect } from "react";
import SearchContainer from "./SearchContainer";

const Header = ({ showMenu, setShowMenu }) => {
  const history = useHistory();

  const [searchValue, setSearchValue] = useState("");
  const [searchedVideo, setSearchedVideo] = useState("");

  const mixedArray = [
    ...firstLayer,
    ...secondLayer,
    ...thirdLayer,
    ...fourthLayer,
  ];

  //search options
  const options = {
    includeScore: true,
    keys: ["title"],
  };

  const fuse = new Fuse(mixedArray, options);

  useEffect(() => {
    const result = fuse.search(searchValue);
    setSearchedVideo([...result]);
  }, [searchValue]);

  return (
    <div className="header">
      <div className="header__left">
        {showMenu && <MenuIcon className="menu__icon smallScreen" />}
        <img onClick={() => history.push("/")} src={youtube} alt="Youtube" />
      </div>
      <div className="header__center">
        <div className="header__search bigScreen">
          <div className="header__searchInput">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search"
            />
            <div className="search__btn">
              <Tooltip title="Search">
                <SearchIcon style={{ fill: "#8f8f8f" }} />
              </Tooltip>
            </div>
          </div>
          <Tooltip title="Search with your voice">
            <MicIcon style={{ fill: "#fff", cursor: "pointer" }} />
          </Tooltip>
        </div>
        {searchValue && (
          <SearchContainer
            setSearchValue={setSearchValue}
            searchedVideo={searchedVideo}
          />
        )}
      </div>
      <div className="header__right smallScreen">
        <Tooltip title="Search with your voice">
          <MicIcon style={{ fill: "#fff", cursor: "pointer" }} />
        </Tooltip>
        <Tooltip title="Search">
          <SearchIcon style={{ fill: "#fff", cursor: "pointer" }} />
        </Tooltip>
        <Avatar style={{ width: "32px", height: "32px", margin: "0 0.3rem" }} />
      </div>
      <div className="header__right bigScreen">
        <Tooltip title="Create">
          <VideoCallIcon
            className="bigScreen"
            style={{ fill: "#fff", cursor: "pointer" }}
          />
        </Tooltip>
        <Tooltip title="YouTube Apps">
          <AppsIcon
            className="bigScreen"
            style={{ fill: "#fff", cursor: "pointer" }}
          />
        </Tooltip>
        <Tooltip title="Notifications">
          <NotificationsIcon
            className="bigScreen"
            style={{ fill: "#fff", cursor: "pointer" }}
          />
        </Tooltip>
        <Avatar style={{ width: "35px", height: "35px", margin: "0 0.3rem" }} />
      </div>
    </div>
  );
};

export default Header;
