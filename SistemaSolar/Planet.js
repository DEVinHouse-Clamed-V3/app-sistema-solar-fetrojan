import {Text, View, Image, StyleSheet} from 'react-native'

export function Planet({planeta}) {

    return (
        <View style={styles.card}>
          <Text style={styles.titleCard}>{planeta.nome}</Text>
          <Image style={styles.imageCard} source={{uri:planeta.img}}/>
          <View style={styles.textContainer}>
            <View style={styles.row}>
              <Text style={styles.cardProperties}>Velocidade Orbital Média</Text>
              <Text style={styles.cardProperties}>{planeta.velocidadeOrbitalMediaKmS} Km/s</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cardProperties}>Satélites</Text>
              <Text style={styles.cardProperties}>{planeta.quantidadeSatelites}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cardProperties}>Área Superfície</Text>
              <Text style={styles.cardProperties}>{planeta.areaSuperficieKm2} Km²</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cardProperties}>Período de Rotação</Text>
              <Text style={styles.cardProperties}>{planeta.periodoRotacaoDias} dias</Text>
            </View>
          </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '95%',
        backgroundColor: '#000',
        alignSelf: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      titleCard: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Orbitron',
        marginVertical: 15,
        color: '#FFF'
      },
      imageCard: {
        width: '100%',
        height: 300,
        resizeMode: 'contain'
      },
      textContainer: {
        gap: 10,
        marginBottom: 20,
        width: '100%',
        padding: 20
      },
      row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      cardProperties: {
        color: '#FFF',
        fontSize: 14,
        fontFamily: 'Orbitron'
      }
})