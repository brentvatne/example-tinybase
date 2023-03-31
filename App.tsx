import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { createStore } from "tinybase";

// TypeScript works as expected, Metro can't find the module
// import { useValue } from "tinybase/ui-react";

// TypeScript can't find definition, Metro can find the module
import { useValue } from 'tinybase/lib/ui-react';

const store = createStore();
store.setValue("counter", 0);

export default function App() {
  const value = useValue("counter", store) as number;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Click counter: {value}</Text>

      <Button
        title="Click me"
        onPress={() => store.setValue("counter", value + 1)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
