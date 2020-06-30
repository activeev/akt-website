import React from "react"
import styled from "styled-components"

const Button = props => {
  return (
    <>
      {props.anchor ? (
        <ButtonWrapper className="anchor">
          {props.cta}
        </ButtonWrapper>
      ) : (
        <ButtonWrapper type={props.type}>{props.cta}</ButtonWrapper>
      )}
    </>
  )
}

const ButtonWrapper = styled.button`
  position: relative;
  display: inline-block;
  padding: 0 20px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 0.85rem;
  letter-spacing: 0.2rem;
  //text-transform: uppercase;
  text-transform: capitalize;
  text-decoration: none;
  box-sizing: border-box;
  //background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  //background: linear-gradient(90deg, rgb(223,157,26), rgb(140,164,232));
  //background: linear-gradient(90deg, #8cd1e8, #a38ce8);
  background: linear-gradient(90deg, rgb(0,183,255), rgb(72,0,255));
  background-size: 400%;
  border-radius: 30px;
  border: none;
  z-index: 1;

  &:hover {
    cursor: pointer;
    //animation: animate 8s linear infinite;

    &::before {
      content: "";
      filter: blur(20px);
      opacity: 1;
      animation: animate 8s linear infinite;
      animation: animate 8s linear infinite;
    }
  }
  
  &:focus {
    outline: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    //background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    //background: linear-gradient(90deg, rgb(223,157,26), rgb(140,164,232));
    //background: linear-gradient(90deg, #8cd1e8, #a38ce8);
    background: linear-gradient(90deg, rgb(0,183,255), rgb(72,0,255));
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
    transition: 0.5s;
  }

  @keyframes animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }
`

export default Button
