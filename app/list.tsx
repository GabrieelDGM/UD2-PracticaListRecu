import React from "react";
import { FlatList, Image, StyleSheet, Text, View} from "react-native";

export default function AnimeList() {
  const animes = [
    {
      id: 1,
      nombre: "One Piece",
      categoria: "Categoria: Shōnen",
      precio: "Precio: 100 millones USD",
      imagen: require("../assets/images/onepiece.jpg"),
    },
    {
      id: 2,
      nombre: "Naruto",
      categoria: "Categoria:Shōnen",
      precio: "Precio: 95 millones USD",
      imagen: require("../assets/images/naruto.jpg"),
    },
    {
      id: 3,
      nombre: "Shingeki no Kyojin",
      categoria: "Categoria: Seinen",
      precio: "Precio: 80 millones USD",
      imagen: require("../assets/images/ataque.jpg"),
    },
    {
      id: 4,
      nombre: "Kimetsu no Yaiba",
      categoria: "Categoria: Shōnen",
      precio: "Precio: 70 millones USD",
      imagen: require("../assets/images/kimetsu.jpg"),
    },
    {
      id: 5,
      nombre: "Dandanda",
      categoria: "Categoria Shōnen",
      precio: "Precio: 50 millones USD",
      imagen: require("../assets/images/dadan.jpg"),
    },
    {
      id: 6,
      nombre: "Jujutsu Kaisen",
      categoria: "Categoria: Shōnen",
      precio: "Precio 60 millones USD",
      imagen: require("../assets/images/jujutsu.jpg"),
    },
    {
      id: 7,
      nombre: " Solo Leveling",
      categoria: "Categoria: Shōnen",
      precio: "Precio: 45 millones USD",
      imagen: require("../assets/images/solo.jpg"),
    },
    {
      id: 8,
      nombre: "Sono Bisque Doll wa Koi wo Suru",
      categoria: "Categoria: Romncom",
      precio: "Precio: 40 millones USD",
      imagen: require("../assets/images/sono.jpg"),

    },
    {
      id: 9,
      nombre: "Black Clover",
      categoria: " Categoria: Shōnen",
      precio: " Precio 55 millones USD",
      imagen: require("../assets/images/black.jpg"),
    },
    {
      id: 10,
      nombre: "Monster",
      categoria: "Categoria: Psicológico",
      precio: "Precio: 30 millones USD",
      imagen: require("../assets/images/monster.jpg"),
    }


  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Animes</Text>

      <FlatList
        data={animes}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagen} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.nombre}</Text>
              <Text style={styles.category}>{item.categoria}</Text>
              <Text style={styles.price}>{item.precio}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1d7ceff",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#5D534A",
  },
  card: {
    backgroundColor: "#fffffaff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 7,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    elevation: 7,
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A4A4A",
  },
  category: {
    fontSize: 17,
    color: "#7D6E83",
    marginTop: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#E26A6A",
    marginTop: 6,
  },
});