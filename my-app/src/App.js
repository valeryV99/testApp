import "./App.css";
import { useState } from "react";
import imgB from './img.png';
const MAX_TWIT_LENGTH = 269;
const URL = "https://3commas.io";
const DEFAULT_HASHTAGS = ["3Commas", "3CommasLove", "3CommasApps"];

function parse_query_string(query) {
    let vars = query.split("&");
    let query_string = {};
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        let key = decodeURIComponent(pair[0]);
        let value = decodeURIComponent(pair[1]);
        // If first entry with this name
        if (typeof query_string[key] === "undefined") {
            query_string[key] = decodeURIComponent(value);
            // If second entry with this name
        } else if (typeof query_string[key] === "string") {
            let arr = [query_string[key], decodeURIComponent(value)];
            query_string[key] = arr;
            // If third or later entry with this name
        } else {
            query_string[key].push(decodeURIComponent(value));
        }
    }
    return query_string;
}

function App() {
  const [textValue, setTextValue] = useState("");
  const maxTextLength =
    MAX_TWIT_LENGTH - URL.length - DEFAULT_HASHTAGS.toString().length;
    const query = window.location.search.substring(1);
    console.log(query,'query');
    const qs = parse_query_string(query);
    console.log(qs,'qs');

    if(qs.twitterUrl) {
        window.location.href = `https://twitter.com/intent/tweet?url=${URL}&text=${qs.text}&hashtags=3Commas%2C3CommasLove%2C3CommasApps`;
    }
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
        <a target="_blank" className="twitterButton" href={`https://valeryv99.github.io/testApp/?twitterUrl=https://twitter.com/intent/tweet?url=${URL}&text=${textValue}&hashtags=3Commas%2C3CommasLove%2C3CommasApps`} rel="noopener noreferrer"/>
    </div>
  );
}

export default App;
