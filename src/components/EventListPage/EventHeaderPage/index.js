import "./style.scss";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import { darken } from "@mui/system";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  LOAD_SELECT_CATEGORIES_EVENT_LIST,
  SEARCH_BAR_EVENT_LIST,
} from "../../../actions/events";
import SelectCategories from "./Select";

function EventHeaderPage({
  handleArchived,
  handleInProgress,
  inProgress,
  archived,
}) {
  const underlineInProgress = inProgress ? "underlined" : "";
  const underlineArchived = archived ? "underlined" : "";
  const dispatch = useDispatch();
  const logged = useSelector(state => state.user.logged)

  const handleSearch = (event) => {
    event.preventDefault();
    const value = event.target.value;
    dispatch({ type: SEARCH_BAR_EVENT_LIST, value });
  };

  useEffect(() => {
    dispatch({ type: LOAD_SELECT_CATEGORIES_EVENT_LIST });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            { logged &&
              <h2 onClick={handleArchived} className={underlineArchived}>
                Passés
              </h2>
            }
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
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Input onChange={handleSearch} placeholder="Rechercher" />
        </Box>
        <SelectCategories />
        <h3>Evènements suggérés pour vous</h3>
        <Stack direction="row" spacing={1}></Stack>
      </div>
    </div>
  );
}

export default EventHeaderPage;
