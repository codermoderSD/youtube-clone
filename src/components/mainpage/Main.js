import React, { useEffect } from "react";
import "../../css/mainpage/Main.css";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";

const Main = () => {
  useEffect(() => {
    document.title = "YouTube Clone";
  }, []);
  return (
    <div className="main">
      <Sidebar />
      <VideoContainer />
    </div>
  );
};

export default Main;
