import { NavLink } from "react-router-dom";
import bgVideoDesktop from "../video/bgVideoDesktop.mp4";
import bgVideoMMobile from "../video/bgVideoMobile.mp4";
import logo from "../img/logo.png";

const MainPage = () => {
  return (
    <main className="start_page">
      <video
        className="start_video"
        src={bgVideoDesktop}
        autoPlay
        muted
        loop
      ></video>
      <video
        className="start_video-mobile"
        src={bgVideoMMobile}
        autoPlay
        muted
        loop
      ></video>
      <div className="start_content">
        <NavLink to="/home" className="start_link__logo">
          <img src={logo} className="logo" alt="start-logo" />
        </NavLink>
      </div>
    </main>
  );
};

export default MainPage;
