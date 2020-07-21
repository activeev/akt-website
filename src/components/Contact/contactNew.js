import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const ContactNew = ({
  title,
  subtitle,
  id,
  name,
  position,
  phone,
  mailTo,
  mailCc,
  subject,
  body,
}) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "contact.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <ContactWrapper id={id}>
      <div className="content-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className="contact-card">
          <Img fluid={data.file.childImageSharp.fluid} className="card-image" />
          <div className="card-container">
            <h3>{name}</h3>
            <p>{position}</p>
            <p>
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
            <p>
              <a
                href={`mailto:${mailTo}?cc=${mailCc}&subject=${subject}&body=${body}`}
              >
                {mailTo}
              </a>
            </p>
          </div>
        </div>
      </div>
    </ContactWrapper>
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
    .contact-card {
      background-color: #fff;
      margin: 0 auto;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;

      @media (min-width: 768px), (orientation: landscape) {
        flex-direction: row;
      }

      .card-image {
        max-width: 200px;
        width: 100%;
        flex-shrink: 1;

        @media (min-width: 768px) and (orientation: portrait),
          (min-height: 768px) and (orientation: landscape) {
          max-width: 300px;
        }
      }

      .card-container {
        text-align: center;
        padding: 10px 20px;

        & p {
          line-height: 1;
          margin: 1rem 2rem;
        }

        a {
          text-decoration: none;
          background: linear-gradient(45deg, rgb(72, 0, 255), rgb(0, 183, 255));
          background-clip: text;
          -webkit-background-clip: text;
          text-fill-color: transparent;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
`

export default ContactNew
