import "./App.css";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { useState } from "react";

const MAX_TWIT_LENGTH = 279;
const URL = "https://3commas.io";
const DEFAULT_HASHTAGS = ["3Commas", "3CommasLove", "3CommasApps"];

function App() {
  const [textValue, setTextValue] = useState("");
  const maxTextLength =
    MAX_TWIT_LENGTH - URL.length - DEFAULT_HASHTAGS.toString().length;
  return (
    <div className="App">
      <textarea
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
        <TwitterIcon size={20} /> <span className="tweetLabel">Tweet</span>
      </TwitterShareButton>
    </div>
  );
}

export default App;
