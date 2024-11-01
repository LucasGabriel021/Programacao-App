import { View, Text, StyleSheet } from "react-native";

export default function Card({texto}) {
  return <View style={estilos.container}>
    <Text style={estilos.texto}>{texto}</Text>
  </View>
}

const estilos = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    elevation: 6,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    paddingHorizontal: 16,
    borderRadius: 6,
    marginBottom: 16
  },
  texto: {
    fontSize: 14,
    lineHeight: 20,
    color: "#000"
  }
});