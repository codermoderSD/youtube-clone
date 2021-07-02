import React from "react";
import { useHistory } from "react-router-dom";
import "../css/SearchContainer.css";

const SearchContainer = ({ searchedVideo, setSearchValue }) => {
  const history = useHistory();
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className="search__container">
      {searchedVideo.map((video) => {
        return (
          <p
            key={video.item.id}
            onClick={() => {
              const encryptedId = btoa(video.item.id);
              history.push(`/video?vid=${encryptedId}`);
              setSearchValue("");
            }}
          >
            {truncate(video.item.title, 60)}
          </p>
        );
      })}
      {searchedVideo.length === 0 && <p>No Videos Found</p>}
    </div>
  );
};

export default SearchContainer;
