import React from "react";

import { SocialMedia } from "../components";

const AppWrap = (Component, classNames) =>
  function HOC() {
    return (
      <div className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
      </div>
    );
  };

export default AppWrap;
