import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card1: {
    width: "fit-content",
    display: "flex",
    margin: "auto",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "5px",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
  img1: {
    borderRadius: "5px 5px 0 0",
    margin: "0 30px",
  },
  imageContainer: {
    flex: "30%",
  },
  dataContainer: {
    flex: "70%",
  },
});

export default useStyles;
