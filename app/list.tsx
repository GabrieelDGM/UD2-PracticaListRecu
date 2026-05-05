import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { Anime, AnimeCategoria } from "../types/Anime";

const CATEGORIA_IMAGENES: Record<AnimeCategoria, any> = {
  "Shōnen": require("../assets/images/onepiece.jpg"),
  "Seinen": require("../assets/images/ataque.jpg"),
  "Shōjo": require("../assets/images/kimetsu.jpg"),
  "Romcom": require("../assets/images/sono.jpg"),
  "Psicológico": require("../assets/images/monster.jpg"),
  "Isekai": require("../assets/images/solo.jpg"),
  "Peleas": require("../assets/images/black.jpg"),
  "Pelea": require("../assets/images/naruto.jpg"),
  "Magia": require("../assets/images/dadan.jpg"),
  "Grados": require("../assets/images/jujutsu.jpg"),
};

const ANIMES_INICIALES: Anime[] = [
  { id: uuidv4(), nombre: "One Piece", categoria: "Shōnen", precio: 100, marcado: false },
  { id: uuidv4(), nombre: "Naruto", categoria: "Pelea", precio: 95, marcado: false },
  { id: uuidv4(), nombre: "Shingeki no Kyojin", categoria: "Seinen", precio: 80, marcado: false },
  { id: uuidv4(), nombre: "Kimetsu no Yaiba", categoria: "Shōjo", precio: 70, marcado: false },
  { id: uuidv4(), nombre: "Dandanda", categoria: "Magia", precio: 50, marcado: false },
  { id: uuidv4(), nombre: "Jujutsu Kaisen", categoria: "Grados", precio: 60, marcado: false },
  { id: uuidv4(), nombre: "Solo Leveling", categoria: "Isekai", precio: 45, marcado: false },
  { id: uuidv4(), nombre: "Sono Bisque Doll wa Koi wo Suru", categoria: "Romcom", precio: 40, marcado: false },
  { id: uuidv4(), nombre: "Black Clover", categoria: "Peleas", precio: 55, marcado: false },
  { id: uuidv4(), nombre: "Monster", categoria: "Psicológico", precio: 30, marcado: false },
];

export default function AnimeList() {

  const [animes, setAnimes] = useState<Anime[]>(ANIMES_INICIALES);

  const totalAnimes = animes.length;
  const totalMarcados = animes.filter((a) => a.marcado).length;
  const precioTotalMarcados = animes
    .filter((a) => a.marcado)
    .reduce((sum, a) => sum + a.precio, 0);

  const toggleMarcado = (id: string) => {
    setAnimes((prev) =>
      prev.map((a) => (a.id === id ? { ...a, marcado: !a.marcado } : a))
    );
  };


  const borrarAnime = (id: string) => {
    setAnimes((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Animes</Text>

      <View style={styles.indicadores}>
        <View style={styles.indicador}>
          <Text style={styles.indicadorNum}>{totalAnimes}</Text>
          <Text style={styles.indicadorLabel}>Total</Text>
        </View>
        <View style={styles.indicador}>
          <Text style={styles.indicadorNum}>{totalMarcados}</Text>
          <Text style={styles.indicadorLabel}>Vistos</Text>
        </View>
        <View style={styles.indicador}>
          <Text style={styles.indicadorNum}>{precioTotalMarcados}M</Text>
          <Text style={styles.indicadorLabel}>USD vistos</Text>
        </View>
      </View>

      <FlatList
        data={animes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={[styles.card, item.marcado && styles.cardMarcada]}>
            <Image source={CATEGORIA_IMAGENES[item.categoria]} style={styles.image} />
            <View style={styles.info}>

              <Text style={[styles.name, item.marcado && styles.nameMarcado]}>
                {item.nombre}
              </Text>
              <Text style={styles.category}>{item.categoria}</Text>
              <Text style={styles.price}>{item.precio} M USD</Text>
              {item.marcado && <Text style={styles.vistoBadge}>✅ Visto</Text>}
            </View>
            <View style={styles.actions}>

              <TouchableOpacity
                style={[styles.btnMarca, item.marcado && styles.btnMarcaActivo]}
                onPress={() => toggleMarcado(item.id)}
              >
                <Text style={styles.btnMarcaText}>{item.marcado ? "★" : "☆"}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnEliminar}
                onPress={() => borrarAnime(item.id)}
              >
                <Text style={styles.btnEliminarText}>🗑</Text>
              </TouchableOpacity>
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
    backgroundColor: "#e1d7ce",
    padding: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#5D534A"
  },
  indicadores: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 4
  },
  indicador: {
    alignItems: "center"
  },
  indicadorNum: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#d41515"
  },
  indicadorLabel: {
    fontSize: 12,
    color: "#888",
    marginTop: 2
  },
  card: {
    backgroundColor: "#fffffa",
    borderRadius: 10,
    padding: 10,
    marginBottom: 7,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    elevation: 7
  },
  cardMarcada: {
    backgroundColor: "#fff3cd",
    borderLeftWidth: 4,
    borderLeftColor: "#d41515"
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 10
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A4A4A"
  },
  nameMarcado: {
    textDecorationLine: "line-through",
    color: "#888"
  },
  category: {
    fontSize: 17,
    color: "#7D6E83",
    marginTop: 4
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#E26A6A",
    marginTop: 6
  },
  vistoBadge: {
    fontSize: 12,
    color: "#5a9a5a",
    marginTop: 4,
    fontWeight: "bold"
  },
  actions: {
    gap: 8,
    alignItems: "center"
  },
  btnMarca: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#f0e6d3",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2
  },
  btnMarcaActivo: {
    backgroundColor: "#d41515"
  },
  btnMarcaText: {
    fontSize: 20
  },
  btnEliminar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2
  },
  btnEliminarText: {
    fontSize: 18
  },
});