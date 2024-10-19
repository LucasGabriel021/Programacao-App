import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Esfera({imagem, bg}) {
     return (<>
          <View style={[estilos.esfera, {backgroundColor: bg}]}>
               <Image source={imagem} style={estilos.imagem}/>
          </View>
     </>);
}

const estilos = StyleSheet.create({
     esfera: {
          borderWidth: 4,
          borderColor: "#D1D8FF",
          width: 100,
          height: 100,
          borderRadius: 9999,
          justifyContent: "center",
          alignItems: "center",
          elevation: 6
     },
     imagem: {
          width: 70,
          height: 70
     }
});