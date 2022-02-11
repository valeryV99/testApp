import "./App.css";
import { TwitterShareButton } from "react-share";
import { useState } from "react";
import imgB from './img.png';

const MAX_TWIT_LENGTH = 269;
const URL = "https://3commas.io";
const DEFAULT_HASHTAGS = ["3Commas", "3CommasLove", "3CommasApps"];

function App() {
  const [textValue, setTextValue] = useState("");
  const maxTextLength =
    MAX_TWIT_LENGTH - URL.length - DEFAULT_HASHTAGS.toString().length;
  return (
    <div className="App">
        <img width='100%' height='100%' src={imgB}  alt='14 February iamge'/>
        <textarea
            placeholder='Start typing your wishes For example, It’s just one day in the year, but you should know that I love you every day and every moment. Take my love on this beautiful occasion!'
            style={{    width: '672px',
                height: '418px'}}
        value={textValue}
        onChange={({ target: { value } }) =>
          setTextValue(value.slice(0, maxTextLength))
        }
      />
      <TwitterShareButton
        className="twitterButton"
        url={URL}
        title={textValue}
        hashtags={DEFAULT_HASHTAGS}
      >
      </TwitterShareButton>
    </div>
  );
}

export default App;
