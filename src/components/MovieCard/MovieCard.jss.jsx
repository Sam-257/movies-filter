import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    width: "300px",
    borderRadius: "5px",
    margin: "20px 25px",
    "&:hover": {
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
    },
  },

  container: {
    padding: "2px 16px",
  },

  img: {
    borderRadius: "5px 5px 0 0",
  },
});

export default useStyles;
