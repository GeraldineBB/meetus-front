import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Chip from "@mui/material/Chip";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";
import "./style.scss";

export default function EventListCards() {
  return (
    <Grid container>
      <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{ display: "flex", ml: "3em", position: "relative" }}
          className="eventListCard"
        >
          <CardMedia
            component="img"
            sx={{ maxWidth: "30%" }}
            image={`${process.env.PUBLIC_URL}/images/Sport.jpg`}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography component="div" variant="h5">
                  Match de sport
                  <Chip
                    label="Sport"
                    sx={{
                      backgroundColor: "#788795",
                      color: "white",
                      ml: "1.5em",
                    }}
                    size="small"
                  />
                </Typography>
                <Button
                  className="button__eventlist"
                  sx={{
                    mb: 3,
                    backgroundColor: "#F36B7F",
                  }}
                  variant="contained"
                  size="small"
                >
                  <EditIcon fontSize="small" sx={{ mr: "0.2em" }} />
                  Modifier mon evenement
                </Button>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  variant="subtitle1"
                  color="text.primary"
                  component="div"
                >
                  <CalendarTodayIcon sx={{ mr: "0.2em" }} />
                  10/12/2021{" "}
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ ml: "2em" }}
                  >
                    <LocationOnIcon />
                    Toulouse
                  </Typography>
                </Typography>
              </div>
              <Typography
                variant="body1"
                component="p"
                sx={{ border: "black", maxWidth: "500px", mb: "2em" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                egestas bibendum ipsum, a blandit tellus aliquet eu. Sed ac odio
                non odio posuere auctor. Donec lobortis egestas aliquam. Duis
                venenatis.
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{ position: "relative", bottom: "0px", left: "0px" }}
              >
                10 Participants
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
