import "./style.scss";
import Button from "@mui/material/Button";
import { darken } from "@mui/system";

function EventHeaderPage() {
  return (
    <div className="eventHeaderPage">
      <div className="eventList__header">
        <h1>Liste des evènements :</h1>
        <div className="eventList__select">
          <div style={{display: 'flex'}}>
            <h2
              onClick={() => console.log("En cours")}
              style={{ marginRight: "3em" }}
            >
              En cours
            </h2>
            <h2 onClick={() => console.log("Archivé")}>Archivé</h2>
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
      </div>
    </div>
  );
}

export default EventHeaderPage;
