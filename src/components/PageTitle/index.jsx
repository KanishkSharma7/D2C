import React from "react";

const PageTitle = (title) => {
  return (
    <>
      <div className="hero_ranking bg_white">
        <div className="container">
          <h1 className="text-center">{title.title}</h1>
        </div>
      </div>
    </>
  );
};
export default PageTitle;
