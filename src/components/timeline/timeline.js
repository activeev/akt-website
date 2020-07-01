import React from "react"
import styled from "styled-components"

const Timeline = ({ title, paragraph, children, id }) => {
  return (
    <TimelineWrapper id={id}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <div className="timeline">{children}</div>
    </TimelineWrapper>
  )
}

const TimelineWrapper = styled.section`
  background: #fff;
  color: #0f1e48;
  text-align: left;
  padding: 60px 20px;

  @media (min-width: 768px) {
    padding: 80px 30px;
    text-align: center;
  }

  p {
    margin-bottom: 40px;
    #text-shadow: 0px 0px 5px rgba(8, 0, 8, 1);
    opacity: 0.85;
    text-align: justify;
  }

  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    &::after {
      content: "";
      position: absolute;
      width: 6px;
      background-color: rgb(15, 30, 72);
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -3px;

      @media screen and (max-width: 600px) {
        left: 31px;
      }
    }
  }
`

export default Timeline
