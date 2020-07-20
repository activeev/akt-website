import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const TextBlockImg = ({ title, children, subtitle, id, columns }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cropped.jpeg" }) {
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
      <TextBlockImgWrapper columns={columns}>
        <div className="content-container">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="children">{children}</div>
        </div>
      </TextBlockImgWrapper>
    </BackgroundImage>
  )
}

const TextBlockImgWrapper = styled.section`
  text-align: center;
  padding: 100px 30px;

  .content-container {
    max-width: 500px;

    @media (min-width: 768px) {
      max-width: 650px;
    }

    //@media (min-width: 1200px) {
    //  max-width: 900px;
    //}
  }

  p {
    margin-bottom: 50px;
  }

  .children {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    align-content: center;
    justify-content: center;

    @media (min-width: 450px) {
      grid-template-columns: ${(props) => " 1fr".repeat(props.columns)};
    }
  }
`

export default TextBlockImg
