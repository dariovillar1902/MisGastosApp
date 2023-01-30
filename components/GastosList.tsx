import React from "react";
import {
  Button,
  SectionList,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export type Props = {};

const GastosList: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: "2 de Febrero",
            data: [
              {
                id: 1,
                name: "Sueldo Febrero",
                category: "Sueldo",
                account: "Caja de ahorro Santander",
                amount: 100000,
              },
              {
                id: 2,
                name: "Sueldo Febrero",
                category: "Sueldo",
                account: "Caja de ahorro Santander",
                amount: 100000,
              },
              {
                id: 3,
                name: "Sueldo Febrero",
                category: "Sueldo",
                account: "Caja de ahorro Santander",
                amount: 100000,
              },
            ],
          },
          {
            title: "1 de Febrero",
            data: [
              {
                id: 4,
                name: "Sueldo Febrero",
                category: "Sueldo",
                account: "Caja de ahorro Santander",
                amount: 100000,
              },
              {
                id: 5,
                name: "Sueldo Febrero",
                category: "Sueldo",
                account: "Caja de ahorro Santander",
                amount: 100000,
              },
              {
                id: 6,
                name: "Sueldo Febrero",
                category: "Sueldo",
                account: "Caja de ahorro Santander",
                amount: 100000,
              },
              {
                id: 7,
                name: "Sueldo Febrero",
                category: "Sueldo",
                account: "Caja de ahorro Santander",
                amount: 100000,
              },
            ],
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
                <Text>{item.category + " | " + item.account}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.amount}>
                {"$" + item.amount.toLocaleString("es-AR")}
              </Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 10,
  },
  description: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },
  amount: {
    textAlign: "right",
    alignSelf: "flex-end",
    alignItems: "center",
    paddingRight: 10,
  },
});

export default GastosList;
