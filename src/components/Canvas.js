import React from "react";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Canvas = () => {
  return (
    <>
      {/*<div classNameNameNameNameNameName="canvas_body">
        <div classNameNameNameNameNameName="nav_btn">
          <button
            classNameNameNameNameNameName="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </button>
        </div>

        <div
          classNameNameNameNameNameName="offcanvas offcanvas-top"
          tabindex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div classNameNameNameNameNameName="offcanvas-header">
            <button
              type="button"
              classNameNameNameNameNameName="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div classNameNameNameNameNameName="offcanvas-body">
            <img src="./Pictures/coffee.jpeg" alt="image"></img>
            <img src="./Pictures/coffee.jpeg" alt="image"></img>
          </div>
        </div>
  </div>*/}

      <input type="checkbox" id="op"></input>
      <div className="lower">
        <label for="op">
          <img src="./Pictures/nav.png"></img>
        </label>
      </div>
      <div className="overlay overlay-hugeinc">
        <label for="op"></label>
        <nav>
          <div className="d-flex flex-row mb-3">
            <div className="navbar">
              <img src="./Pictures/coffee.jpeg" alt="image"></img>
              <div>
                <div className="nav_heading">Amazing Flavour</div>
                <div className="nav_para">
                  Find out more about our aAmazing <br></br> Flavour
                </div>
              </div>
            </div>
            <div className="navbar">
              <img src="./Pictures/health-benefits.jpeg" alt="image"></img>
              <div>
                <div className="nav_heading">Surprising Benefits</div>
                <div className="nav_para">
                  Find out more about our Surprising <br></br> Benefits
                </div>
              </div>
            </div>
            <div className="navbar">
              <img src="./Pictures/essential-nutrients.jpeg" alt="image"></img>

              <div>
                <div className="nav_heading">Essential Nutrients</div>
                <div className="nav_para">
                  Find out more about our Essential <br></br> Nutrients
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Canvas;
