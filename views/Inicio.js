import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const Inicio = ({navigation}) => {

    // Se crea un objeto con la información y se lo asinga en visitarNosotros
    const informacion = {
        clienteId: 5000,
        totalpagar: 500
    }

    const visitarNosotros = () => {
        navigation.navigate('Nosotros', informacion) //agrega los datos del objeto al navigate
    }

    return (
        <View style={styles.contenedor}>
            <Text>Inicio</Text>
            <Button 
                title="Ir a Nosotros"
                onPress={ () => visitarNosotros() }
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

export default Inicio;