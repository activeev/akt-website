import React from "react"
import styled from "styled-components"

const Package = ({ title, children, active }) => {
  return (
    <PackageWrapper className={active ? "active" : "not-active"}>
      <div className="content">
        <h2>{title}</h2>
        {children}
      </div>
    </PackageWrapper>
  )
}

const PackageWrapper = styled.article`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 350px;
  margin-bottom: 3rem;

  @media (min-width: 992px) {
    width: calc(100% / 3);
    margin-bottom: 0;
    margin: 0 1rem;
  }

  .content {
    background: #0f1e48;
    color: #fff;
    text-align: center;
    padding: 1.5rem;
    border-radius: 4px;
    box-shadow: 0px 0px 22px 7px rgba(0, 0, 0, 0.25);


    table {
      padding-left: 0;
      margin: 2.5rem 0;
      
      tr > td {
        line-height: 26px;
        padding-left: 0.5rem;
      }
      tr > .linethrough {
        text-decoration: line-through;
        opacity: 0.4;
      }
    }
  }

  &.not-active {
    button {
      background: transparent;
      border: 1px solid rgb(0,183,255);
    }
  }

  &.active {
    order: 1;
    z-index: 3;

    @media (min-width: 992px) {
      order: 0;
      transform: scale(1.25);
    }

    .content {
      filter: brightness(1.3);
    }

    &::before {
      content: "";
      position: absolute;
      top: -5px;
      right: 0px;
      bottom: -5px;
      left: 0px;
      background: linear-gradient(to right, rgb(0,183,255), rgb(72,0,255));
      z-index: -1;
      transform: skew(3deg, 3deg);
      border-radius: 4px;
    }
  }
`

export default Package
