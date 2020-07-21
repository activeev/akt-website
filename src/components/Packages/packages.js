import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Packages = ({ title, para, children, id }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "sailboat-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90, cropFocus: SOUTH) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      id={id}
      Tag="section"
      className="parallax-image"
      fluid={data.file.childImageSharp.fluid}
      alt="View from a Sailboat"
    >
      <PackagesWrapper>
        <div className="text-area">
          <h2>{title}</h2>
          <p>{para}</p>
        </div>
        <div className="flex-container">{children}</div>
      </PackagesWrapper>
    </BackgroundImage>
  )
}

const PackagesWrapper = styled.section`
  padding: 100px 30px 150px;
  text-align: center;

  .text-area {
    max-width: 500px;
    margin: 0 auto;

    @media (min-width: 1200px) {
      max-width: 650px;
    }
  }

  .flex-container {
    flex-direction: column-reverse;
    padding-top: 80px;
    align-items: center;
    justify-content: center;

    @media (min-width: 992px) {
      flex-direction: row;
    }

    & > article {
      :nth-last-child(1) {
        ::before {
          content: "";
          position: absolute;
          top: -5px;
          right: 0px;
          bottom: -5px;
          left: 0px;
          background: linear-gradient(
            to right,
            rgb(0, 183, 255),
            rgb(72, 0, 255)
          );
          z-index: -1;
          transform: skew(3deg, 3deg);
          border-radius: 4px;
        }
        .content {
          filter: brightness(1.3);
        }
      }

      :nth-last-child(2) {
        ::before {
          content: "";
          position: absolute;
          top: -5px;
          right: 0px;
          bottom: -5px;
          left: 0px;
          background: linear-gradient(
            to right,
            rgb(0, 183, 255),
            rgb(72, 0, 255)
          );
          z-index: -1;
          transform: skew(1.5deg, 1.5deg);
          border-radius: 4px;
        }
        //button {
        //  background: transparent;
        //  border: 1px solid rgb(0, 183, 255);
        //}
      }

      :nth-last-child(3) {
        button {
          background: transparent;
          border: 1px solid rgb(0, 183, 255);
        }
      }
    }
  }
`

export default Packages
