<div className="howItWork">
        <div className="card">
            <div className="eventWorking__card">
                {/* <div className="eventWorking__card__single">
                <div className="eventWorking__single__image">
                    <img className="eventWorking__single__image" src={eventPresentation} alt="Fonctionnement-presentation" />
                </div>
                <Link to="/TODOTOUTLESEVENTS">Trouver un évènement</Link>
                <p className="eventWorking__card__single__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sunt voluptatum quaerat culpa ab mollitia magnam nostrum! Recusandae accusantium nulla modi distinctio atque praesentium deleniti ullam voluptate, autem, dolorum quis!
                </p>
            </div> */}
                {/* 
            <div className="eventWorking__card__single">
                <div className="eventWorking__image">
                    <img src={eventPresentation} alt="Fonctionnement-presentation" />
                </div>
                <Link to="/TODOCREEREVENT">Organiser un évènement</Link>
                <p className ="eventWorking__card__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sunt voluptatum quaerat culpa ab mollitia magnam nostrum! Recusandae accusantium nulla modi distinctio atque praesentium deleniti ullam voluptate, autem, dolorum quis!
                </p>
            </div> */}
            </div>
            <Card sx={{ maxWidth: 300 }} className="card__single">
                <CardMedia
                    component="img"
                    height="140"
                    image={eventPresentation}
                    alt="aller vien, ont est bien"
                />
                <CardActions>
                    <Button >

                        <Link to="/TODOTOUTLESEVENTS">Trouver un évènement</Link></Button>

                </CardActions>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">


                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                
            </Card>
            <Card sx={{ maxWidth: 345 }} className="card__single">
                <CardMedia
                    component="img"
                    height="140"
                    image={eventPresentation}
                    alt="creer un evenement s'il te plait"
                />
                <CardActions>
                    <Button >
                        <Link to="/TODOCREEREVENT">Organiser un évènement</Link></Button>

                </CardActions>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">


                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>

            </Card>

            
        </div>
        <Button className='eventWorking__presentation__button' variant="contained">Créer un évènement</Button>
        </div>