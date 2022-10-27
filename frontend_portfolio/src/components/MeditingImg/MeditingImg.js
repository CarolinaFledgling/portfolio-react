import meditating from "../../assets/meditating.svg";
import "./MeditingImg.scss";

function MeditingImg() {
  return (
    <div className="app__contact-img">
      <img src={meditating} alt="meditating img" height="230px" width="300px"/>
    </div>
  );
}

export default MeditingImg;
