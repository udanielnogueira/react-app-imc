import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableWithoutFeedbackBase, Alert, TouchableOpacity, RadioButtom, Platform} from 'react-native';

type Props = {};

export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state={altura:0, peso:0, nome:"", imc: 0, result: ""}
    this.calcular=this.calcular. bind(this)
  }

  calcular(){
    let i = this.state.peso/(this.state.altura*this.state.altura)

    {/*x referencia uma variável do construtor*/}
    let x = this.state
    x.imc = i 
    this.setState(x)

    if(x.imc<18.5){
      x.result="Abaixo do peso"
    }
    else if(x.imc>=18.5 && x.imc<=24.9){
      x.result="Saudável"
    }
    else if(x.imc>=25 && x.imc<=29.9){
      x.result="Sobrepeso"
    }
    else if(x.imc>=30 && x.imc<=34.9){
      x.result="Obesidade"
    }
    else if(x.imc>=35 && x.imc<=39.9){
      x.result="Obesidade Severa"
    }
    else if(x.imc>=40){
      x.result="Obesidade Mórbida"
    }
    
  }

  render(){
    return(
      <ImageBackground source={require("./assets/fundo.jpg")} style={styles.fundo}>
        <View style={styles.container}>

          {/*Logo e título*/}
          <View style={styles.box}>
            <Image source={require("./assets/logo.png")} style={styles.logo}/>
            <Text style={styles.titulo}>Calculadora IMC</Text>
          </View>
          
         
          <View style={styles.principal}>

             {/*Inputs*/}
             <TextInput style={styles.form} placeholder='Nome' textContentType='name'/>
             <TextInput style={styles.form} placeholder='Altura' keyboardType='numeric' onChangeText={(altura)=>{this.setState({altura})}}/>
             <TextInput style={styles.form} placeholder='Peso' keyboardType='numeric' onChangeText={(peso)=>{this.setState({peso})}}/>
             

             {/*Botão*/}
             <TouchableOpacity style={styles.bt} onPress={this.calcular}><Text style={styles.btText}>Calcular</Text></TouchableOpacity>
          
            {/*Resultado*/}
            <Text style={styles.result1}>{this.state.imc.toFixed(2)}</Text>
            <Text style={styles.result2}>Resultado: {this.state.result}</Text>
          </View>

        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fundo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  box: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    marginBottom: 50,
    justifyContent: 'center',
  },

  logo: {
    width: 50,
    height: 45,
    alignSelf: 'center',
  },

  titulo: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: '700',
    alignSelf: 'center',
    paddingLeft: 10,
  },

  principal: {
    width: 370,
    height: 420,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    marginBottom: 150,
    borderRadius: 10,
  },

  form: {
    height: 40,
    width: 320,
    padding: 10,
    fontSize: 15,
    color: '#333',
    backgroundColor: 'rgba(250,250,250, 0)',
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 1,
    marginTop: 20,
  },

  bt: {
    margin: 30,
    padding: 15,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#73f5f5',
    borderRadius: 5,
  },

  btText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 15,
    fontWeight: '500',
  },

  result1: {
    fontSize: 30,
    fontWeight: '700',
  },

  result2: {
    fontSize: 17,
  }

});

{
  /* Outro estilo do form

  height: 40,
  width: 320,
  padding: 10,
  fontSize: 15,
  color: 'red',
  backgroundColor: 'rgb(250,250,250)',
  borderColor: '#eee',
  borderWidth: 1,
  marginTop: 20,
  borderRadius: 4,
  shadowColor: '#333',
  shadowOpacity: 0.25,
  shadowRadius: 2,
  shadowOffset:{
    width:2,
    height:2,
  */
}

{
  /*Bibliotecas para formulários

  formik (mais recomendada)
  redux-form
  unform
  */
}

{
  /*Para cetralizar elementos tente

  alignItems: 'center'
  justifyContent: 'center'
  alignSelf: 'center'
  */
}
