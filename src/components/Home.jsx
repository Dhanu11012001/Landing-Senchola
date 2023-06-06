import React from "react";
import "./css/Home.css";
import HomeTech from "./HomeTech";
import HomeCurriculum from "./HomeCurriculum";
import Statergies from "./HomeStatergies";
import HomeTechnologies from "./HomeTechnologies";

function Home() {
  return (
    <div className="Home">
      {/* background */}
      <div className="sen-background" alt="sen-background"></div>

      {/* Slider */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade w-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?w=1060&t=st=1685084055~exp=1685084655~hmac=d85488ec702abfcf0fc47d143094c36b76b76b477bea84be8f603b0b373741b8"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/into-success-group-young-freelancers-office-have-conversation-smiling_146671-13567.jpg?w=1060&t=st=1685083996~exp=1685084596~hmac=ead8f0d2c984da0777c807112fefeb4de0f39a192e7fa26ae2f8d119ace1ca98"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041867.jpg?w=1060&t=st=1685084127~exp=1685084727~hmac=9c9b548efb02df9ca28e5414839d4194968bfcf62146cdcf5c97dc89340fdae6"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Tech */}
      <HomeTech/>

      {/* Curriculum */}
      <HomeCurriculum/>

      {/* Statergies */}
      <Statergies/>

      {/* Technologies */}
      <HomeTechnologies/>


    </div>
  );
}

export default Home;