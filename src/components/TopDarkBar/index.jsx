import React, { useState } from "react";
import { Link } from "react-router-dom";

export const TopDarkBar = () => {
  let [seclass, setSeclass] = useState(false);
  const themeDark = () => {
    setSeclass(true);
  };
  const themeLight = () => {
    setSeclass(false);
  };
  return (
    <body className={seclass ? "is__dark" : "uploadBg"} id="change-class">
      <div className="bg-dark py-30">
        <div className="container">
          <div className="text-center d-flex justify-content-end space-x-10 align-items-center">
            <div className="mode_switcher space-x-10">
              <Link
                onClick={themeLight}
                className="light d-flex align-items-center is_active"
              >
                <i className="ri-sun-fill"></i> Light
              </Link>
              <Link onClick={themeDark} className="dark d-flex align-items-center">
                <i className="ri-moon-fill"></i> Dark
              </Link>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
