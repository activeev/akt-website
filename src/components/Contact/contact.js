import React from "react"
import styled from "styled-components"
import Button from "../Button/button"

import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Contact = ({ title, subtitle, id, name, position, mail, phone }) => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "boat-person-wave.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 2000
            quality: 90
            cropFocus: NORTHEAST
          ) #                      duotone: {
          #                          highlight: "#00b7ff",
          #                          shadow: "#4800ff",
          #                          opacity: 30
          #                      }
          {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img2: file(relativePath: { eq: "contact.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      id="contact"
      Tag="section"
      className="parallax-image"
      fluid={data.img1.childImageSharp.fluid}
    >
      <ContactWrapper id={id}>
        <div className="content-container">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="flex-container contact-block">
            <form name="contact">
              <div className="input-area">
                <input type="text" name="name" required autoComplete="on" />
                <label className="label-name">
                  <span className="content-name">Name</span>
                </label>
              </div>

              <div className="input-area">
                <input type="email" name="email" required autoComplete="on" />
                <label className="label-name">
                  <span className="content-name">Email</span>
                </label>
              </div>

              <div className="input-area">
                <textarea
                  type="text"
                  name="message"
                  rows="5"
                  required
                  autoComplete="off"
                />
                <label className="label-name">
                  <span className="content-name">Nachricht</span>
                </label>
              </div>

              <div className="input-area button-area">
                <Button cta="Absenden" type="submit" />
              </div>
            </form>
            <div className="contact-card">
              <Img
                fluid={data.img2.childImageSharp.fluid}
                className="card-image"
              />
              <div className="card-container">
                <h3>{name}</h3>
                <p>{position}</p>
                <p>
                  <a href={`tel:${phone}`}>{phone}</a>
                </p>
                <p>
                  <a
                    href={`mailto:${mail}?subject=Anfrage zum AKT 2021&cc=akt@active-bremen.de&body=Sehr%20geehrte%20Frau%20Franke,%0A%0A%0A%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen%0A%0AErika%20Musterfrau`}
                  >
                    {mail}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContactWrapper>
    </BackgroundImage>
  )
}

const ContactWrapper = styled.section`
  padding: 100px 30px;

  .content-container {
    max-width: 500px;
    margin: 0 auto;

    @media (min-width: 768px) {
      max-width: 650px;
    }

    @media (min-width: 1200px) {
      max-width: 900px;
    }

    h2 {
      text-align: left;
      // background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;

      @media (min-width: 768px) {
        text-align: center;
      }
    }
    p {
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        text-align: center;
      }
    }

    .flex-container {
      &.contact-block {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & > * {
          //flex-grow: 1;
        }

        @media (min-width: 992px) {
          flex-direction: row;
        }

        .contact-card {
          //width: 100%;
          flex-grow: 1;
          background-color: #fff;
          margin: 0 auto;

          .card-image {
          }

          .card-container {
            text-align: center;
            padding: 0 20px;

            & p {
              line-height: 1;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }

    form {
      position: relative;
      overflow: hidden;
      //margin-right: 40px;
      flex-grow: 3;

      @media (min-width: 992px) {
        margin-right: 40px;
      }

      .input-area {
        margin-bottom: 40px;
        position: relative;

        &.button-area {
          text-align: center;
          /* margin-bottom: 0; */
        }
      }

      input,
      textarea {
        height: 100%;
        font-size: 1rem;
        letter-spacing: 0.2rem;
        padding: 20px;
        display: block;
        width: 100% !important;
        border: none;
        /* background-color: rgb(0,183,255); background-color: #0b132e; */
        /* color: #fff; */
        /* text-transform: uppercase; */
        position: relative;
        box-sizing: border-box;
        outline: none;

        &:focus,
        &:valid {
          + .label-name {
            .content-name {
              transform: translateY(-25%);
              font-size: 0.7rem;
              opacity: 0.2;
            }
            &::after {
              transform: translateX(0%);
            }
          }
        }

        &:invalid {
          box-shadow: none; /* remove red border added by browsers  */
          color: red;
        }
      }

      label {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        pointer-events: none;

        &::after {
          content: "";
          position: absolute;
          left: 0px;
          bottom: -3px;
          height: 3px;
          //background: linear-gradient(90deg, #f441a5, #03a9f4);
          background: linear-gradient(90deg, rgb(72, 0, 255), rgb(0, 183, 255));
          width: 100%;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
      }

      .content-name {
        position: absolute;
        top: 10px;
        left: 20px;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        font-size: 0.8rem;
      }
    }
  }
`

export default Contact
