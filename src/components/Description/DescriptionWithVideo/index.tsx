import React from "react"
import { Grid } from "@mui/material"
import { CardVideo } from "@/components/CardVideo"
import { DescriptionFull } from "../DescriptionFull"

interface DescriptionWithVideoProps {
  textDescription: string
  textVideo: string
  title: string
  videoLink: string
  references: string
  videoId: string
}

const isValidURL = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch (_) {
    return false
  }
}

export const DescriptionWithVideo: React.FC<DescriptionWithVideoProps> = ({
  textDescription,
  textVideo,
  title,
  videoLink,
  references,
  videoId,
}) => {

const isLinkValid = isValidURL(videoLink)

  return (
    <>
      {!isLinkValid ? (
        <DescriptionFull text={textDescription} />
      ) : (
        <Grid container columnSpacing={3} rowSpacing={3} alignItems="stretch">
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <DescriptionFull text={textDescription} />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <CardVideo
              text={textVideo}
              title={title}
              videoLink={videoLink}
              references={references}
              videoId={videoId}
            />
          </Grid>
        </Grid>
      )}
    </>
  )
}
