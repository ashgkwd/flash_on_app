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
import { Ionicons } from "@expo/vector-icons";

const HeaderBar = styled(View)`
  height: 50px;
  padding: 8px;
  display: flex;
  flex-direction: row;
`;

const FlexGrow = styled(View)`
  flex-grow: 1;
`;

const Icon = styled(Ionicons)`
  color: #777;
  width: 32px;
  text-align: ${props => (props.alignRight ? "center" : "left")};
`;

function Header() {
  return (
    <HeaderBar>
      <Icon name="ios-menu" size={26} />
      <FlexGrow></FlexGrow>
      <Icon name="ios-notifications" size={26} />
      <Icon name="ios-funnel" size={26} alignRight={true} />
    </HeaderBar>
  );
}

export default Header;
