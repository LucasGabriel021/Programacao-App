import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import carro from "../../../../assets/img/hb20.png";
import icone from "../../../../assets/img/icon-fuel.png";

export default function Card() {
     return (<>
          <View style={estilos.container}>
               <Text style={estilos.titulo}>Carro próprio</Text>
               <Image source={carro} style={estilos.imagem}/>
               <Text style={estilos.modelo}>HB20</Text>
               <View style={{flexDirection: "row", columnGap: 12, alignItems: "center"}}>
                    <Image source={icone} style={estilos.icone}/>
                    <Text style={estilos.infos}>A - 7,1 km/L</Text>
                    <Text style={estilos.infos}>G - 9,9 km/L</Text>
               </View>
          </View>
     </>)
}

const estilos = StyleSheet.create({
     container: {
          marginTop: 24,
          width: "100%",
          height: "auto",
          padding: 16,
          backgroundColor: "#1D1E22",
          borderRadius: 16,
          rowGap: 16
     },
     titulo: {
          fontSize: 14,
          fontWeight: "normal",
          color: "#838990"
     },
     imagem: {
         width: 300,
         height: 102 
     },
     modelo: {
          fontSize: 20,
          color: "#efefef",
          fontWeight: "bold"
     },
     infos: {
          fontSize: 14,
          fontWeight: "normal",
          color: "#838990"
     },
     icone: {
          width: 18,
          height: 18
     }
});