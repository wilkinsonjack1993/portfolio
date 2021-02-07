import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import { Header } from "../src/components/Header"
import SkillsGrid from "../src/components/SkillsGrid"
import { GlobalStyle } from "../src/GlobalStyle"

export default function Index() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <SkillsGrid />
        <Box></Box>
      </Container>
    </>
  )
}
