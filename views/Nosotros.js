import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';


const Nosotros = ({navigation}) => {

    const volver = () => {
        //vuelve a la pantalla que le definamos
        //navigation.navigate('Inicio') 
        //vuelve a la pantalla anterior no importando cúal es
        //navigation.goBack();
        //transiciones de arriba a abajo en Android  y en iOS de derecha a izquierda
        navigation.push('Inicio')
    }

    return (
        <View style={styles.contenedor}>
            <Text>Nosotros</Text>
            <Button 
                title="Volver"
                onPress={ () => volver() }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Nosotros;
