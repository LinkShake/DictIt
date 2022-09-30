import { useState } from "react";

export const useFetchData = async (word: string) => {
  const [data, setData] = useState<any>({});
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await res.json();
    setData(await data);
  } catch (err) {
    setData(err);
  }
  return [data, setData];
};
