import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Packages = ({ title, para, children, id }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "boat-person-wave-cropped.jpg" }) {
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
  }
`

export default Packages
