import React from "react";

interface ResultsProps {
  data: any;
  setData: React.Dispatch<any>;
}

interface Data {
  antonyms?: any[];
  definitions: Meanings[];
  synonyms?: any[];
}

interface Meanings {
  antonyms?: any[];
  definition: string;
  synonyms?: any[];
}

export const Results: React.FC<ResultsProps> = ({ data, setData }) => {
  return (
    <div className="extension-data-container" style={{ textAlign: "left" }}>
      {Object.keys(data).length !== 0 ? (
        <ul className="results-container">
          <ul className="meaning-container">
            {data[0]?.meanings.map((meaningArr: Data) => {
              return meaningArr.definitions.map((currentMeaning: Meanings) => (
                <li key={currentMeaning.definition}>
                  {currentMeaning.definition}
                </li>
              ));
            })}
          </ul>
        </ul>
      ) : (
        <p>Start by searching a word</p>
      )}
    </div>
  );
};
