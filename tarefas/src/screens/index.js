import React, { useState, useEffect } from "react";
import { Text, StyleSheet, SafeAreaView, View, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Card from "../components/Card";

export default function Home() {
     const [tarefa, setTarefa] = useState("");
     const [tarefas, setTarefas] = useState([]);

     useEffect(() => {
          carregarDados();
     }, []);

     const carregarDados = async () => {
          const lista = await AsyncStorage.getItem("@tarefa");
          if (lista) {
               setTarefas(JSON.parse(lista));
          } else {
               setTarefas([]);
          }
          console.log("Tarefas carregadas: ", tarefas);
     }

     const adicionarTarefa = async () => {
          if (tarefa != "") {
               const novaTarefa = [...tarefas, tarefa];
               setTarefas(novaTarefa);
               console.log("Tarefa adicionada: ", tarefa);
               console.log("Tarefas armazenadas: ", novaTarefa);

               await AsyncStorage.setItem("@tarefa", JSON.stringify(novaTarefa));
               setTarefa("");
          } else {
               alert("O nome da tarefa não pode ser vazio!");
          }
     }

     return (<SafeAreaView style={estilos.container}>
          <View style={estilos.topo}>
               <Text style={estilos.textoTopo}>Tarefas</Text>
          </View>
          <View style={{ paddingHorizontal: 24, marginTop: 16 }}>
               <TextInput
                    style={estilos.input}
                    placeholder="Informe uma tarefa"
                    onChangeText={(value) => setTarefa(value)}
               />
          </View>
          <View style={{ paddingHorizontal: 24, marginVertical: 8 }}>
               <TouchableOpacity style={estilos.botao} onPress={() => adicionarTarefa()}>
                    <Text style={estilos.textoBotao}>Adicionar Tarefa</Text>
               </TouchableOpacity>
          </View>
          <View style={{ width: "100%", height: 1, backgroundColor: "#c9c9c9", marginVertical: 16 }} />
          <View style={{ paddingHorizontal: 24, marginVertical: 8 }}>
               {tarefas.map((item, index) => {
                    return <Card key={index} texto={item} />
               })}
          </View>
     </SafeAreaView>)
}

const estilos = StyleSheet.create({
     container: {
          flex: 1,
     },
     topo: {
          width: "100%",
          height: 40,
          paddingHorizontal: 24,
          paddingVertical: 8,
          backgroundColor: "#37AFE1",
          justifyContent: "center",
          alignItems: "center"
     },
     textoTopo: {
          textAlign: "center",
          color: "#fff",
          fontWeight: "bold",
          fontSize: 16
     },
     input: {
          width: "100%",
          height: 40,
          borderWidth: 1,
          borderRadius: 6,
          borderColor: "#c9c9c9",
          paddingHorizontal: 16
     },
     botao: {
          backgroundColor: "#4CC9FE",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 16,
          paddingHorizontal: 16,
          paddingVertical: 8,
          marginTop: 16
     },
     textoBotao: {
          fontSize: 14,
          color: "#fff"
     }
});