import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    background:
      "linear-gradient(180deg, rgba(236,64,122,.4) 60%, rgba(251,251,251,.4) 100%);",
    padding: theme.spacing(8, 0, 6),
  },
  landingTitle: {
    color: "white",
    textShadow: "2px 2px 2px #F48FB1",
    // textShadow: "-1px 0 #F48FB1, 0 1px #F48FB1, 1px 0 #F48FB1, 0 -1px #F48FB1",
  },
  landingText: {
    color: "white",
    // textShadow: "-1px 0 #F48FB1, 0 1px #F48FB1, 1px 0 #F48FB1, 0 -1px #F48FB1",
  },
  socials: {
    marginLeft: "6px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardContainer: {
    display: "flex",
  },
  cardGrid: {
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#F48FB1",
    paddingBottom: "20px",
    paddingTop: "10px",
  },
  navbar: {
    backgroundColor: "#F48FB1",
    height: "70px",
  },
}));

export default useStyles;
