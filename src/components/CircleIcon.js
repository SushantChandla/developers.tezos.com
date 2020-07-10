import React from "react"
import styled from "@emotion/styled"
import { palette } from "../utils/variables"

const CircleIcon = ({ href, label, children }) => {
  const hrefProps = href && {
    as: "a",
    href,
    target: "_blank",
    rel: "noopener noreferrer",
  }

  return (
    <CircleIconContainer {...hrefProps} aria-label={label}>
      {children}
    </CircleIconContainer>
  )
}

const CircleIconContainer = styled.div`
  background-color: ${palette.blue};
  border-radius: 100px;
  display: flex;
  flex: 0 0 40px;
  height: 40px;
  position: relative;
  vertical-align: middle;
  width: 40px;
  align-items: center;

  & > * {
    left: 0;
    position: absolute;
    width: 100%;
  }

  span {
    text-align: center;
    color: ${palette.white};
  }

  img,
  svg {
    height: 100%;
    top: 0;
  }

  svg {
    fill: white;
  }

  svg path {
    fill: white;
  }

  &[href] {
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
`

export default CircleIcon
