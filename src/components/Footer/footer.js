import React from "react"
import styled from "styled-components"
import socialIcons from "../../constants/social-icons"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="copyright">
        Copyright &copy; 2020 Active e. V. All Rights Reserved
      </div>
      <div className="credit">
        Designed & developed by{" "}
        <a
          href="https://www.active-bremen.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Active e. V.
        </a>
      </div>
      {socialIcons.map((item, index) => {
        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        )
      })}
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  padding: 20px 30px;
  text-align: center;

  .copyright {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .credit {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;

    a {
      padding: 0;
      font-size: 0.85rem;
      text-decoration: none;
      // background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      background: linear-gradient(45deg, rgb(72, 0, 255), rgb(0, 183, 255));
      background-clip: text;
      -webkit-background-clip: text;
      text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
    }
  }

  a {
    color: rgb(15, 30, 72);
    font-size: 1.75rem;
    padding: 0 0.5rem;

    svg {
      vertical-align: middle;
    }
  }
`

export default Footer
