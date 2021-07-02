import React from "react";
import "../../css/videopage/VideoDetails.css";
import ReactPlayer from "react-player/youtube";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ReplyIcon from "@material-ui/icons/Reply";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useState } from "react";

const VideoDetails = ({ subs }) => {
  const [bellPressed, setBellPressed] = useState(false);
  const video = useSelector((state) => state.Video.video);

  const copyToClipboard = () => {
    const encryptedId = btoa(video?.id);
    navigator.clipboard.writeText(
      `https://clone-afc5e.web.app/video?vid=${encryptedId}`
    );
    alert.show("Video Link copied to clipboard");
  };

  const alert = useAlert();

  return (
    <div className="videoDetails">
      <div className="videoDetails__video">
        <ReactPlayer
          controls
          className="video__player"
          playing
          url={video?.videoUrl}
        />
      </div>
      <div className="videoDetails__details">
        <div className="videoDetails__left">
          <h5>{video?.title}</h5>
          <p>{subs}k views</p>
        </div>
        <div className="videoDetails__right">
          <div className="videoDetail__icon">
            <ThumbUpIcon />
            {subs - 150}k
          </div>
          <div className="videoDetail__icon">
            <ThumbDownIcon />
            {subs - 70}
          </div>
          <div onClick={copyToClipboard} className="videoDetail__icon">
            <ReplyIcon style={{ transform: "scaleX(-1)" }} />
            SHARE
          </div>
          <div className="videoDetail__icon">
            <PlaylistAddIcon />
            SAVE
          </div>
          <MoreHorizIcon className="videoDetail__icon" />
        </div>
      </div>
      <div className="video__author">
        <div className="author__details">
          <Avatar
            src={video?.profile}
            alt={video?.author}
            style={{ width: "45px", height: "45px" }}
          />
          <div className="name">
            <h6>{video?.author}</h6>
            <p>{subs}k subscribers</p>
          </div>
        </div>
        <div className="subscribe">
          <button>SUBSCRIBE</button>
          {bellPressed ? (
            <NotificationsActiveIcon
              onClick={() => setBellPressed(false)}
              style={{ fill: "#fff", cursor: "pointer" }}
            />
          ) : (
            <NotificationsIcon
              onClick={() => setBellPressed(true)}
              style={{ fill: "#8f8f8f", cursor: "pointer" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
