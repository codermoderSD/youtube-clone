import React, { useEffect } from "react";
import { useState } from "react";
import "../../css/videopage/VideoPage.css";
import Header from "../Header";
import VideoDetails from "./VideoDetails";
import MoreVideos from "./MoreVideos";
import { useLocation } from "react-router";
import {
  firstLayer,
  secondLayer,
  thirdLayer,
  fourthLayer,
} from "../../youtubeVideos";
import { useDispatch } from "react-redux";
import { setVideo } from "../../redux/videos/VideoActions";

const VideoPage = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(true);
  }, []);

  const query = new URLSearchParams(useLocation().search);

  const videoId = query.get("vid");

  const mixedArray = [
    ...firstLayer,
    ...secondLayer,
    ...thirdLayer,
    ...fourthLayer,
  ];

  const videoArray = mixedArray.filter((video) => video.id === videoId);
  const subs = Math.floor(Math.random() * 1000) + 200;

  const dispatch = useDispatch();

  dispatch(setVideo(videoArray[0]));

  return (
    <div className="videoPage">
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="video__container">
        <VideoDetails subs={subs} />
        <MoreVideos videoId={videoId} />
      </div>
    </div>
  );
};

export default VideoPage;
