import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppLoading from "expo-app-loading";
import FirstScreen from "./Components/FirstScreen";
import { Asset } from "expo-asset";

export default function App() {
  const [isImageLoad, setisImageLoad] = useState(false);

  const images = [require("./assets/splash.png"), require("./assets/icon.png")];

  const handleResourcesAsync = async () => {
    // we're caching all the images
    // for better performance on the app

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  const title = " First Screen";
  return (
    <View style={styling.container}>
      {!isImageLoad ? (
        <AppLoading
          startAsync={handleResourcesAsync}
          onError={(error) => console.warn(error)}
          onFinish={() => setisImageLoad(true)}
        />
      ) : (
        <FirstScreen getTitle={title} />
      )}

      <StatusBar style="transparent" />
    </View>
  );
}

const styling = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
