import React from "react";
import "./culture.css";

const Culture = () => {
  return (
    <div>
      <div className="culture-wrapper">
        <div className="left" />
        <div className="right" />

        <div className="culture-quote">
          <p>
            " I feel like our culture is so good at pulling other people down
            and being so judgmental, but there's space for all of us to be who
            we are. "
          </p>
          <p className="author">-Tracee Ellis Ross</p>
        </div>
      </div>
      <div className="culture-content-wrapper">
        <div className="candy1">
          <p>Edible Recipes</p>
        </div>
        <div className="candy2" />
        <div className="candy3" />
        <div className="candy4" />
        <div className="candy5" />
        <div className="candy6" />
      </div>
      <div className="culture-wrapper2">
        <div className="left2" />
        <div className="right2" />
        <img
          src={
            "http://alexmendozalaw.com/law/wp-content/uploads/2015/11/marijuana-possession-black.png"
          }
          class="center"
          className="culture-quote2"
        />
        <img
          src={
            "http://www.quotesforthemind.com/wp-content/uploads/2013/08/Meaning-of-Life-Quotes-%E2%80%93-The-True-Purpose-of-Life-%E2%80%93-What-is-Life-About-%E2%80%93Philosophy-of-Life-Quote-there-is-great-meaning-in-life-for-those-who-are-willing-to-journey.png"
          }
          className="culture-quote3"
        />
      </div>
    </div>
  );
};
export default Culture;
