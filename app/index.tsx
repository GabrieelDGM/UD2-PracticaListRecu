import { Link } from "expo-router";
import "expo-router/entry";
import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Home() {
  return (
    <ImageBackground
      source={require("../assets/images/portada.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.header}>Lista de Anime</Text>
      </View>


      <Link href="/list" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Animes</Text>
        </TouchableOpacity>
    </Link>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  header: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#d41515ff",
    marginBottom: 600,
    textShadowColor: "rgba(255,255,255,0.8)",
    textAlign: "center",
    textShadowOffset: { width: 5, height: 2 },
    textShadowRadius: 4,
    marginTop: 15,
  },
  button: {
    backgroundColor: "#fe0000ff",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 15,
    marginTop: -20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
  }
});




