import makeStyles from "@material-ui/styles/makeStyles"
import CloseIcon from "@material-ui/icons/Close"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import IconButton from "@material-ui/core/IconButton"
import Modal from "@material-ui/core/Modal"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import Typography from "@material-ui/core/Typography"
import { Boop } from "./Boop"

interface ContactProps {
  onClose: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
  backdrop: {
    backgroundColor: `${theme.palette.primary.dark} !important`,
    opacity: 0.9,
  },
  paper: {
    height: "100vh",
  },
  contactDetails: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: theme.palette.primary.contrastText,
    maxWidth: "100%",
  },
  text: {
    fontWeight: 400,
    letterSpacing: "3px",
  },
  textEmail: {
    fontWeight: 400,
    letterSpacing: "3px",
    wordBreak: "break-word",
  },
  closeButton: {
    top: 40,
    right: 40,
    float: "right",
  },
  closeIcon: {
    fill: theme.palette.primary.contrastText,
  },
  linkedInButton: {
    margin: "auto",
    backgroundColor: "white",
    padding: 3,

    "&:hover": {
      backgroundColor: "white !important",
    },
  },
  linkedInIcon: {
    fill: "#0072b1",
  },
}))

export const Contact = (props: ContactProps) => {
  const styles = useStyles()
  return (
    <Modal
      onClose={props.onClose}
      open={true}
      BackdropProps={{
        className: styles.backdrop,
      }}
    >
      <>
        <IconButton
          className={styles.closeButton}
          aria-label="close"
          onClick={props.onClose}
        >
          <CloseIcon fontSize="large" className={styles.closeIcon} />
        </IconButton>
        <div className={styles.paper}>
          <div className={styles.contactDetails}>
            <Typography
              className={styles.text}
              variant="h2"
              component="h1"
              gutterBottom
            >
              Jack Wilkinson
            </Typography>

            <Typography
              className={styles.textEmail}
              variant="h5"
              component="h5"
              gutterBottom
            >
              wilkinsonjack1993@gmail.com
            </Typography>

            <Typography
              className={styles.text}
              variant="h5"
              component="h5"
              gutterBottom
            >
              +41 78 212 96 69
            </Typography>
            <br />
            <Boop rotation={70} scale={1.2}>
              <IconButton
                className={styles.linkedInButton}
                aria-label="close"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/jack-wilkinson-ab484ba8/"
                  )
                }
              >
                <LinkedInIcon
                  fontSize="large"
                  className={styles.linkedInIcon}
                />
              </IconButton>
            </Boop>
          </div>
        </div>
      </>
    </Modal>
  )
}
