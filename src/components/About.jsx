import React from "react";
import discussion from "../components/images/discussion-conversation-talk-chat-concept.jpg"
import about from "../components/images/about-as-service-contact-information-concept.jpg"
import teamwork from "../components/images/teamwork-alliance-collaboration-company-team-concept.jpg"
// import we1 from "../components/images/we1.png"
// import we2 from "../components/images/we2.png"
import 'bootstrap/dist/css/bootstrap.css';

// import {CCard,CCardBody,CCardTitle,CButton,CCardText,CCardImage}  from '@coreui/coreui/dist/css/coreui.min.css'
// import Testimonials from "./Testimonals";
import port1 from "../components/images/prot1.png"
import port2 from "../components/images/prot2.png"
import port3 from "../components/images/prot3.png"
import port4 from "../components/images/prot4.png"
import chose1 from "../components/images/chose1.png"
import chose2 from "../components/images/chose2.png"
import chose3 from "../components/images/chose3.png"
import { CCard } from "@coreui/react";
import { CCardBody } from "@coreui/react";
import { CCardText } from "@coreui/react";
import { CCol} from "@coreui/react";
import { CCardTitle } from "@coreui/react";
import { CCardImage } from "@coreui/react";
import { CRow } from "@coreui/react";
import Card1 from "../components/images/4532.jpg"
import Card2 from "../components/images/20892632.jpg"
import Card3 from "../components/images/4413519.jpg"
import Card4 from "../components/images/2260674.jpg"
import Card5 from "../components/images/2352648.jpg"
import Card6 from "../components/images/5099304.jpg"
import Review from "./Review";
function About (){
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
               src={about}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
         
              src={teamwork}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={discussion}
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
      <br></br>
      <>
      <div className="we_do">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="titlepage text_align_center">
         <center> <h2>What we do </h2></center>
        </div>
        <br></br>
        <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
  <CCol xs>
    <CCard className="h-100">
      <CCardImage orientation="top" src={Card1} />
      <CCardBody>
        <CCardTitle>Web design</CCardTitle>
        <CCardText>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard className="h-100">
      <CCardImage orientation="top" src={Card2}/>
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          This card has supporting text below as a natural lead-in to additional content.
        </CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard className="h-40">
      <CCardImage orientation="top" src={Card3} />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This card has even longer content than the first to show that equal height
          action.
        </CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard className="h-100">
      <CCardImage orientation="top" src={Card4} />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard className="h-100">
      <CCardImage orientation="top" src={Card5} />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard className="h-100">
      <CCardImage orientation="top" src={Card6} />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  
</CRow>
      </div>
    </div>
  
  </div>
</div>



<div className="portfolio">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="titlepage text_align_left">
       <h2>We Have Done Portfolio</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div id="ho_nf" className="portfolio_main text_align_left">
          <figure>
            <img src={port1} alt="#" />
            <div className="portfolio_text">
              <div className="li_icon">
                <a href="Javascript:void(0)">
                  <i className="fa fa-search" aria-hidden="true" />
                </a>
                <a href="Javascript:void(0)">
                  <i className="fa fa-link" aria-hidden="true" />
                </a>
              </div>
              <h3>Carrency Dashbord</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majoraity have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable
              </p>
            </div>
          </figure>
        </div>
      </div>
      <div className="col-md-6">
        <div id="ho_nf" className="portfolio_main text_align_left">
          <figure>
            <img src={port2}  alt="#" />
            <div className="portfolio_text">
              <div className="li_icon">
                <a href="Javascript:void(0)">
                  <i className="fa fa-search" aria-hidden="true" />
                </a>
                <a href="Javascript:void(0)">
                  <i className="fa fa-link" aria-hidden="true" />
                </a>
              </div>
              <h3>Carrency Dashbord</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majoraity have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable
              </p>
            </div>
          </figure>
        </div>
      </div>
      <div className="col-md-6">
        <div id="ho_nf" className="portfolio_main text_align_left">
          <figure>
            <img src={port3}  alt="#" />
            <div className="portfolio_text">
              <div className="li_icon">
                <a href="Javascript:void(0)">
                  <i className="fa fa-search" aria-hidden="true" />
                </a>
                <a href="Javascript:void(0)">
                  <i className="fa fa-link" aria-hidden="true" />
                </a>
              </div>
              <h3>Carrency Dashbord</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majoraity have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable
              </p>
            </div>
          </figure>
        </div>
      </div>
      <div className="col-md-6">
        <div id="ho_nf" className="portfolio_main text_align_left">
          <figure>
            <img src={port4}  alt="#" />
            <div className="portfolio_text">
              <div className="li_icon">
                <a href="Javascript:void(0)">
                  <i className="fa fa-search" aria-hidden="true" />
                </a>
                <a href="Javascript:void(0)">
                  <i className="fa fa-link" aria-hidden="true" />
                </a>
              </div>
              <h3>Carrency Dashbord</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majoraity have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable
              </p>
            </div>
          </figure>
        </div>
      </div>
      <div className="col-md-12">
        <a className="read_more" href="portfolio.html">
          See More
        </a>
      </div>
    </div>
  </div>
</div>
  {/* end we_do */}
  {/* about */}
  

<main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review/>
      </section>
    </main>
  {/* <div className="chose">
  <div className="container">
    <div className="row d_flex">
      <div className="col-md-18">
        <div className="titlepage text_align_left">
          <h2>Why Chose us</h2>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="chose_box">
          <i>
            <img src={chose1} alt="#" />
          </i>
          <h3>Project Done </h3>
          <strong>1000+</strong>
          <a className="read_more" href="Javascript:void(0)">
            Read More
          </a>
        </div>
      </div>
      <div className="col-lg-5 col-md-4">
        <div className="chose_box">
          <i>
            <img src={chose2} alt="#" />
          </i>
          <h3>Happy Clients </h3>
          <strong>900+</strong>
          <a className="read_more" href="Javascript:void(0)">
            Read More
          </a>
        </div>
      </div>
      <div className="col-lg-2 col-md-4">
        <div className="chose_box">
          <i>
            <img src={chose3}alt="#" />
          </i>
          <h3>Awards</h3>
          <strong>100+</strong>
          <a className="read_more" href="Javascript:void(0)">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
</div> */}

</>

 <br></br>
</div>



          
  )

}
export default About