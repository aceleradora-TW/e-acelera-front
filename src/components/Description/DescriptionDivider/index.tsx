import React from "react"
import { Divider, Box, Typography, useMediaQuery, Link } from "@mui/material"
import { theme } from "@/app/config/themes"
import ReactMarkdown from "react-markdown"
import { DescriptionFull } from "../DescriptionFull"

interface DescriptionDividerProps {
  text: string
}

const boxStyle: object = {
  width: "49%"
}

export const DescriptionDivider: React.FC<DescriptionDividerProps> = ({ text }) => {

  function textDivider(text: string): [string, string] {
    let breakPoint = Math.floor((2 * text.length) / 3)

    const preferredBreaks = ['.', ',', '\n', ' ']

    for (const breakChar of preferredBreaks) {
      let tempPoint = breakPoint

      while (tempPoint > 0 && text[tempPoint] !== breakChar) {
        tempPoint--
      }

      if (tempPoint > 0) {
        breakPoint = tempPoint + 1
        break
      }
    }

    const firstPart = text.slice(0, breakPoint).trim()
    const secondPart = text.slice(breakPoint).trim()

    return [firstPart, secondPart]
  }

  const components = {
    p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography variant="body1" sx={{ whiteSpace: "pre-wrap", marginTop: 2 }} {...props} />
    ),
    a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
      <Link
        variant="caption" target="_blank" rel="noreferrer"
        sx={{ color: theme.palette.textColor?.light, textDecorationColor: theme.palette.textColor?.light, display: "block" }}
        {...props} />
    )
  }

  const typographyBreakLine = {
    p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography variant="body1" sx={{ marginBottom: 3 }} {...props} />
    ),
  }

  const textDividerArray: string[] = textDivider(text)
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      {isSmallScreen ? (
        <DescriptionFull text={text} />
      ) : (
        <Box sx={{ ...theme.customStyles.description }}>
          <Box sx={boxStyle}>
            <ReactMarkdown components={components}>
              {textDividerArray[0]}
            </ReactMarkdown>
          </Box>

          <Divider orientation="vertical" flexItem color="black" sx={{ marginTop: 2 }} />

          <Box sx={boxStyle}>
            <ReactMarkdown components={components}>
              {textDividerArray[1]}
            </ReactMarkdown>
          </Box>
        </Box>
      )}
    </>
  )
}
