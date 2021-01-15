import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { CardMedia } from "@material-ui/core";

const ArticleCard = (props) => {
  return (
    <Card style={{ marginTop: "20px" }}>
      <CardMedia
        style={{ height: "150px" }}
        image={`https://www.nytimes.com/${props.imageUrl}`}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {props.articleContent}
        </Typography>
      </CardContent>
      <CardActions>
        <FavoriteBorderOutlinedIcon />
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
