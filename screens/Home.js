import React, { useState } from 'react';
import { RestaurantContainer, RestaurantImage, RestaurantInfoContainer, RestaurantInfoText, RestaurantStarContainer, RestaurantStarImage, StyledContainerAlt } from '../components/styles';
import Data from './Data';
const Home = () => {
  return (
    <StyledContainerAlt>
      <Restaurants restaurants={Data} />
    </StyledContainerAlt>
  )
}

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let path = require('./../assets/img/starFilled.png')
    if (rating < i && rating > (i - 1)) {
      path = require('./../assets/img/starHalfFilled.png')
    } else if (rating < i) {
      path = require('./../assets/img/starUnfilled.png')
    }
    stars.push((< RestaurantStarImage key={i} source={path} />))
  }
  return (
    <RestaurantStarContainer>
      {stars}
    </RestaurantStarContainer>
  )
}

const RestaurantCard = ({ restaurant }) => {
  return (
    <RestaurantContainer>
      <RestaurantImage
        source={{ uri: restaurant.imageUrl }} />
      <RestaurantInfoContainer>
        <RestaurantInfoText>{restaurant.name}</RestaurantInfoText>
        <StarRating rating={restaurant.rating} />
      </RestaurantInfoContainer>
    </RestaurantContainer>
  )
}

const Restaurants = ({ restaurants }) => {
  return (
    <RestaurantContainer>
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.name} restaurant={restaurant} />
      ))}
    </RestaurantContainer>


  )
}


export default Home;
