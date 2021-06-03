import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  socials: {
    
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
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
    paddingTop: "10px"
  },
  navbar: {
    backgroundColor: "#F48FB1",
  },
}));

export default useStyles;
