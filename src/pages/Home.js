import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="about">About</Link>
          <Link to="store">Store</Link>
        </div>

        <div className="home__headerRight">
          <Link to="gmail">Gmail</Link>
          <Link to="images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <Link to="/">
          <img src="https://blog.kakaocdn.net/dn/I81mL/btqOeBlgX7S/hlI2ssuZfmGbvUG2ncC4LK/img.png" />
        </Link>

        <div className="home__inputContainer">
          <Search />
        </div>
      </div>

      <div className="home__footer">
        <div className="home__footerUpper">United States of America</div>
        <div className="home__footerLower">
          <p>
            Google Information &nbsp;&nbsp; Advertisement &nbsp;&nbsp; Business
            &nbsp;&nbsp; Search Optimization
          </p>
          <p>Terms of service &nbsp;&nbsp; settings</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
