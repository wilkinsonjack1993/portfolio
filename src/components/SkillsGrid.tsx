import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import SkillCard, { Skill, SkillArea } from "./SkillCard"

const mySkills: Skill[] = [
  {
    title: "React",
    src: "/images/skills/react.png",
    description: "Modern React architecture with Context and Hooks",
    skillArea: SkillArea.FRONTEND,
  },
  {
    title: "Redux",
    src: "/images/skills/redux.svg",
    description: "Global state management library",
    skillArea: SkillArea.FRONTEND,
  },
  {
    title: "Next JS",
    src: "/images/skills/nextjs.png",
    description: "Server Side Rendering",
    skillArea: SkillArea.FRONTEND,
  },
  {
    title: "HTML / CSS / JS",
    src: "/images/skills/html-css-js.png",
    description: "HTML 5, CSS3 and latest Javascript",
    skillArea: SkillArea.FRONTEND,
  },

  {
    title: "Typescript",
    src: "/images/skills/typescript.png",
    description: "Strongly typed javascript",
    skillArea: SkillArea.FRONTEND,
  },

  {
    title: "Sass",
    src: "/images/skills/sass.png",
    description: "Preprocessed CSS",
    skillArea: SkillArea.FRONTEND,
  },

  {
    title: "Jest",
    src: "/images/skills/jest.png",
    description: "Fast, effective unit tests",
    skillArea: SkillArea.TESTING,
  },

  {
    title: "Cypress",
    src: "/images/skills/cypress.png",
    description: "Fast, maintainable and reliable end to end tests",
    skillArea: SkillArea.TESTING,
  },

  {
    title: "GraphQL",
    src: "/images/skills/graphql.png",
    description:
      "Building a robust schema for more performant and flexible queries",
    skillArea: SkillArea.BACKEND,
  },

  {
    title: "Mongo DB",
    src: "/images/skills/mongo.svg",
    description: "No SQL databases",
    skillArea: SkillArea.BACKEND,
  },

  {
    title: "MySQL",
    src: "/images/skills/mysql.svg",
    description: "Relational databases",
    skillArea: SkillArea.BACKEND,
  },

  {
    title: "Nest JS",
    src: "/images/skills/nest.png",
    description: "Progressive framework for Node.js",
    skillArea: SkillArea.BACKEND,
  },

  {
    title: "Node JS",
    src: "/images/skills/nest.png",
    description: "Creating scalable REST API's",
    skillArea: SkillArea.BACKEND,
  },

  {
    title: "Webpack",
    src: "/images/skills/webpack.png",
    description: "Optimised bundling with Babel and tree shaking",
    skillArea: SkillArea.BUILD,
  },

  {
    title: "Jenkins",
    src: "/images/skills/jenkins.png",
    description: "Build scripts for libraries and web applications",
    skillArea: SkillArea.BUILD,
  },

  {
    title: "Rollup",
    src: "/images/skills/rollup.png",
    description: "Optimised bundling of JS libraries",
    skillArea: SkillArea.BUILD,
  },

  {
    title: "Git",
    src: "/images/skills/git.png",
    description: "Version control and codebase management",
    skillArea: SkillArea.OTHER,
  },
  {
    title: "SVN",
    src: "/images/skills/svn.png",
    description: "Version control and codebase management",
    skillArea: SkillArea.OTHER,
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

export default function SkillsGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        {mySkills.map((skill) => (
          <Grid key={skill.title} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <SkillCard skill={skill} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
