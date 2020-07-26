import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Button from "../Button/button"
import { Link } from "react-scroll"
import { motion } from "framer-motion"

const Banner = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "sailboats-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <BannerWrapper id={id}>
      <BackgroundImage
        Tag="section"
        className="parallax-image full-size-image"
        fluid={data.file.childImageSharp.fluid}
        alt="Harbor full of Sailboats"
        loading="eager"
      >
        <div className="hero-content">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
          >
            Arbeitskreistreffen <br /> <span>des BDSU</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1.5 }}
          >
            - Januar 2021 -
          </motion.p>
          <Link to="about" smooth={true} duration={500}>
            <Button cta="Weitere Infos" anchor={true} href="about" />
          </Link>
        </div>
      </BackgroundImage>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.section`
  .gatsby-image-wrapper {
    height: 100vh;
    color: rgb(15, 30, 72);
  }

  .hero-content {
    height: 100vh;
    text-align: center;
    //height: 100%;
    width: 100%;
    max-width: 400px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
      max-width: 650px;
    }

    h1 {
      font-size: 1.75rem;
      line-height: 1.2;
      background: rgb(15, 30, 72);
      background-clip: text;
      -webkit-background-clip: text;

      span {
        /* background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4); */
        //background: linear-gradient(45deg, rgb(140,164,232), rgb(223,157,26));
        //background: linear-gradient(45deg, rgb(223,157,26), rgb(15,30,72));
        //background: linear-gradient(45deg, #8cd1e8, #a38ce8);
        background: linear-gradient(45deg, rgb(72, 0, 255), rgb(0, 183, 255));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    p {
      margin-top: 0;
      margin-bottom: 2rem;
      line-height: 1.2;
      font-size: 1.15rem;

      @media (min-width: 768px) {
        font-size: 1.35rem;
      }

      @media (min-width: 1200px) {
        font-size: 1.5rem;
      }
    }

    button,
    .anchor {
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      max-width: 800px;

      h1 {
        font-size: 3rem;
      }
    }

    @media (min-width: 1200px) {
      h1 {
        font-size: 4rem;
      }
    }
  }
`

export default Banner
