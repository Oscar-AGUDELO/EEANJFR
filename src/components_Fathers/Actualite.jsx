import React, { useState, useEffect } from "react";
import papa from "papaparse";
import ReactPlayerFacebook from 'react-player/facebook'
import ReactPlayerYoutube from 'react-player/youtube'
import "../assets/Actualite.css";

const Actualite = () => {

  


  const [apiBdEEANJFR, setApiBdEEANJFR] = useState(null);
  const [actualiteVideo, setActualiteVideo] = useState("")
  const API =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMscbBfAJBfLLv-2X38e7eWpLAz4pk0enqu1BvQkxUiB3UdjsGK93Rz4MxMZw26-ySmBcWPy-ZMwZO/pub?gid=1829392902&single=true&output=csv";
  const convertData = (data) => {
    const json = data.map((line, index) => {
      if (index > 0) {
        let obj = {};
        data[0].forEach((key, j) => (obj = { ...obj, [key]: line[j] }));
        return obj;

      }
    });
    json.shift();
    setApiBdEEANJFR(json);
  };

  useEffect(() => {
    fetch(API)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => convertData(data.data));

  }, []);

  const choseUrl = () => {
    if (apiBdEEANJFR[0].state === "true") {
      setActualiteVideo(apiBdEEANJFR[0])
    } else {
      setActualiteVideo(apiBdEEANJFR[1])
    }
  }
  const go = setTimeout(choseUrl, 500);


  if (!apiBdEEANJFR && !actualiteVideo) {
    return <p>Loading...</p>
  }
  return (
    <div className="Actualite">
      <h2>Actualité</h2>

      {(actualiteVideo.id === "Facebook") ?
        <div className="actualite-container-facebook">
          <div className='player-wrapper-facebook'>
            <ReactPlayerFacebook
              className='react-player-facebook'
              url={actualiteVideo.url}
              width='100%'
              height="100%"
              playing={true}
              volume={0}
            />
          </div>
          <div className="actualite-texte-facebook">
            <h2>{actualiteVideo.titre}</h2>
            <p>{actualiteVideo.details}</p>
          </div>
        </div>
        :
        <div className="actualite-container-youtube">
          <div className='player-wrapper-youtube'>
            <ReactPlayerYoutube
              className='react-player-youtube'
              url={actualiteVideo.url}
              width='100%'
              height="100%"
              playing={true}
              volume={0}
            />
          </div>
          <div className="actualite-texte-youtube">
            <h2>{actualiteVideo.titre}</h2>
            <p>{actualiteVideo.details}</p>
          </div>
        </div>
      }

    </div>
  );
};

export default Actualite;