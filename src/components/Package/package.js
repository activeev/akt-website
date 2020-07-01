import React, { useState } from "react"
import styled from "styled-components"
import Button from "../Button/button"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { MdUnfoldMore, MdUnfoldLess } from "react-icons/md"

const Accordion = ({ i, expanded, children }) => {
  const isOpen = i === expanded

  return (
    <>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className="accordion"
            variants={{
              open: { opacity: 1, height: "100%" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const Package = ({ title, active, description, cta, linkTo, children }) => {
  const [expanded, setExpanded] = useState(0)

  return (
    <PackageWrapper className={active ? "active" : "not-active"}>
      <div className="content">
        <h2>{title}</h2>
        <div className="accordion-container">
          <Accordion i={0} expanded={expanded}>
            <div>{children}</div>
          </Accordion>
          <Accordion i={1} expanded={expanded}>
            <p>{description}</p>
          </Accordion>
          <p onClick={() => setExpanded(expanded === 0 ? 1 : 0)}>
            {expanded === 0 ? <MdUnfoldMore color="white"/> : <MdUnfoldLess color="white"/>}
          </p>
        </div>
        <Link to={linkTo} smooth={true} duration={500}>
          <Button cta={cta} />
        </Link>
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

      tr > td {
        line-height: 26px;
        padding-left: 0.5rem;
      }
      tr > .linethrough {
        text-decoration: line-through;
        opacity: 0.4;
      }
      
      tfoot > tr:first-child > td {
        padding-top: 1em;
        padding-bottom: 0.2em;
      }
    }
  }

  .accordion {
    overflow-y: hidden;
  }
  .accordion-container {
    margin: 2.5rem 0;
  }

  &.not-active {
    button {
      background: transparent;
      border: 1px solid rgb(0, 183, 255);
    }
  }

  &.active {
    order: 1;
    z-index: 3;

    @media (min-width: 992px) {
      order: 0;
      /*transform: scale(1.25);*/
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
      background: linear-gradient(to right, rgb(0, 183, 255), rgb(72, 0, 255));
      z-index: -1;
      transform: skew(3deg, 3deg);
      border-radius: 4px;
    }
  }
`

export default Package
