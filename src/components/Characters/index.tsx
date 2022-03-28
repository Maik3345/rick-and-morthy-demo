import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CharactersResponse, CharactersType } from "../../shared";
import CharacterItem from "./CharacterItem";

const Characters = () => {
  const [characters, setCharacters] = useState<CharactersType[]>([]);

  const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data: CharactersResponse = await response.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: "1rem",
        boxSizing: "border-box",
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      {characters.length <= 0 ? <p>No hay personajes</p> : ""}
      {characters.map((character) => {
        return <CharacterItem {...{ character }} />;
      })}
    </Box>
  );
};

export default Characters;
