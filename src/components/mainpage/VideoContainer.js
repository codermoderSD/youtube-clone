import React from "react";
import Header from "../Header";
import "../../css/mainpage/VideoContainer.css";
import VideoColumn from "./VideoColumn";
import {
  firstLayer,
  secondLayer,
  thirdLayer,
  fourthLayer,
} from "../../youtubeVideos";
import getRandom from "../../utils/getRandom";

const VideoContainer = () => {
  const firstLayerRandom = getRandom(firstLayer, 8);
  const secondLayerRandom = getRandom(secondLayer, 8);
  const thirdLayerRandom = getRandom(thirdLayer, 8);
  const fourthLayerRandom = getRandom(fourthLayer, 8);

  const randomArray = [
    ...firstLayer,
    ...secondLayer,
    ...thirdLayer,
    ...fourthLayer,
  ];

  const mixArray = getRandom(randomArray, 20);

  return (
    <div className="videoContainer">
      <Header />
      <div className="videoContainer__row">
        {firstLayerRandom.map((video) => {
          return (
            <VideoColumn
              randomViews={Math.floor(Math.random() * 100) + 1}
              randomMonth={Math.floor(Math.random() * 11) + 1}
              key={video.id}
              video={video}
            />
          );
        })}
        {secondLayerRandom.map((video) => {
          return (
            <VideoColumn
              randomViews={Math.floor(Math.random() * 100) + 1}
              randomMonth={Math.floor(Math.random() * 11) + 1}
              key={video.id}
              video={video}
            />
          );
        })}
        {thirdLayerRandom.map((video) => {
          return (
            <VideoColumn
              randomViews={Math.floor(Math.random() * 100) + 1}
              randomMonth={Math.floor(Math.random() * 11) + 1}
              key={video.id}
              video={video}
            />
          );
        })}
        {fourthLayerRandom.map((video) => {
          return (
            <VideoColumn
              randomViews={Math.floor(Math.random() * 100) + 1}
              randomMonth={Math.floor(Math.random() * 11) + 1}
              key={video.id}
              video={video}
            />
          );
        })}
        {mixArray.map((video) => {
          return (
            <VideoColumn
              randomViews={Math.floor(Math.random() * 100) + 1}
              randomMonth={Math.floor(Math.random() * 11) + 1}
              key={video.id + video.id}
              video={video}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VideoContainer;
