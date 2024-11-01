import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, Pressable } from "react-native";

import Esfera from './components/Esfera';

import placeholder from "../../../assets/img/icone.png";
import pedra from "../../../assets/img/pedra.png";
import papel from "../../../assets/img/papel.png";
import tesoura from "../../../assets/img/tesoura.png";

export default function Home() {
     const [imagemMaquina, setImagemMaquina] = useState(placeholder);

     const jogar = () => {
          let index = Math.floor(Math.random() * 3) + 1
          console.log(index);

          switch(index) {
               case 1: 
                    setImagemMaquina(pedra);
                    break;
               case 2:
                    setImagemMaquina(papel);
                    break;
               case 3: 
                    setImagemMaquina(tesoura);
                    break;
          }
     }

     return (<>
          <StatusBar style="light"/>
          <SafeAreaView style={estilos.container}>
               <View>
               
               </View>
               <Esfera imagem={imagemMaquina} bg={"#A0A5C9"}/>
               <View style={{alignItems: "center", rowGap: 16, marginTop: 24}}>
                    <Text style={estilos.textEscolher}>Escolha uma opção abaixo</Text>
                    <View style={{flexDirection: "row", justifyContent: "center", columnGap: 16}}>
                         <Pressable onPress={() => jogar()}>
                              <Esfera imagem={pedra} bg={"#F0D11E"}/>
                         </Pressable>
                         <Pressable onPress={() => jogar()}>
                              <Esfera imagem={papel} bg={"#4CDAFE"}/>
                         </Pressable>
                         <Pressable onPress={() => jogar()}>
                              <Esfera imagem={tesoura} bg={"#A75CF4"}/>
                         </Pressable>
                    </View>
               </View>
               <View>
                    <Pressable onPress={() => console.log("Reiniciar")}>
                         <Text>Reiniciar</Text>
                    </Pressable>
                    <Pressable onPress={() => console.log("Jogar")}>
                         <Text>Jogar</Text>
                    </Pressable>
               </View>
          </SafeAreaView>
     </>)
}

const estilos = StyleSheet.create({
     container: {
          flex: 1,
          padding: 24,
          backgroundColor: "#BC93FF",
          alignItems: "center",
          justifyContent: "center",
          rowGap: 24
     },
     textEscolher: {
          fontSize: 16,
          fontWeight: "bold",
          color: "#fff"
     }
});