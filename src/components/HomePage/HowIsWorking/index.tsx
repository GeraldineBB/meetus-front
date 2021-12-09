import React from "react";
import CardPresentation from "./CardPresentation";
import "./style.scss";
import { NavLink } from "react-router-dom";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";

const HowIsWorking = () => {
  return (
    <div>
      <div className="howItWork">
        <CardPresentation />
      </div>

      <div>
        <Grid
          container
          direction="row-reverse"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid>
          <NavLink to="/create" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                backgroundColor: "#F36B7F",
                "&:hover": { backgroundColor: "#F8CF61" },
              }}
              className="buttom"
              variant="contained"
            >
              Créer un évènement
            </Button>
            </NavLink>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HowIsWorking;
