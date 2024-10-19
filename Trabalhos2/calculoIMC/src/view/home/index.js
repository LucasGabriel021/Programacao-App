import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, StyleSheet, TextInput, Button, View, Pressable } from "react-native";

export default function Home() {
     const [peso, setPeso] = useState(0);
     const [altura, setAltura] = useState(0);
     const [imc, setIMC] = useState(null);
     const [classificacao, setClassificacao] = useState("");

     const calcularIMC = () => {
          const pesoNum = parseFloat(peso);
          const alturaNum = parseFloat(altura);

          if(alturaNum > 0) {
               let calcIMC = (pesoNum / (alturaNum * alturaNum)).toFixed(2);
               console.log(calcIMC);
               setIMC(calcIMC);
               classificarIMC(imc);
          } else {
               alert("Insira um altura válida!");
          }
     }

     const classificarIMC = (item) => {
          if (item < 16) {
               setClassificacao("Margem Grau III");
          } else if (item >= 16 && item < 16.9) {
               setClassificacao("Margem Grau II");
          } else if (item >= 17 && item < 18.4) {
               setClassificacao("Margem Grau I");
          } else if (item >= 18.5 && item < 24.9) {
               setClassificacao("Saudável");
          } else if (item >= 25 && item < 29.9) {
               setClassificacao("Sobrepeso");
          } else if (item >= 30 && item < 34.9) {
               setClassificacao("Obesidade Grau I");
          } else if (item >= 35 && item < 39.9) {
               setClassificacao("Obesidade Grau II");
          } else {
               setClassificacao("Obesidade Grau III");
          }
     }

     const resetar = () => {
          setAltura(0);
          setPeso(0);
          setIMC(null);
          setClassificacao("");
     }

     return (
          <>
          <StatusBar backgroundColor="#fff"/>
          <SafeAreaView style={estilos.area}>
               <Pressable onPress={() => resetar()} style={[estilos.botao, estilos.botaoReset]}><Text style={estilos.textoBotao}>Resetar</Text></Pressable>
               <View style={estilos.container}>
                    <Text style={estilos.titulo}>Cálcular IMC</Text>
                    <View style={{rowGap: 16}}>
                         <View style={{rowGap: 8}}>
                              <Text style={{color: "#FEF9F2"}}>Informe seu peso em KG:</Text>
                              <TextInput keyboardType="numeric" style={estilos.input} onChangeText={(valor) => setPeso(valor)} value={peso}/>
                         </View>
                         <View style={{rowGap: 8}}>
                              <Text style={{color: "#FEF9F2"}}>Informe sua altura em Metros:</Text>
                              <TextInput keyboardType="numeric" style={estilos.input} onChangeText={(valor) => setAltura(valor)} value={altura}/>
                         </View>
                         <Pressable onPress={() => calcularIMC()} style={estilos.botao}><Text style={estilos.textoBotao}>Calcular IMC</Text></Pressable>
                         {imc && <View style={{alignItems: "center"}}><Text style={{fontSize: 16, color: "#00FF9C"}}>{imc}</Text><Text style={{fontSize: 16, color: "#00FF9C"}}>{classificacao}</Text></View>}
                    </View>
               </View>
          </SafeAreaView>
          </>
     )
}

const estilos = StyleSheet.create({
     area: {
          flex: 1,
          padding: 24,
          backgroundColor: "#353535",
     },
     container: {
          flex: 1,
          justifyContent: "center"
     },
     titulo: {
          fontSize: 28,
          color: "#FEF9F2",
          fontWeight: "bold",
          marginVertical: 24
     },
     input: {
          height: 40,
          width: "100%",
          borderBottomWidth: 2,
          borderColor: "#00FF9C",
          color: "#00FF9C",
          borderRadius: 2,
          textAlign: "center"
     },
     botao: {
          backgroundColor: "#00FF9C",
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 10,
          marginTop: 24
     },
     botaoReset: {
          width: 100,
     },
     textoBotao: {
          fontSize: 16,
          textAlign: "center",
          fontWeight: "bold"
     }
});