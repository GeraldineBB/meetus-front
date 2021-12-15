import "./style.scss";
import Button from "@mui/material/Button";
import { darken } from "@mui/system";

import Stack from "@mui/material/Stack";


function EventHeaderPage({
  handleArchived,
  handleInProgress,
  inProgress,
  archived,
}) {
  const underlineInProgress = inProgress ? "underlined" : "";
  const underlineArchived = archived ? "underlined" : "";



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
            <h2 onClick={handleArchived} className={underlineArchived}>
              Archivé
            </h2>
          </div>
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
        </div>

        <h3>Evènements suggérés pour vous</h3>
        <Stack direction="row" spacing={1}>
        </Stack>
      </div>
    </div>
  );
}

export default EventHeaderPage;
