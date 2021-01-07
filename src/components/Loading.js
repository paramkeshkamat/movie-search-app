import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <div className="Loading">
      <div className={classes.root} style={{ transform: "scale(1.5)" }}>
        <CircularProgress style={{ color: "#fff" }} />
      </div>
    </div>
  );
};

export default Loading;
