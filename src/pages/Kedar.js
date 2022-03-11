import React, { useState } from "react";
import { Fab, TextField, TextareaAutosize, Grid } from "@material-ui/core";
import { ArrowBack, GetApp } from "@material-ui/icons";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import { Link } from "react-router-dom";
import QRcode from "qrcode.react";
import { useSpeechSynthesis } from "react-speech-kit";
const Kedar = () => {
  const [qr, setQr] = useState(
    "Kedarnath is a town in Rudraprayag district in the state of Uttarakhand in India and has gained importance because of the Kedarnath Temple. It is approximately 86 kilometres from Rudraprayag, the district headquarter. It is a Nagar panchayat in the Rudraprayag district. Kedarnath is the most remote of the four Chota Char Dham pilgrimage sites. It is located in the Himalayas, about 3,583 m (11,755 ft) above sea level near the Chorabari Glacier, which is the source of the Mandakini river. The town is flanked by snow-capped peaks, most prominently the Kedarnath Mountain. The nearest road head is at Gaurikund about 16 km away. The town suffered extensive destruction during June 2013 from the Flash Floods caused by torrential rains in Uttarakhand state."
  );

  const [value, setValue] = useState(
    "Kedarnath is a town in Rudraprayag district in the state of Uttarakhand in India and has gained importance because of the Kedarnath Temple. It is approximately 86 kilometres from Rudraprayag, the district headquarter. It is a Nagar panchayat in the Rudraprayag district. Kedarnath is the most remote of the four Chota Char Dham pilgrimage sites. It is located in the Himalayas, about 3,583 m (11,755 ft) above sea level near the Chorabari Glacier, which is the source of the Mandakini river. The town is flanked by snow-capped peaks, most prominently the Kedarnath Mountain. The nearest road head is at Gaurikund about 16 km away. The town suffered extensive destruction during June 2013 from the Flash Floods caused by torrential rains in Uttarakhand state."
  );
  const { speak } = useSpeechSynthesis();

  const handleChange = (event) => {
    setValue(event.target.value);
    setQr(event.target.value);
    console.log(value);
  };

  const readQR = () => {
    console.log("readQR:", value);
    speak({ text: value });
  };

  return (
    <div>
      <Link to="/">
        <Fab style={{ marginRight: 10 }} color="primary">
          <ArrowBack />
        </Fab>
      </Link>
      <span>QR Generator</span>

      <div style={{ marginTop: 30 }}>
        <TextField
          onChange={handleChange}
          style={{ width: 320 }}
          value={qr}
          label="QR content"
          size="large"
          variant="outlined"
          color="primary"
        />
      </div>

      <div>
        {qr ? (
          <QRcode id="myqr" value={qr} size={320} includeMargin={true} />
        ) : (
          <p>No QR code preview</p>
        )}
      </div>
      <div>
        {qr ? (
          <Grid container>
            {/* <Grid item xs={10}>
              <TextareaAutosize
                style={{ fontSize: 18, width: 250, height: 100 }}
                rowsMax={4}
                defaultValue={qr}
                value={value}
                // onChange={(e) => setValue(e.target.value)}
              />
            </Grid> */}
            <Grid item xs={2}>
              <Fab
                onClick={readQR}
                value={value}
                style={{ marginLeft: 10 }}
                color="primary"
              >
                <RecordVoiceOverIcon />
              </Fab>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Kedar;
