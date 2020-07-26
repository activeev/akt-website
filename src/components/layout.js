import React from "react"
import styled from "styled-components"
import "./reset.css"
import Navbar from "../components/Navbar/navbar"
import Footer from "../components/Footer/footer"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <div className="layout">{children}</div>
      <Footer />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  font-family: Tahoma, Verdana, Segoe, sans-serif;
  color: rgb(15, 30, 72);
  #background: linear-gradient(45deg, #060c21, #0d0139);
  background: #fff;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 900;
    line-height: 1.4;
  }

  h1,
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: -1px;
    margin: 1rem 0;
    color: transparent;
    background: linear-gradient(45deg, rgb(72, 0, 255), rgb(0, 183, 255));
    background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;

    @media (min-width: 768px) {
      font-size: 1.6rem;
      line-height: 1.3;
    }

    @media (min-width: 1080px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.2rem;

    @media (min-width: 768px) {
      font-size: 1.3rem;
      line-height: 1.2;
    }
    @media (min-width: 1080px) {
      font-size: 1.5rem;
    }
  }

  p,
  tr,
  th,
  .text-scaling {
    font-size: 1rem;
    line-height: 1.45;
    margin: 1rem 0;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }

    @media (min-width: 1080px) {
      font-size: 1.2rem;
      line-height: 1.4;
    }
  }

  .content-container {
    margin: 0 auto;
    width: 100%;
    max-width: 500px;

    @media (min-width: 1080px) {
      max-width: 650px;
    }
  }

  .flex-container {
    display: flex;

    &.trio-block {
      flex-direction: column;
      justify-content: center;

      & > * {
        flex-grow: 1;
      }

      @media (min-width: 992px) {
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 490px;
        margin: 0 auto;
      }
    }
  }

  .parallax-image,
  .parallax-image::before {
    background-attachment: scroll;
    background-position: left center;
    background-size: cover;

    @media (min-width: 1200px) {
      background-attachment: fixed;
      background-position: center;
    }
  }
  .full-screen-image {
    height: 100vh;
  }

  .section-padding {
    padding: 100px 30px;
  }

  .text-center {
    text-align: center;
  }
`

export default Layout
