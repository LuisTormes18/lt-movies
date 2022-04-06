import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

import { FaHome, FaSearch, FaCameraRetro, FaVideo } from "react-icons/fa";

const Sidebar = () => {
  const size = 25;
  const color = "#f1f1f1";

  return (
    <>
      <aside>
        <nav className="menu">
          <div className="item">
            <Link to="/">
              <FaHome size={size} color={color} />
            </Link>
          </div>
          {/*<div className="item">
          <Link to="/movies">
            <FaVideo size={size} color={color} />
          </Link>
        </div>
        <div className="item">
          <Link to="/">
            <FaCameraRetro size={size} color={color} />
          </Link>
        </div>
        */}
          <div className="item">
            <Link to="/search">
              <FaSearch size={size} color={color} />
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
