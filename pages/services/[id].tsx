import Head from "next/head"
import {
  Avatar,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core"
import { getAllServiceIds, getserviceData } from "../../src/lib/posts"
import { GlobalStyle } from "../../src/GlobalStyle"
import styled from "styled-components"
import { Post as PostProps } from "../index"
import { Header } from "../../src/components/Header"

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingBottom: 36,
  },
  title: {
    alignSelf: "center",
    marginLeft: 8,
  },
  paper: {
    padding: "16px 24px",
    borderRadius: 16,
  },
  avatar: {
    margin: 10,
    marginBottom: 20,
    padding: 8,
    width: theme.spacing(9),
    height: theme.spacing(9),
    alignSelf: "center",
  },
}))

const Article = styled.article`
  img[src*="#md-image"] {
    max-width: 400px;
    margin: 25px auto;
    display: block;
    border-radius: 8px;
  }

  font-size: 1rem;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.5rem;
`

export default function Post({
  postData,
}: {
  postData: PostProps & { contentHtml: any }
}) {
  const classes = useStyles()
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Header />

      <Container maxWidth="md" className={classes.container}>
        <Paper className={classes.paper}>
          <Article>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Avatar
                src={postData.image}
                className={classes.avatar}
                sizes="large"
              />
              <Typography className={classes.title} variant="h4">
                {postData.title}
              </Typography>
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </Article>
        </Paper>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllServiceIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const postData = await getserviceData(params.id)
  return {
    props: {
      postData,
    },
  }
}
