import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, Card, Title, Paragraph, Avatar } from "react-native-paper";

export const RecipesScreen = () => {
  return (
    <Card style={{ padding: 10, margin: 5 }}>
      <Card.Title title="Card Title" subtitle="Card Subtitle" />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover
        source={{ uri: "https://picsum.photos/700" }}
        style={{ margin: 5 }}
      />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};
