import React, { useState, useEffect } from "react";

import Search from "./components/Search";
import { Grid } from "@material-ui/core";
import Content from "./components/Content";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.response.docs);
        // console.log(articles);
      })
      .catch((err) => console.error(err));
  }, [term]);

  return (
    <Grid container direction="column">
      <Grid container direction="row" justify="center" alignItems="center">
        <Search searchText={(text) => setTerm(text)} />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content content={articles} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
