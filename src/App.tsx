import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SearchField } from "./controllers/SearchField";
import { Results } from "./controllers/Results";
import "./style/ExtensionContainer.css";
import "./style/Results.css";
import "./style/SearchField.css";
import "./style/Title.css";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${process.env.API_KEY}`,
    "X-RapidAPI-Host": `${process.env.API_HOST}`,
  },
};

const App: React.FC = () => {
  const [data, setData] = useState<object>({});
  return (
    <div className="extension-container">
      <div className="extension-title--container">
        <h1 className="extension-title">DictIt</h1>
        <p id="copyright">made by LinkShake</p>
      </div>
      <SearchField data={data} setData={setData} />
      <Results data={data} setData={setData} />
    </div>
  );
};

export default App;
