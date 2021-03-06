import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { Header } from "../src/components/Header"
import Divider from "@material-ui/core/Divider"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/styles"
import Image from "next/image"
import { GlobalStyle } from "../src/GlobalStyle"

const useStyles = makeStyles(() => ({
  divider: {
    marginBottom: 12,
  },

  img: {
    borderRadius: 20,
  },
  imgWrapper: {
    float: "right",
    margin: 15,
  },
  text: {
    marginBottom: "1rem",
  },
  paper: {
    borderRadius: 16,
  },
}))

export default function Index() {
  const styles = useStyles()

  const keyInterests = [
    "Server side rendering (NextJS)",
    "GraphQL",
    "Performance fixes (bundling, code-splitting and data fetching)",
    "Beautiful animations and user experience",
  ]

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container maxWidth="md">
        <Paper elevation={5} className={styles.paper}>
          <Container maxWidth="md">
            <Box my={2} p={4}>
              <Typography variant="h2" component="h1">
                About Me
              </Typography>
              <Divider className={styles.divider} />
              <div className={styles.imgWrapper}>
                <Image
                  src="/images/Jack.jpeg"
                  alt="Jack Wilkinson"
                  layout={"intrinsic"}
                  width={350}
                  height={350}
                  className={styles.img}
                />
              </div>
              <Typography
                className={styles.text}
                variant="body1"
                component="p"
                gutterBottom
              >
                Hello and welcome to my website!
              </Typography>

              <Typography
                className={styles.text}
                variant="body1"
                component="p"
                gutterBottom
              >
                My name is Jack and I am a Web Developer and Technical
                Consultant currently living in Basel, Switzerland.
              </Typography>

              <Typography
                className={styles.text}
                variant="body1"
                component="p"
                gutterBottom
              >
                I have worked on a variety of projects and with a number of
                clients to implement solutions on a wide range of concepts,
                project sizes, time scales and budgets.
              </Typography>

              <Typography variant="body1" component="p">
                I really enjoy the web development ecosystem and community and
                love getting involved in it. Some of my key interests right now
                are:
              </Typography>
              <ul>
                {keyInterests.map((interest, i) => (
                  <li key={i}>
                    <Typography variant="body1" component="p">
                      {interest}
                    </Typography>
                  </li>
                ))}
              </ul>

              <Typography className={styles.text} variant="body1" component="p">
                I enjoy going to and giving talks at web development meetups and
                meeting people from across the Tech community. So even if you
                don't have a project but just want to discuss and idea or bounce
                ideas of each other, please do not hesitate to reach out.
              </Typography>
            </Box>
          </Container>
        </Paper>
      </Container>
    </>
  )
}
