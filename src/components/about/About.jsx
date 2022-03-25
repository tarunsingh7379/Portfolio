import "./about.css";
import achievements from "../../img/achievements.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={achievements} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Achievements</h1>
        <p className="a-sub">
          Obtained a rank of 180th in Code India Code Coding Contest 2022
          organized by GeeksforGeeks.
        </p>
        <p className="a-sub">
          Obtained a global rank of 655th and a country rank of 109th in Google
          Hash Code 2022.
        </p>
        <p className="a-sub">
          Obtained a global rank of 936th in round H of Google Kickstart 2021.
        </p>
        <p className="a-sub">
          Obtained a rank of 215th among 75000+ other candidates in CodeKaze
          2021 Coding Contest organized by Coding Ninja.
        </p>
        <p className="a-sub">Codechef Highest Rating is 1971.</p>
        <p className="a-sub">
          Spend a whole month in 30 Days of Google Cloud program in 2020 and
          completed both Cloud Engineering Track and Data Science and Machine
          Learning Track.
        </p>
      </div>
    </div>
  );
};

export default About;
