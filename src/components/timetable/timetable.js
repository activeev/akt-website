import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import Button from "../Button/button"
import { Link } from "react-scroll"

const TimeTable = ({ title, paragraph, children, id, to, cta, columns }) => {
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
    <TimeTableWrapper id={id} columns={columns}>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 25 },
        }}
        transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
      >
        <div className="content-container">
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </div>
        <div className="timetable">{children}</div>
        {to !== undefined && cta !== undefined ? (
          <Link to={to} smooth={true} duration={500}>
            <Button cta={cta} />
          </Link>
        ) : null}
      </motion.div>
    </TimeTableWrapper>
  )
}

const TimeTableWrapper = styled.section`
  background: #fff;
  color: #0f1e48;
  text-align: left;
  padding: 60px 20px;

  @media (min-width: 768px) {
    padding: 80px 30px;
    text-align: center;
  }

  .timetable {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    max-width: 750px;

    @media (min-width: 1080px) {
      max-width: 900px;
    }

    & > * {
      flex-grow: 1;
      //flex-shrink: 0;
      flex-basis: 0;
      margin: 0 10px;
    }

    @media (min-width: 768px) {
      margin: 0 auto 40px;
      flex-direction: row;
    }

    .timetable-day {
      display: grid;
      grid-template-columns: ${(props) => " auto".repeat(props.columns)};
      grid-column-gap: 10px;
      align-content: start;
      justify-content: start;
      text-align: left;

      @media (min-width: 768px) {
        justify-content: center;
      }

      h3,
      h4 {
        grid-column: 1 / ${(props) => props.columns + 1};
      }
    }
  }
`

export default TimeTable
