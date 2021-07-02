import React from "react";
import "../../css/mainpage/VideoColumn.css";
import { Avatar } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

const VideoColumn = ({ video, randomViews, randomMonth }) => {
  const history = useHistory();

  const [videoTime, setVideoTime] = useState(null);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const moveToVideoPage = () => {
    history.push(`/video?vid=${video?.id}`);
    document.title = video?.title;
  };

  const getTime = (time) => {
    var sec_num = parseInt(time, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  };

  return (
    <div onClick={moveToVideoPage} className="videoContainer__column">
      <ReactPlayer
        onDuration={(time) => setVideoTime(time)}
        style={{ display: "none" }}
        url={video?.videoUrl}
      />
      <div className="video__thumbnailContainer">
        {videoTime && <p>{getTime(videoTime)}</p>}
        <img src={video?.thumbnail} alt="Thumbnail" />
      </div>
      <div className="video__details">
        <div className="video__profile">
          <Avatar src={video?.profile} alt="Shubham Dalvi" />
        </div>
        <div className="video__desc">
          <p>{truncate(video?.title, 50)}</p>
          <div className="author__container">
            <p>{video?.author}</p>
            <div className="video__views">
              {randomViews}k views • {randomMonth}{" "}
              {randomMonth === 1 ? "month" : "months"} ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoColumn;
