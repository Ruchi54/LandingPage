import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      {/*<div classNameName="main_footer">
        <div classNameName="footer">
          <div classNameName="left_box">
            <img src="./Pictures/coffee-flavour-small.jpeg" alt="image"></img>

            <div>
              <div>Amazing Coffee Flavour</div>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                <br></br>
                veniam ullam illo dolorum dolor. Dolor, velit vitae? Fugiat
                <br></br> quidem nostrum nobis sit beatae consequuntur quisquam
                <br></br>
                iusto reprehenderit voluptatibus officia? Natus.
              </div>
            </div>
          </div>

          <div classNameName="mid_box">
            <img src="./Pictures/health-benefits-small.jpeg" alt="image"></img>
            <div>
              <div>Health Benefits</div>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                <br></br>
                veniam ullam illo dolorum dolor. Dolor, velit vitae? Fugiat
                <br></br> quidem nostrum nobis sit beatae consequuntur quisquam
                <br></br>
                iusto reprehenderit voluptatibus officia? Natus.
              </div>
            </div>
          </div>

          <div classNameName="right_box">
            <img
              src="./Pictures/essential-nutrients-small.jpeg"
              alt="image"
            ></img>

            <div>
              <div>Amazing Coffee Flavour</div>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                <br></br>
                veniam ullam illo dolorum dolor. Dolor, velit vitae? Fugiat
                <br></br> quidem nostrum nobis sit beatae consequuntur quisquam
                <br></br>
                iusto reprehenderit voluptatibus officia? Natus.
              </div>
            </div>
          </div>
        </div>
  </div>*/}

      <div className="main_footer">
        <div className="d-flex flex-row mb-3">
          <div className="p-2">
            <img src="./Pictures/coffee-flavour-small.jpeg" alt="image"></img>
            <div>
              <div className="data_heading">Amazing Coffee Flavour</div>
              <div className="footer_para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                <br></br>
                veniam ullam illo dolorum dolor. Dolor, velit vitae? Fugiat
                <br></br> quidem nostrum nobis sit beatae consequuntur quisquam
                <br></br>
                iusto reprehenderit voluptatibus officia? Natus.
              </div>
            </div>
          </div>
          <div className="p-2">
            <img src="./Pictures/health-benefits-small.jpeg" alt="image"></img>
            <div>
              <div className="data_heading">Health Benefits</div>
              <div className="footer_para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                <br></br>
                veniam ullam illo dolorum dolor. Dolor, velit vitae? Fugiat
                <br></br> quidem nostrum nobis sit beatae consequuntur quisquam
                <br></br>
                iusto reprehenderit voluptatibus officia? Natus.
              </div>
            </div>
          </div>
          <div className="p-2">
            <img
              src="./Pictures/essential-nutrients-small.jpeg"
              alt="image"
            ></img>

            <div>
              <div className="data_heading">Essential Nutrients</div>
              <div className="footer_para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                <br></br>
                veniam ullam illo dolorum dolor. Dolor, velit vitae? Fugiat
                <br></br> quidem nostrum nobis sit beatae consequuntur quisquam
                <br></br>
                iusto reprehenderit voluptatibus officia? Natus.
              </div>
            </div>
          </div>
        </div>
        <div className="hr p-3">
          © 2022 GorillaCoffee
          <img src="./Pictures/facebook.png"></img>
          <img src="./Pictures/insta.jpeg"></img>
          <img src="./Pictures/twitter.png"></img>
        </div>
      </div>
    </>
  );
};

export default Footer;
