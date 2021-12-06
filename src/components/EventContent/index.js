import './style.scss';

// import FaceIcon from '@mui/icons-material/Face';

// import Image from "../../../../assets/images/fire-event.jpg";
import Button from "@mui/material/Button";


const EventContent = () => (
  <div className="eventContent">
    <div className="eventContent__info">

        <div className="eventContent__info__header">
            <p className="eventContent__info__header--date">
                Mardi 10 Décembre
            </p>
            <p className="eventContent__info__header--title">
                Match de volley
            </p>
            <p className="eventContent__info__header--author">
                Crée par Catherine
            </p>
        </div>

        <div className="eventContent__info__picture">
            <img src={`${process.env.PUBLIC_URL}/images/concert-event.jpg`}/>
        </div>

        <div className="eventContent__info__description">
            <p className="eventContent__info__description--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas bibendum ipsum, a blandit tellus aliquet eu. Sed ac odio non odio posuere auctor. Donec lobortis egestas aliquam. Duis venenatis.            
            </p>
        </div>

    </div>


    <div className="eventContent__detail">
        <div className="eventContent__detail__map">
            <img src={`${process.env.PUBLIC_URL}/illustrations/eventPage.svg`}/>
        </div>
        <p className="eventContent__detail__date">
            10/12/2021
        </p>
        <p className="eventContent__detail__hour">
            16h
        </p>
        <p className="eventContent__detail__adress">
            60 rue lafour
        </p>
        <p className="eventContent__detail__zipcode">
            75 000 Paris
        </p>

        <Button
        size="small"
        variant="contained"
        className="card__button"
        sx={{
          width: "60%",
          backgroundColor: "#F36B7F",
          "&:hover": { backgroundColor: "#F8CF61" },
        }}
      >
       Rejoindre
      </Button>

        <p className="eventContent__detail__membersCount">
           16 Participants
        </p>




    </div>

    <div className="eventcontent_similar">

    </div>
  </div>
);

export default EventContent;
