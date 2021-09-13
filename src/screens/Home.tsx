import AppLoading from "expo-app-loading";
import React from "react";
import { ScrollView } from "react-native";

// Components
import { InnerContainer, PageTitle, StyledContainerAlt, SubTitle } from "../components/styles";

// Dummy Data
import RestaurantData from "./RestaurantData";

// Fonts
import { useFonts, Asap_600SemiBold } from "@expo-google-fonts/asap";
import { Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import { RestaurantCard } from "../components/RestaurantCard";

const Home = () => {
  const [fontsLoaded] = useFonts({
    Asap_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <StyledContainerAlt>
        <PageTitle home={true} style={{ fontFamily: "Quicksand_700Bold" }}>
          Nearby and Open Now
        </PageTitle>
        <SubTitle home={true} style={{ fontFamily: "Asap_600SemiBold" }}>
          Great Spots Near You
        </SubTitle>
        <InnerContainer>
          <ScrollView>
            {RestaurantData.map((restaurant) => (
              <RestaurantCard key={restaurant.name} restaurant={restaurant} />
            ))}
          </ScrollView>
        </InnerContainer>
      </StyledContainerAlt>
    );
  }
};

export default Home;
