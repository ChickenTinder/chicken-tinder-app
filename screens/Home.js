import AppLoading from 'expo-app-loading';
import React from 'react';
import { ScrollView } from 'react-native';

// Components
import {
  InnerContainer,
  PageTitle,
  RestaurantContainer,
  RestaurantImage,
  RestaurantInfoContainer,
  RestaurantInfoText,
  RestaurantStarContainer,
  RestaurantStarImage,
  StyledContainerAlt,
  SubTitle
} from '../components/styles';

// Dummy Data
import RestaurantData from './RestaurantData';

// Fonts
import { useFonts, Asap_600SemiBold } from '@expo-google-fonts/asap';
import { Quicksand_700Bold } from '@expo-google-fonts/quicksand';

const Home = () => {
  let [fontsLoaded] = useFonts({
    Asap_600SemiBold,
    Quicksand_700Bold
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    );
  } else {
    return (
      <StyledContainerAlt>
        <PageTitle
          home={true}
          style={{ fontFamily: "Quicksand_700Bold" }}
        >
          Nearby and Open Now
        </PageTitle>
        <SubTitle
          home={true}
          style={{ fontFamily: "Asap_600SemiBold" }}
        >
          Great Spots Near You
        </SubTitle>
        <InnerContainer>
          <ScrollView >
            {RestaurantData.map(restaurant => (
              <RestaurantCard key={restaurant.name} restaurant={restaurant} />
            ))}
          </ScrollView>
        </InnerContainer>
      </StyledContainerAlt>
    )
  }
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

export default Home;
