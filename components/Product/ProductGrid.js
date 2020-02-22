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

const Header = styled(View)`
  margin: 16px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled(Text)`
  font-size: 24px;
  color: #777;
`;

const ActionText = styled(Text)`
  color: #aaa;
`;

const Action = styled(View)`
  width: 56px;
  text-align: center;
  align-self: flex-end;
`;

const Grid = styled(View)`
  display: flex;
  margin: 8px;
  flex-direction: ${props =>
    props.orientation == "horizontal" ? "row" : "column"};
`;

const Card = styled(View)`
  width: 160px;
  margin-right: 16px;
`;

const CardImage = styled(View)`
  background-color: black;
  height: 200px;
  margin-bottom: 8px;
  border-radius: 4px;
`;

const Price = styled(Text)`
  color: #777;
  font-size: 16px;
`;

const CardTitle = styled(Text)`
  color: #777;
  font-size: 18px;
`;

function ProductGrid({ orientation, filter }) {
  return (
    <>
      <Header>
        <Title>{filter.category}</Title>
        <Action>
          <ActionText>See all</ActionText>
        </Action>
      </Header>
      <Grid orientation={orientation}>
        <Card>
          <CardImage></CardImage>
          <Price>$34.00</Price>
          <CardTitle>Woman T-shirt</CardTitle>
        </Card>
        <Card>
          <CardImage></CardImage>
          <Price>$34.00</Price>
          <CardTitle>Woman T-shirt</CardTitle>
        </Card>
        <Card>
          <CardImage></CardImage>
          <Price>$34.00</Price>
          <CardTitle>Woman T-shirt</CardTitle>
        </Card>
        <Card>
          <CardImage></CardImage>
          <Price>$34.00</Price>
          <CardTitle>Woman T-shirt</CardTitle>
        </Card>
        <Card>
          <CardImage></CardImage>
          <Price>$34.00</Price>
          <CardTitle>Woman T-shirt</CardTitle>
        </Card>
      </Grid>
    </>
  );
}

export default ProductGrid;
