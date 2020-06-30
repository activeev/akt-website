import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const TimelineElement = ({ time, paragraph, children, id, left }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    // Percentage of item in view to trigger animation
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <TimelineElementWrapper id={id}>
        <div className={left ? `${"container"} ${"left"}` : `${"container"} ${"right"}`}>
          <div className="content">
            <h2>{time}</h2>
            <p>{paragraph}</p>
            {children}
          </div>
        </div>
    </TimelineElementWrapper>
  )
}

const TimelineElementWrapper = styled.section`
  /* Container around content */
  .container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
    
    /* The circles on the timeline */
    &::after {
      content: '';
      position: absolute;
      width: 25px;
      height: 25px;
      right: -17px;
      background-color: white;
      border: 4px solid #FF9F55;
      top: 15px;
      border-radius: 50%;
      z-index: 1;
    }
    
    /* place the container to the left */
    &.left {
      left: 0;
      
      /* Add arrows to the left container (pointing right) */
      &::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 30px;
        border: medium solid rgb(15,30,72);
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent rgb(15,30,72);
      }
    }
    
    &.right {
      left: 50%;
      
      &::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: 30px;
        border: medium solid rgb(15,30,72);
        border-width: 10px 10px 10px 0;
        border-color: transparent rgb(15,30,72) transparent transparent;
      }
      
      &::after {
        left: -16px;
      }
    }
  }
  
  .content {
    padding: 20px 30px;
    background-color: rgb(15,30,72);
    position: relative;
    border-radius: 6px;
    color: #fff;
  }
  
  @media screen and (max-width: 600px) {
    .container {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
      
      &.left::before, &.right::before {
        left: 60px;
        border: medium solid rgb(15,30,72);
        border-width: 10px 10px 10px 0;
        border-color: transparent rgb(15,30,72) transparent transparent;
      }
      
      &.left::after, &.right::after {
        left: 15px;
      }
      
      &.right {
        left: 0%;
      }
    }
  }
`

export default TimelineElement
