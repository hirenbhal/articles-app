import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const Search = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        inputProps={{ "aria-label": "description" }}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <Button type="submit" className="btn">
        Search
      </Button>
    </form>
  );
};

export default Search;
