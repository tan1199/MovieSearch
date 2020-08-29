import React from "react";
import { Link } from "@reach/router";
import reactLogo from "../images/movie.svg";
import tmdbLogo from "../images/tmdb_logo.svg";
import "./Dashboard.css";
const dashboardstyle = {
  width: "100%",
  height: "100%",
  borderRadius: "0.5em",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const Dashboard = () => (
  <div>
    <div className="dashboard-wrapper">
      <div className="react">
        <Link to="/">
          <img
            src={reactLogo}
            alt="reactlogo"
            style={dashboardstyle}
            className="dashboard-image"
          />
        </Link>
      </div>
      <div className="dashboardtext">
        <p>Movie Search App</p>
      </div>
      <div className="tmdb">
        <img src={tmdbLogo} alt="tmdblogo" />
      </div>
    </div>
  </div>
);
export default Dashboard;
