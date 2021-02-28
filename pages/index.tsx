import React from "react"
import Container from "@material-ui/core/Container"
import { Header } from "../src/components/Header"
import { GlobalStyle } from "../src/GlobalStyle"
import {
  Divider,
  Typography,
  Avatar,
  Card,
  makeStyles,
} from "@material-ui/core"
import Link from "next/link"
import { GetStaticProps } from "next"
import { getSortedServicesData } from "../src/lib/posts"

export interface Post {
  title: string
  id: string
  image: string
  description: string | undefined
}

const useStyles = makeStyles((theme: any) => ({
  avatar: {
    margin: 10,
    marginBottom: 20,
    padding: 8,
    width: theme.spacing(9),
    height: theme.spacing(9),
    alignSelf: "center",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    margin: 20,
    borderRadius: 12,
    cursor: "pointer",
    "&:hover": {
      transform: "translate(2px, -4px)",
    },
  },
  cardContent: {
    width: "100%",
    padding: "5px 20px 5px 20px",
    alignSelf: "center",
  },
  cardList: {
    listStyleType: "none",
    paddingLeft: 0,
    width: "100%",
  },
  date: {
    marginTop: 5,
    float: "right",
  },
  description: {
    paddingTop: 5,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    fontHeight: 8,
    marginTop: 10,
  },
  title: {
    fontWeight: 400,
  },
  container: {
    marginTop: 24,
    paddingBottom: 24,
  },
}))

export default function Index({ allPostsData }: { allPostsData: Post[] }) {
  const classes = useStyles()

  return (
    <>
      <GlobalStyle />
      <Header />

      <Container maxWidth="md" className={classes.container}>
        <ul className={classes.cardList}>
          {allPostsData.map(({ id, title, image, description }) => (
            <li key={id}>
              <Link href={`/services/${id}`}>
                <Card className={classes.card} elevation={3}>
                  <Avatar
                    src={image}
                    className={classes.avatar}
                    sizes="large"
                  />
                  <div className={classes.cardContent}>
                    <Typography variant="h5" className={classes.title}>
                      {title}
                    </Typography>

                    {description && (
                      <>
                        <Divider />
                        <Typography
                          variant="body2"
                          className={classes.description}
                        >
                          {description}
                        </Typography>
                      </>
                    )}
                  </div>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedServicesData()
  return {
    props: {
      allPostsData,
    },
  }
}
