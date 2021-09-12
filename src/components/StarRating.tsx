import React from "react";
import { RestaurantStarContainer, RestaurantStarImage } from "./styles";

export type StarRatingProps = {
  rating: number;
};

export const StarRating = ({ rating }: StarRatingProps) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let path = require("../../assets/img/starFilled.png");
    if (rating < i && rating > i - 1) {
      path = require("../../assets/img/starHalfFilled.png");
    } else if (rating < i) {
      path = require("../../assets/img/starUnfilled.png");
    }

    stars.push(<RestaurantStarImage key={i} source={path} />);
  }
  return <RestaurantStarContainer>{stars}</RestaurantStarContainer>;
};
