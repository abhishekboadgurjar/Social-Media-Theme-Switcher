import { useState } from "react";
import "./App.css";
import upLogo from "./assets/images/icon-up.svg";
import downLogo from "./assets/images/icon-down.svg";
import fbLogo from "./assets/images/icon-facebook.svg";
import igLogo from "./assets/images/icon-instagram.svg";
import twLogo from "./assets/images/icon-twitter.svg";
import ytLogo from "./assets/images/icon-youtube.svg";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <div className={`body ${isDarkMode ? "light" : "dark"}`}>
        <div className="app">
          <div className="header">
            <div className="dashboard">
              <h1>Social Media Dashboard</h1>
              <p>Total Followers: 23,004</p>
            </div>
            <div className="mode">
              <p>{isDarkMode ? "Light Mode" : "Dark Mode"}</p>
              <div className="toggle-area">
                <div
                  onClick={toggleTheme}
                  className={`${
                    isDarkMode ? "left-toggle-btn" : "right-toggle-btn"
                  }`}
                ></div>
              </div>
            </div>
          </div>
          <div className="social-cards">
            <div className="social-card-section">
              <div className="card">
                <div className="user">
                  <img src={fbLogo} alt="logo" />
                  <p>@nathnaf</p>
                </div>
                <div className="follower">
                  <h1>1987</h1>
                  <p>FOLLOWERS</p>
                </div>
                <div className="view">
                  <img src={upLogo} alt="up" />
                  <p>12 Today</p>
                </div>
              </div>
              <div className="card">
                <div className="user">
                  <img src={twLogo} alt="logo" />
                  <p>@nathnaf</p>
                </div>
                <div className="follower">
                  <h1>1044</h1>
                  <p>FOLLOWERS</p>
                </div>
                <div className="view">
                  <img src={upLogo} alt="up" />
                  <p>99 Today</p>
                </div>
              </div>
            </div>
            <div className="social-card-section">
              <div className="card">
                <div className="user">
                  <img src={igLogo} alt="logo" />
                  <p>@nathnaf</p>
                </div>
                <div className="follower">
                  <h1>11k</h1>
                  <p>FOLLOWERS</p>
                </div>
                <div className="view">
                  <img src={upLogo} alt="up" />
                  <p>1987 Today</p>
                </div>
              </div>
              <div className="card">
                <div className="user">
                  <img src={ytLogo} alt="logo" />
                  <p>Nathan F</p>
                </div>
                <div className="follower">
                  <h1>8239</h1>
                  <p>SUBSCRIBER</p>
                </div>
                <div className="view down">
                  <img src={downLogo} alt="up" />
                  <p>144 Today</p>
                </div>
              </div>
            </div>
          </div>
          <div className="overView">
            <h1>Overview - Today</h1>
          </div>
          <div className="reach">
            <div className="analytics">
              <div className="section-a">
                <div className="a-card">
                  <div className="views">
                    <p>Page view</p>
                    <h1>87</h1>
                  </div>
                  <div className="logosImage">
                    <img src={fbLogo} alt="" />
                    <p>
                      <img src={upLogo} alt="" />
                      3%
                    </p>
                  </div>
                </div>
                <div className="a-card">
                  <div className="views">
                    <p>Likes</p>
                    <h1>52</h1>
                  </div>
                  <div className="logosImage">
                    <img src={fbLogo} alt="" />
                    <p>
                      <img src={upLogo} alt="" />
                      2%
                    </p>
                  </div>
                </div>
              </div>
              <div className="section-a">
                <div className="a-card">
                  <div className="views">
                    <p>Likes</p>
                    <h1>5462</h1>
                  </div>
                  <div className="logosImage">
                    <img src={igLogo} alt="" />
                    <p>
                      <img src={upLogo} alt="" />
                      2257%
                    </p>
                  </div>
                </div>
                <div className="a-card">
                  <div className="views">
                    <p>Page view</p>
                    <h1>52k</h1>
                  </div>
                  <div className="logosImage">
                    <img src={fbLogo} alt="" />
                    <p>
                      <img src={upLogo} alt="" />
                      1375%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="analytics">
              <div className="section-a">
                <div className="a-card">
                  <div className="views">
                    <p>Retweets</p>
                    <h1>117</h1>
                  </div>
                  <div className="logosImage">
                    <img src={twLogo} alt="" />
                    <p>
                      <img src={upLogo} alt="" />
                      303%
                    </p>
                  </div>
                </div>
                <div className="a-card">
                  <div className="views">
                    <p>Likes</p>
                    <h1>507</h1>
                  </div>
                  <div className="logosImage">
                    <img src={fbLogo} alt="" />
                    <p>
                      <img src={upLogo} alt="" />
                      303%
                    </p>
                  </div>
                </div>
              </div>
              <div className="section-a">
                <div className="a-card">
                  <div className="views">
                    <p>Likes</p>
                    <h1>107</h1>
                  </div>
                  <div className="logosImage">
                    <img src={ytLogo} alt="" />
                    <p>
                      <img src={downLogo} alt="" />
                      19%
                    </p>
                  </div>
                </div>
                <div className="a-card">
                  <div className="views">
                    <p>Total Views</p>
                    <h1>1407</h1>
                  </div>
                  <div className="logosImage">
                    <img src={fbLogo} alt="" />
                    <p>
                      <img src={downLogo} alt="" />
                      12%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>Made with ❤️ by Abhishek Gurjar</p>
        </div>
      </div>
    </>
  );
};

export default App;
