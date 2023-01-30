import React from "react";
import {
  Button,
  SectionList,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import GastosList from "./GastosList";
import Ionicons from "react-native-vector-icons/Ionicons";

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const number = 100000;

const Overview: React.FC<Props> = () => {
  return (
    <>
      <View style={styles.month}>
        <Ionicons name="chevron-back-outline" color="grey" size={30} />
        <Text>Febrero</Text>
        <Ionicons name="chevron-forward-outline" color="grey" size={30} />
      </View>
      <View style={styles.balance}>
        <View style={styles.description}>
          <Ionicons
            name="wallet-outline"
            color="grey"
            size={40}
            style={styles.balanceIcons}
          />
          <View>
            <Text>Saldo actual</Text>
            <Text> {"$" + number.toLocaleString("es-AR")}</Text>
          </View>
        </View>
        <View style={styles.description}>
          <Ionicons
            name="calendar-outline"
            color="grey"
            size={40}
            style={styles.balanceIcons}
          />
          <View>
            <Text>Balance mensual</Text>
            <Text> {"$" + number.toLocaleString("es-AR")}</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <GastosList></GastosList>
      </View>
    </>
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
  },
  description: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },
  amount: {
    textAlign: "right",
    alignSelf: "flex-end",
    alignItems: "center",
    paddingRight: 10,
  },
  month: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  balance: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  balanceIcons: {
    paddingRight: 10,
  },
});

export default Overview;
