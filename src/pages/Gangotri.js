import React, { useState } from "react";
import { Fab, TextField, TextareaAutosize, Grid } from "@material-ui/core";
import { ArrowBack, GetApp } from "@material-ui/icons";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import { Link } from "react-router-dom";
import QRcode from "qrcode.react";
import { useSpeechSynthesis } from "react-speech-kit";

const Gangotri = () => {
  const [qr, setQr] = useState(
    "Gangotri is a town and a Nagar Panchayat (municipality) in Uttarkashi district in the state of Uttarakhand, India. It is 99 km from Uttarkashi, the main district headquarter. It is a Hindu pilgrim town on the banks of the river Bhagirathi and origin of river Ganges. The town is located on the Greater Himalayan Range, at a height of 3,100 metres (10,200 ft). According to popular Hindu legend, it was here that Goddess Ganga descended when Lord Shiva released the mighty river from the locks of his hair."
  );
  const [value, setValue] = useState(
    "Gangotri is a town and a Nagar Panchayat (municipality) in Uttarkashi district in the state of Uttarakhand, India. It is 99 km from Uttarkashi, the main district headquarter. It is a Hindu pilgrim town on the banks of the river Bhagirathi and origin of river Ganges. The town is located on the Greater Himalayan Range, at a height of 3,100 metres (10,200 ft). According to popular Hindu legend, it was here that Goddess Ganga descended when Lord Shiva released the mighty river from the locks of his hair."
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
export default Gangotri;
