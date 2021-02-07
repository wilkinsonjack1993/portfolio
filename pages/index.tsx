import React from "react"
import Container from "@material-ui/core/Container"
import { Header } from "../src/components/Header"
import { GlobalStyle } from "../src/GlobalStyle"

export default function Index() {
  return (
    <>
      <GlobalStyle />
      <Container maxWidth="sm">
        <Header />
        {/* <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
        </Box> */}
      </Container>
    </>
  )
}
