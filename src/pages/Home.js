import { Grid, Button, Typography } from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiQrcode, mdiQrcodeScan } from "@mdi/js";
import { Link } from "react-router-dom";
import { useState } from "react";
import ImageList from "@material-ui/core/ImageList";
import { makeStyles } from "@material-ui/core/styles";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

function Home() {
  const classes = useStyles();
  const [place, setPlace] = useState("");
  const itemData = [
    {
      img: "https://www.euttaranchal.com/tourism/photos/yamunotri-739434.jpg",
      title: " Yamunotri",
      desc:
        "Yamunotri, also Jamnotri, is the source of the Yamuna River and the seat of the Goddess Yamuna in Hinduism. It is situated at an altitude of 3,293 metres (10,804 ft) in the Garhwal Himalayas and located approximately 150 kilometers (93 mi) North of Uttarkashi, the headquarters of the Uttarkashi district in the Garhwal Division of Uttarakhand, India. It is one of the four sites in India's Chhota Char Dham pilgrimage. The sacred shrine of Yamunotri, source of the river Yamuna, is the westernmost shrine in the Garhwal Himalayas, perched atop a flank of Bandar Poonch Parvat. The chief attraction at Yamunotri is the temple devoted to the Goddess Yamuna and the holy thermal springs at Janki Chatti (7 km. Away).",
    },
    {
      img: "https://www.tourmyindia.com/chardham/images/gangotri-dham1.jpg",
      title: "Gangotri",
      desc:
        "Gangotri is a town and a Nagar Panchayat (municipality) in Uttarkashi district in the state of Uttarakhand, India. It is 99 km from Uttarkashi, the main district headquarter. It is a Hindu pilgrim town on the banks of the river Bhagirathi and origin of river Ganges. The town is located on the Greater Himalayan Range, at a height of 3,100 metres (10,200 ft). According to popular Hindu legend, it was here that Goddess Ganga descended when Lord Shiva released the mighty river from the locks of his hair.",
    },
    {
      img:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Kedarnath",
      desc:
        "Kedarnath is a town in Rudraprayag district in the state of Uttarakhand in India and has gained importance because of the Kedarnath Temple. It is approximately 86 kilometres from Rudraprayag, the district headquarter. It is a Nagar panchayat in the Rudraprayag district. Kedarnath is the most remote of the four Chota Char Dham pilgrimage sites. It is located in the Himalayas, about 3,583 m (11,755 ft) above sea level near the Chorabari Glacier, which is the source of the Mandakini river. The town is flanked by snow-capped peaks, most prominently the Kedarnath Mountain. The nearest road head is at Gaurikund about 16 km away. The town suffered extensive destruction during June 2013 from the Flash Floods caused by torrential rains in Uttarakhand state.",
    },
    {
      img:
        "https://images.unsplash.com/photo-1601821139314-66a4d14cfc00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=588&q=80",
      title: "Badrinath",
      desc:
        "Badrinath is a town and nagar panchayat in Chamoli district in the state of Uttarakhand, India. A Hindu holy place, it is one of the four sites in India's Char Dham pilgrimage and is also part of India's Chota Char Dham pilgrimage circuit. It gets its name from the Badrinath Temple.",
    },
  ];

  // const handleClick = (place) => {
  //   setPlace(place);
  //   console.log(place);
  // };

  return (
    <div>
      <Typography style={{ margin: 30 }} variant="h2">
        Char Dham - QR Code Generator
      </Typography>

      <div className={classes.root}>
        <ImageList rowHeight={180} className={classes.imageList}>
          <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">
              Select the Dham to know more
            </ListSubheader>
          </ImageListItem>

          <ImageListItem key="https://www.euttaranchal.com/tourism/photos/yamunotri-739434.jpg">
            <img
              src="https://www.euttaranchal.com/tourism/photos/yamunotri-739434.jpg"
              alt="yamunotri"
            />
            <Link to="/yamnotri">
              <ImageListItemBar
                title="Yamunotri"
                actionIcon={
                  <IconButton
                    aria-label="info"
                    className="classes.icon"
                    // onClick={handleClick}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </Link>
          </ImageListItem>
          <ImageListItem key="https://www.tourmyindia.com/chardham/images/gangotri-dham1.jpg">
            <img
              src="https://www.tourmyindia.com/chardham/images/gangotri-dham1.jpg"
              alt="Gangotri"
            />
            <Link to="/Gangotri">
              <ImageListItemBar
                title="Gangotri"
                actionIcon={
                  <IconButton
                    aria-label="info"
                    className="classes.icon"
                    // onClick={handleClick}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </Link>
          </ImageListItem>
          <ImageListItem key="https://images.unsplash.com/photo-1612438214708-f428a707dd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">
            <img
              src="https://images.unsplash.com/photo-1612438214708-f428a707dd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="Kedarnath"
            />
            <Link to="/Kedar">
              <ImageListItemBar
                title="Kedarnath"
                actionIcon={
                  <IconButton
                    aria-label="info"
                    className="classes.icon"
                    // onClick={handleClick}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </Link>
          </ImageListItem>
          <ImageListItem key="https://images.unsplash.com/photo-1601821139314-66a4d14cfc00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=588&q=80">
            <img
              src="https://images.unsplash.com/photo-1601821139314-66a4d14cfc00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=588&q=80"
              alt="Badrinath"
            />
            <Link to="/Badri">
              <ImageListItemBar
                title="Badrinath"
                actionIcon={
                  <IconButton aria-label="info" className="classes.icon">
                    <InfoIcon />
                  </IconButton>
                }
              />
            </Link>
          </ImageListItem>
        </ImageList>
      </div>
    </div>
  );
}

export default Home;
