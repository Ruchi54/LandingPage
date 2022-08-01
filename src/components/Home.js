import React from "react";
import Video from "./video/video.mp4";
import "../styles.css";

const Home = () => {
  return (
    <>
      <div className="heading">
        <p>GorillaCoffee</p>

        <video autoPlay loop muted>
          <source src={Video} type="video/mp4"></source>
        </video>

        <div className="content">
          <div className="inline">Discover The Taste</div>
          <div className="inline">Of Real Coffee. </div>
        </div>

        <div className="content_next">
          <div className="inline">
            Lorem lpsum is simply dummy text of the printing
          </div>
          <div className="inline">and typesetting industry.</div>
        </div>

        <div className="btnn">
          <button type="button" class="btn btn-outline-light">
            Buy Now
          </button>
        </div>
      </div>

      <div class="col-4">
        <div
          id="simple-list-example"
          class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center"
        >
          <a
            class="p-1 rounded"
            href="#data"
            style={{
              color: "white",
              marginLeft: "600%",
              marginTop: "180%",
              textAlign: "center",
            }}
          >
            Explore
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
