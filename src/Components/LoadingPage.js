import React from "react";
import photo from "./ZKZg.gif";

const LoadingPage = () => {
  return (
    <div className="section loading_page">
      <div className="image_loader_con">
        <img src={photo} className="loading" />
      </div>
    </div>
  );
};

export default LoadingPage;
