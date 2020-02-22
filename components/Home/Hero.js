import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import styled from "styled-components";

const HeroCard = styled(View)`
  height: 240px;
  margin: 16px 8px;
  background: black;
  border-radius: 4px;
`;

function Hero() {
  return <HeroCard></HeroCard>;
}

export default Hero;
