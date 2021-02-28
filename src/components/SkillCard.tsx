import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"
import theme from "../theme"

export enum SkillArea {
  FRONTEND,
  BACKEND,
  BUILD,
  TESTING,
  OTHER,
}

export interface Skill {
  title: string
  src: string
  description?: string
  skillArea: SkillArea
}

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    // margin: 8,
    cursor: "default",
    "&:hover": {
      transform: "translate(-2px, -2px)",
    },
  },
  action: {
    cursor: "default",
  },
  media: {
    height: 200,
    margin: 8,
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
})

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const SkillAreaDiv = styled.div<{ skillArea: SkillArea }>`
  margin: 8px;
  margin-left: auto;
  margin-right: 8px;
  width: fit-content;
  align-self: right;
  padding: 6px 10px;
  border-radius: 4px;
  font-family: "Roboto";
  font-weight: 500;
  letter-spacing: 0.7px;

  ${(props) => {
    switch (props.skillArea) {
      case SkillArea.BACKEND:
        return `background: ${theme.palette.secondary.light};
        color: ${theme.palette.secondary.contrastText};`
      case SkillArea.FRONTEND:
        return `background: ${theme.palette.info.light};
        color: ${theme.palette.info.contrastText};`
      case SkillArea.OTHER:
        return `background: ${theme.palette.primary.light};
        color: ${theme.palette.primary.contrastText};`
      case SkillArea.TESTING:
        return `background: ${theme.palette.success.light};
        color: ${theme.palette.success.contrastText};`
      case SkillArea.BUILD:
        return `background: ${theme.palette.warning.light};
        color: ${theme.palette.warning.contrastText};`
    }
  }}
`

export default function SkillCard(props: { skill: Skill }) {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={5}>
      <CardActionArea className={classes.action}>
        <SkillAreaDiv skillArea={props.skill.skillArea}>
          {capitalizeFirstLetter(SkillArea[props.skill.skillArea])}
        </SkillAreaDiv>
        <CardMedia
          className={classes.media}
          image={props.skill.src}
          title={props.skill.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.skill.title}
          </Typography>
          {props.skill.description && (
            <Typography variant="body2" color="textSecondary" component="p">
              {props.skill.description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
