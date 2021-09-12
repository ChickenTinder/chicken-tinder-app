import React from "react";
import { Restaurant } from "../types";
import { StarRating } from "./StarRating";
import {
  RestaurantContainer,
  RestaurantImage,
  RestaurantInfoContainer,
  RestaurantInfoText,
} from "./styles";

export type RestaurantCardProps = {
  restaurant: Restaurant;
};

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <RestaurantContainer>
      <RestaurantImage source={{ uri: restaurant.imageUrl }} />
      <RestaurantInfoContainer>
        <RestaurantInfoText>{restaurant.name}</RestaurantInfoText>
        <StarRating rating={restaurant.rating} />
      </RestaurantInfoContainer>
    </RestaurantContainer>
  );
};
