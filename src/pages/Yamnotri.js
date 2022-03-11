import React, { useState } from "react";
import {
  Fab,
  TextField,
  TextareaAutosize,
  Grid,
  Button,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import { Link } from "react-router-dom";
import QRcode from "qrcode.react";
import { useSpeechSynthesis } from "react-speech-kit";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";

const Yamnotri = () => {
  const [qr, setQr] = useState(
    "Yamunotri, also Jamnotri, is the source of the Yamuna River and the seat of the Goddess Yamuna in Hinduism. It is situated at an altitude of 3,293 metres (10,804 ft) in the Garhwal Himalayas and located approximately 150 kilometers (93 mi) North of Uttarkashi, the headquarters of the Uttarkashi district in the Garhwal Division of Uttarakhand, India. It is one of the four sites in India's Chhota Char Dham pilgrimage. The sacred shrine of Yamunotri, source of the river Yamuna, is the westernmost shrine in the Garhwal Himalayas, perched atop a flank of Bandar Poonch Parvat. The chief attraction at Yamunotri is the temple devoted to the Goddess Yamuna and the holy thermal springs at Janki Chatti (7 km. Away)."
  );
  const [value, setValue] = useState(
    "Yamunotri, also Jamnotri, is the source of the Yamuna River and the seat of the Goddess Yamuna in Hinduism. It is situated at an altitude of 3,293 metres (10,804 ft) in the Garhwal Himalayas and located approximately 150 kilometers (93 mi) North of Uttarkashi, the headquarters of the Uttarkashi district in the Garhwal Division of Uttarakhand, India. It is one of the four sites in India's Chhota Char Dham pilgrimage. The sacred shrine of Yamunotri, source of the river Yamuna, is the westernmost shrine in the Garhwal Himalayas, perched atop a flank of Bandar Poonch Parvat. The chief attraction at Yamunotri is the temple devoted to the Goddess Yamuna and the holy thermal springs at Janki Chatti (7 km. Away)."
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

export default Yamnotri;
