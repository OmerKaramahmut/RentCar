import React from "react";
import "./CollapseText.css";
const CollapseText = () => {
  return (
    <div>
      <ul id="accordion">
        <li>
          <label htmlFor="first">
            Traffic fines <span>&#x3e;</span>
          </label>
          <input type="radio" name="accordion" id="first" checked />
          <div className="content">
            <p>
              If traffic fines are caused by the driver, the penalty is billed
              to the driver.
            </p>
          </div>
        </li>
        <li>
          <label htmlFor="second">
            Vehicle malfunctions <span>&#x3e;</span>
          </label>
          <input type="radio" name="accordion" id="second" />
          <div className="content">
            <p>
              If you report vehicle malfunctions to our dealers, they will
              provide you with technical service as soon as possible.
            </p>
          </div>
        </li>
        <li>
          <label htmlFor="third">
            Gasoline <span>&#x3e;</span>
          </label>
          <input type="radio" name="accordion" id="third" />
          <div className="content">
            <p>
              The gas tank will be given to you with a full tank. There is no
              additional fee charged to the driver for storage.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CollapseText;
