import React from "react";
import "../../css/videopage/MoreVideos.css";
import DetailVideo from "./DetailVideo";
import {
  firstLayer,
  secondLayer,
  thirdLayer,
  fourthLayer,
} from "../../youtubeVideos";
import getRandom from "../../utils/getRandom";

const MoreVideos = ({ videoId }) => {
  const mixedArray = [
    ...firstLayer,
    ...secondLayer,
    ...thirdLayer,
    ...fourthLayer,
  ];

  const randomArray = getRandom(mixedArray, 20);
  const filterArray = randomArray.filter((video) => video.id !== videoId);

  return (
    <div className="moreVideos">
      {filterArray.map((video) => {
        return <DetailVideo key={video.id} video={video} />;
      })}
    </div>
  );
};

export default MoreVideos;
