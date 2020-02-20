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
import Icon from "../StyledIcon";

const shadowStyle = StyleSheet.create({
  containerStyle: {
    borderWidth: 0,
    borderRadius: 4,
    shadowColor: "#aaa",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 8,
    marginRight: 8,
    height: 44,
    justifyContent: "center"
  }
});

const Contents = styled(View)`
  display: flex;
  flex-direction: row;
  /* border: 1px solid green; */
`;

const SearchIcon = styled(Icon)`
  margin-left: 16px;
  /* border: 1px solid red; */
`;

const Placeholder = styled(Text)`
  /* border: 1px solid olive; */
  max-width: 220px;
  color: #888;
  font-size: 18px;
  margin-top: 1px;
  margin-left: 8px;
`;

function Search() {
  return (
    <View style={shadowStyle.containerStyle}>
      <Contents>
        <SearchIcon name="ios-search" size={24}></SearchIcon>
        <Placeholder>Seach Your Product</Placeholder>
      </Contents>
    </View>
  );
}

export default Search;
