import React from "react";
import { Box, Divider, useMediaQuery } from "@mui/material";
import { theme } from "@/app/config/themes";
import { DescriptionFull } from "../DescriptionFull";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import components from "./components";
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


  const textDividerArray: string[] = textDivider(text)
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      {isSmallScreen ? (
        <DescriptionFull text={text} />
      ) : (
        <Box sx={{ ...theme.customStyles.description }}>
          <Box sx={boxStyle}>
            <MarkdownRenderer components={components}>
              {textDividerArray[0]}
            </MarkdownRenderer>
          </Box>

          <Divider color="black" flexItem orientation="vertical" sx={{ marginTop: 2 }} />

          <Box sx={boxStyle}>
            <MarkdownRenderer components={components}>
              {textDividerArray[1]}
            </MarkdownRenderer>
          </Box>
        </Box>
      )}
    </>
  )
}
