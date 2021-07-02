import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../css/videopage/DetailVideo.css";
import ReactPlayer from "react-player/youtube";

const DetailVideo = ({ video }) => {
  const [videoTime, setVideoTime] = useState(null);
  const history = useHistory();

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const moveToVideo = () => {
    const encryptedId = btoa(video?.id);
    history.push(`/video?vid=${encryptedId}`);
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
    <div className="detail__video" onClick={moveToVideo}>
      <ReactPlayer
        onDuration={(time) => setVideoTime(time)}
        style={{ display: "none" }}
        url={video.videoUrl}
      />
      <div className="detailVideo__video">
        {videoTime && <p>{getTime(videoTime)}</p>}
        <img src={video?.thumbnail} alt="" />
      </div>
      <div className="detailVideo__desc">
        <h1>{truncate(video?.title, 40)}</h1>
        <div className="detailVideo__channel">
          <p>{video?.author}</p>
          <p>{Math.floor(Math.random() * 300) + 1}K views</p>
        </div>
      </div>
    </div>
  );
};

export default DetailVideo;
