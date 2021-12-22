const onlineDisplay = eventInfoPage.event.isOnline === true;

  if(onlineDisplay)
{<Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Evènement en ligne</Button>
    </Box>
}else{
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="eventContent__detail__map"
                    style={{
                      width: "300px",
                      height: "200px",
                      position: "relative",
                    }}
                  >
                    <GoogleMaps
                      currentLng={eventInfoPage.event.longitude}
                      currentLat={eventInfoPage.event.latitude}
                    />
                  </div>
                </Box>
};



const onlineDisplay = ;

{(()=> {if(eventInfoPage.event.isOnline === true)
{<Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Evènement en ligne</Button>
    </Box>
}else{
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="eventContent__detail__map"
                    style={{
                      width: "300px",
                      height: "200px",
                      position: "relative",
                    }}
                  >
                    <GoogleMaps
                      currentLng={eventInfoPage.event.longitude}
                      currentLat={eventInfoPage.event.latitude}
                    />
                  </div>
                </Box>
};

})}

if(eventInfoPage.event.isOnline === true)
{<Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Evènement en ligne</Button>
    </Box>
}else{
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="eventContent__detail__map"
                    style={{
                      width: "300px",
                      height: "200px",
                      position: "relative",
                    }}
                  >
                    <GoogleMaps
                      currentLng={eventInfoPage.event.longitude}
                      currentLat={eventInfoPage.event.latitude}
                    />
                  </div>
                </Box>
};