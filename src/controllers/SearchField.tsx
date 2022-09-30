import React, { useRef, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";

interface SearchFieldProps {
  data: any;
  setData: React.Dispatch<any>;
}

export const SearchField: React.FC<SearchFieldProps> = ({ data, setData }) => {
  const [wordToSearch, setWordToSearch] = useState<undefined | string>("");
  return (
    <div className="extension-search-field--container">
      <form
        onSubmit={async e => {
          e.preventDefault();
          try {
            const res = await fetch(
              `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`
            );
            const data = await res.json();
            setData(await data);
            console.log(data);
          } catch (err) {
            setData(err);
          }
        }}
      >
        <input
          className="extension-search-field"
          value={wordToSearch}
          onChange={e => {
            setWordToSearch(e.target.value);
            console.log(wordToSearch);
          }}
          placeholder="Search for a word"
        />
      </form>
    </div>
  );
};
