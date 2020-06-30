import React, { useState } from "react"
import links from "../../constants/links"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "react-scroll"
import Img from "gatsby-image"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-square-transparent.png"}) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }`)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  const disableNav = () => {
    setNav(false)
  }
  return (
    <NavWrapper>
      <div className="masthead flex-container">
        <div className="logo">
          <Img
            fluid={logo.file.childImageSharp.fluid}
          />
        </div>
        <button
          className={
            isOpen
              ? `${"toggle-btn"} ${"toggle-btn-active"}`
              : `${"toggle-btn"}`
          }
          type="button"
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul
        className={isOpen ? `${"nav-links"} ${"show-nav"}` : `${"nav-links"}`}
        onClick={disableNav}
      >
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link
                activeClass="active"
                to={item.path}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onClick={disableNav}
              >
                {item.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;

  .masthead {
    z-index: 3;
    width: 100%;
    justify-content: space-between;

    img, .logo {
      //width: 90px;
      width: 90px;

      @media (min-width: 768px) {
        //width: 100px;
        width: 140px;
      }

      @media (min-width: 1200px) {
        //width: 120px;
        width: 170px;
      }
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    text-align: center;
    background: linear-gradient(45deg, #060c21, #0d0139);
    background: linear-gradient(45deg, rgb(72,0,255), rgb(0,183,255));
    background: rgb(140,164,232);
    background: #fff;
    opacity: 0.9;
    margin: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding-left: 0;

    li {
      list-style: none;
      font-size: 1.25rem;
      font-weight: 400;
      margin-left: 0;
      padding: 0.75rem 0;
      a {
        text-decoration: none;
        text-transform: capitalize;
        color: rgb(15,30,72);
        transition: 0.3s;

        &.active {
          // color: #e609b5;
          filter: brightness(3);
        }
      }
      &:hover {
        cursor: pointer;
        a {
          // color: #e609b5;
          // color: #fff;
          filter: brightness(3);
        }
      }
    }

    &.show-nav {
      transform: translateX(0%);
    }
  }

  .toggle-btn {
    width: 50px;
    height: 50px;
    padding: 10px;
    background-color: transparent;
    background-color: #fff;
    border-radius: 50%;
    border: none;

    span {
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
      background-color: rgb(15,30,72);
      transition: 0.2s ease-in;

      &:nth-child(1) {
        transform: translateY(-5px);
      }

      &:nth-child(3) {
        transform: translateY(5px);
      }
    }

    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          transform: translateY(2px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }

        &:nth-child(3) {
          transform: translateY(-2px) rotate(-45deg);
        }
      }
    }
  }

  @media (min-width: 992px) {
    .masthead {
      flex-direction: column;
      justify-content: center;
    }

    .toggle-btn {
      display: none;
    }

    .nav-links {
      background: transparent;
      flex-direction: row;
      margin-left: auto;
      position: relative;
      transform: translateX(0);
      transition: none;

      li {
        margin-left: 1rem;
      }
    }
  }
`

export default Navbar
