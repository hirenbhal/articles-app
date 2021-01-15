import React from "react";
import Card from "./Card";
import { Grid } from "@material-ui/core";

const Content = ({ content }) => {
  const articleCard = (article) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        {!article.multimedia[0] ? (
          <Card
            articleContent={article.abstract}
            imageUrl="https://picsum.photos/200/300"
          />
        ) : (
          <Card
            articleContent={article.abstract}
            imageUrl={article.multimedia[0].url}
          />
        )}
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {content.map((article) => articleCard(article))}
    </Grid>
  );
};

export default Content;