import React, {Component} from 'react';
import {ToastAndroid,Button, StyleSheet, Text, TextInput, Picker, View,
Switch, CheckBox, Slider} from 'react-native';

export default class AppBanco extends Component {
constructor(props) {
super(props);
this.state = {
moneda:1,
capitalInicial:0,
capitalFinal:0,
dias:0
};
this.hacerPlazoFijo = this.hacerPlazoFijo.bind(this);
this.handleMonto = this.handleMonto.bind(this);
}
hacerPlazoFijo(){
	let interes;
	if(this.state.dias<30 && this.state.capitalInicial<5000){
		interes=0.25;
	}else
	if(this.state.dias>=30 && this.state.capitalInicial<5000){
		interes=27.5;
	}else
	if(this.state.dias<30 && this.state.capitalInicial<99999){
		interes=30;
	}else
	if(this.state.dias>=30 && this.state.capitalInicial<99999){
		interes=32.3;
	}else 	if(this.state.dias<30){
		interes=35;
	}else interes=38.5;
	capitalFinal=this.state.capitalInicial*(Math.pow(1+interes,this.state.dias/360)-1);

ToastAndroid.show('Presiono el boton de hacer plazo fijo! '+ capitalFinal,
ToastAndroid.LONG);
}

handleMonto =  (text)=>{
	this.setState({capitalInicial:parseInt(text)})
}

render() {
return (
<View style={styles.container}>
<Text>Correo Electronico</Text>
<TextInput
style={st.textInputst}>
correo@mail.com</TextInput>
<Text>CUIT</Text>
<TextInput
style={st.textInputst}>
00-00000000-0</TextInput>
<Text>Moneda</Text>
<Picker
style={{width: 200}}
selectedValue={this.state.moneda}
onValueChange={(itemValue, itemIndex) => this.setState({moneda: itemValue})}>
<Picker.Item label="Dolar" value="1" />
<Picker.Item label="Pesos ARS" value="2" />
</Picker>
<Text>Moneda: {this.state.moneda}</Text>
<Text>Monto</Text>
<TextInput
style={st.textInputst} 
onChangeText={this.handleMonto}/>
<Text> Monto: {this.state.capitalInicial}</Text>
<Slider
maximumValue={5000}
minimumValue={0}
step={1}
width={350}
    onValueChange={(dias)=>this.setState({dias})}>
</Slider>
<Text>{this.state.dias} dias</Text>
<Switch
value={ this.state.mail }
onValueChange={(mail)=>this.setState({mail})}></Switch>
<Text>Avisar por mail: {this.state.mail}</Text>
<CheckBox title='Acepto condiciones'/>
<Button title="Hacer Plazo Fijo"
color="#92c1ff"
onPress={this.hacerPlazoFijo}>
</Button>
<Text>Con un capital inicial de {this.state.capitalInicial} en un plazo de {this.state.dias} el capital final sera de ${this.state.capitalFinal}.</Text>
</View>
);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: 'column',
justifyContent: 'flex-start',
alignItems: 'flex-start',
backgroundColor: '#a8eaff',
	},
welcome: {
fontSize: 20,
textAlign: 'center',
margin: 10,
},
instructions: {
textAlign: 'center',
color: '#333333',
marginBottom: 5,
},
});
const st= StyleSheet.create({
	textInputst:{
		color: 'blue',
	},
	
});
