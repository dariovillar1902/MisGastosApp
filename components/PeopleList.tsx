import React from "react";
import {
  Button,
  SectionList,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";

export type Props = {};

const PeopleList: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {
            id: 1,
            name: "Vera Villar",
            amount: 100000,
          },
          {
            id: 2,
            name: "Fabio Villar",
            amount: 100000,
          },
          {
            id: 3,
            name: "Andrea Milazzo",
            amount: 100000,
          },
        ]}
        renderItem={({ item }) => (
          <View style={styles.gasto}>
            <View style={styles.description}>
              <Image
                source={{
                  uri: "https://reactnative.dev/docs/assets/p_cat2.png",
                }}
                style={{ width: 50, height: 50 }}
              />
              <View>
                <Text>{item.name}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.amount}>
                {"$" + item.amount.toLocaleString("es-AR")}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => `basicListEntry-${item.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  gasto: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  description: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },
  amount: {
    textAlign: "right",
    alignSelf: "flex-end",
    alignItems: "center",
    paddingRight: 10,
  },
});

export default PeopleList;
