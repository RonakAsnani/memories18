import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "0.5rem",
    display: "flex",
    padding: "5px",
  },
  pagination: {
    borderRadius: 4,
    marginTop: "0.5rem",
    padding: "5px",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
}));
