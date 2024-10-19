import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View, StyleSheet, TextInput, Pressable, Image, Dimensions } from "react-native";

import Card from "./components/Card";
import logo from "../../../assets/img/logo.png";

export default function Home() {
     const [precoAlcool, setPrecoAlcool] = useState(0);
     const [precoGasolina, setPrecoGasolina] = useState(0);
     const [resposta, setResposta] = useState(null);

     const calcularEconomia = () => {
          if(precoAlcool > 0 && precoGasolina > 0) {
               const alcool = parseFloat(precoAlcool);
               const gasolina = parseFloat(precoGasolina);

               let razao = (alcool / gasolina);

               if(razao <= 0.70) {
                    setResposta("Melhor opção para abstecer é o Álcool");
               } else {
                    setResposta("Melhor opção para abstecer é a Gasolina");
               }
          } else {
               alert("Os valores não podem ser menores que zero")
          }
     }

     const resetar = () => {
          setPrecoAlcool(0);
          setPrecoGasolina(0);
          setResposta(null);
     }

     return (
          <>
               <StatusBar style="light"/>
               <SafeAreaView style={estilos.container}>
                    <View style={{flexDirection: "row", marginTop: 24, columnGap: 8, alignItems: "center"}}>
                         <Image source={logo} style={estilos.logo} resizeMode="contain"/>
                         <Text style={{fontSize: 32, fontWeight: "bold", color: "#c1c1c1"}}>Fuelten</Text>
                    </View>
                    <Card/>
                    <View style={estilos.card}>
                         <Text style={estilos.titulo}>Análise de Economia de Combustível</Text>
                         <View style={{rowGap: 16}}>
                              <View style={{rowGap: 12}}>
                                   <TextInput keyboardType="numeric" style={estilos.input} onChangeText={(value) => setPrecoAlcool(value)} value={precoAlcool} placeholder="Informe o preço do álcool" placeholderTextColor="#72777A"/>
                                   <TextInput keyboardType="numeric" style={estilos.input} onChangeText={(value) => setPrecoGasolina(value)} value={precoGasolina} placeholder="Informe o preço da gasolina" placeholderTextColor="#72777A"/>
                              </View>
                              <View style={{flexDirection: "row", columnGap: 8, width: "100%"}}>
                                   <Pressable style={[estilos.botao, {flex: 1, backgroundColor: "#fff"}]} onPress={() => resetar()}>
                                        <Text style={[estilos.textBotao, {color: "#FF3E47"}]}>Resetar</Text>
                                   </Pressable>
                                   <Pressable style={[estilos.botao, {flex: 1}]} onPress={() => calcularEconomia()}>
                                        <Text style={estilos.textBotao}>Calcular</Text>
                                   </Pressable>
                              </View>
                         </View>
                    </View>
                    {
                         resposta && <View style={estilos.card}>
                              <Text style={estilos.tituloResposta}>Análise</Text>
                              <Text style={estilos.resposta}>{resposta}</Text>
                         </View>
                    }
                    
               </SafeAreaView>
          </>
     )
}

const { width } = Dimensions.get("window");

const estilos = StyleSheet.create({
     container: {
          flex: 1,
          padding: 24,
          backgroundColor: "#141414"
     },
     logo: {
          width: width * 0.1,
          height: undefined,
          aspectRatio: 1,      
     },
     card: {
          marginTop: 24,
          height: "auto",
          padding: 16,
          backgroundColor: "#1D1E22",
          borderRadius: 16,
          rowGap: 16
     },
     titulo: {
          fontSize: 24,
          color: "#E3E5E5",
          fontWeight: "bold"
     },
     input: {
          height: 46,
          paddingVertical: 8,
          paddingHorizontal: 16,
          color: "#72777A", 
          backgroundColor: "#090A0A",
          borderRadius: 50,
     },
     botao: {
         width: "100%",
         height: 46,
         borderRadius: 180,
         backgroundColor: "#FF3E47",
         justifyContent: "center"
     },
     textBotao: {
          textAlign: "center",
          fontSize: 16,
          color: "#fff"
     },
     tituloResposta: {
          fontSize: 24,
          color: "#FF3E47",
          fontWeight: "bold"
     },
     resposta: {
          fontSize: 16,
          color: "#fff",
     }
});