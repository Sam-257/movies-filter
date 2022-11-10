import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
});

export default useStyles;
