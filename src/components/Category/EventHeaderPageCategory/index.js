import "./style.scss";
import Button from "@mui/material/Button";
import { darken } from "@mui/system";

import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";

function EventHeaderPage({
  handleArchived,
  handleInProgress,
  inProgress,
  archived,
}) {
  const underlineInProgress = inProgress ? "underlined" : "";

  return (
    <div className="eventHeaderPage">
      <div className="eventList__header">
        <h1>Liste des évènements :</h1>
        <div className="eventList__select">
          <div style={{ display: "flex" }}>
            <h2
              onClick={handleInProgress}
              style={{ marginRight: "3em" }}
              className={underlineInProgress}
            >
              A venir
            </h2>
          </div>
          <NavLink to="/create" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                mb: 3,
                backgroundColor: "#F36B7F",
                "&:hover": { backgroundColor: darken("#F36B7F", "20%") },
              }}
              variant="contained"
            >
              Créer un évènement
            </Button>
          </NavLink>
        </div>

        <h3>Evènements de la catégorie choisie</h3>
        <Stack direction="row" spacing={1}></Stack>
      </div>
    </div>
  );
}

export default EventHeaderPage;
