import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const TextBlock = ({ title, paragraph, children, id }) => {
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
    <TextBlockWrapper id={id}>
      <div className="content-container">
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
          <h2>{title}</h2>
          <p>{paragraph}</p>
          {children}
        </motion.div>
      </div>
    </TextBlockWrapper>
  )
}

const TextBlockWrapper = styled.section`
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
    //text-align: justify;
  }
  
  table {
    margin-bottom: 40px;
    
    display: grid;
    align-items: center;
    grid-template-columns: auto;
  
    @media (min-width: 768px) {
      grid-template-columns: auto auto;
      grid-column-gap: 3em;
      margin: 0 auto 40px;
      
      tr {
        grid-column-start: 2;
      }
      
      th {
        text-align: right;
      }
    }
    td {
      padding: 0 0.5em;
    }
    
  }
`

export default TextBlock
