import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const TextBlockImg = ({ title, children, subtitle, id, columns }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "sailboats-1-cropped.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImageWrapper
      id={id}
      Tag="section"
      className="parallax-image"
      fluid={data.file.childImageSharp.fluid}
      columns={columns}
      alt="Sailboats sailing from behind"
    >
      <div className="content-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className="children">{children}</div>
      </div>
    </BackgroundImageWrapper>
  )
}

const BackgroundImageWrapper = styled(BackgroundImage)`
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
