import { View, FlatList, StyleSheet, Text, StatusBar, Image, Button, LayoutAnimation, Platform, UIManager } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from 'react';

const DATA = [
  {
    id: '1',
    image: 'https://i.pinimg.com/736x/af/41/fc/af41fc65f1fa2c145ff00106568afa39.jpg',
    text: ["Mundial:"],
  },
  {
    id: '2',
    image: 'https://i.pinimg.com/736x/26/3e/09/263e09a8b6342b65bb8a8bd1f5dbfec5.jpg',
    text: ["Copa Libertadores:"],
  },
  {
    id: '3',
    image: 'https://media.gettyimages.com/id/1434873773/pt/foto/rio-de-janeiro-brazil-the-trophy-is-displayed-prior-to-the-second-leg-match-of-the-final-of.jpg?s=612x612&w=0&k=20&c=f4sSzU1nBTWxv2fk1ByFQzkoyiJZoPyLNeqQZNmuobk=',
    text: ["Copa do Brasil:"],
  },
  {
    id: '4',
    image: 'https://i.pinimg.com/736x/b3/3a/00/b33a0061f9cb893876fbf32b98520bfc.jpg',
    text: ["Brasileirão:"],
  },
  {
    id: '5',
    image: 'https://64.media.tumblr.com/368a8c18d59ca3d1b4b5a267d83c68a5/69932c1a81634c09-0a/s1280x1920/8548570c4ff142b668510c2d52c24a8ce9781c72.pnj',
    text: ["Campeonato Carioca:"],
  },
];

const DATA2 = [ 
  {
    id: '1',
    image: 'https://fla-image.mundobola.com/_next/image/?url=https%3A%2F%2Ffla-media.mundobola.com%2Fmedia%2F2023%2F12%2FMundial-1981.webp&w=3840&q=75',
    text: ["Mundial: 1x", "Anos: 1981", "Finais: Flamengo 3x0 Liverpool"],
  },
  {
    id: '2',
    image: 'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F1124%2Fr632336_1296x729_16%2D9.jpg',
    text: ["Copa Libertadores: 3x", "Anos: 1981 2019 2022", "Finais:", "Flamengo 4x2(Ag) Cobreloa", "Flamengo 2x1 River Plate", "Flamengo 1x0 Athletico Paranaense"],
  },
  {
    id: '3',
    image: 'https://assets.goal.com/images/v3/blt48df22d6907bc36c/GettyImages-1434896261.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    text: ["Copa do Brasil: 5x", "Anos: 1990 2006 2013 2022 2024", "Finais:", "Flamengo 1x0(Ag) Goiás", "Flamengo 3x0(Ag) Vasco", "Flamengo 3x1(Ag) Athletico Paranaense", "Flamengo (P6)1x1(P5)(AG) Corinthians", "Flamengo 4x1(AG) Athletico Mineiro"],
  },
  {
    id: '4',
    image: 'https://s2.glbimg.com/d63FujljV1mgqziMafd--g-eeQM=/640x424/i.glbimg.com/og/ig/infoglobo1/f/original/2019/12/05/36093669_es_06-12-2009_rio_de_janeiro_rj_final_do_campeonato_brasileiro_2009_flamengo_x_gremio_no_ma.jpg',
    text: ["Brasileirão: 8x", "Anos:1980 1982 1983 1987 1992 2009 2019 2020"],
  },
  {
    id: '5',
    image: 'https://eusouflamengo.com.br/wp-content/uploads/2024/11/Jogadores-Flamengo-Campeao-Carioca-1991.jpg',
    text: ["Campeonato Carioca: 39x", "Anos: 1914, 1915, 1920, 1921, 1925, 1927, 1939, 1942, 1943, 1944, 1953, 1954, 1955, 1963, 1965, 1972, 1974, 1978, 1979, 1979, 1981, 1986, 1991, 1996, 1999, 2000, 2001, 2004, 2007, 2008, 2009, 2011, 2014, 2017, 2019, 2020, 2021, 2024 e 2025."],
  },
];


if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Card = ({ image, text, expandedData }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={[styles.card, expanded && { minHeight: 300 }]}>
      {image && <Image source={{ uri: image }} style={styles.source} />}
      {text && text.map((line, index) => (
        <Text key={index} style={styles.title}>{line}</Text>
      ))}

      <View style={styles.bt}>
        <Button
          title={expanded ? "v" : ">"}
          color={"black"}
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setExpanded(!expanded);
          }}
        />
      </View>

      {expanded && expandedData && (
        <View style={styles.extraContent}>
          <Image
            source={{ uri: expandedData.image }}
            style={styles.expandedImage}
            resizeMode="cover"
          />
          {expandedData.text.map((line, index) => (
            <Text key={index} style={styles.expandedText}>{line}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

const Item = ({ title, description }) => {
  return(
  <View style={styles.item}>
    <Text style={styles.text}> {title}</Text>
    <Text style={styles.descrição}>{description}</Text>
  </View>
);
};
const App = () => (
  <SafeAreaProvider style={styles.fundo}>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <Text style={styles.headerTitle}>Fla</Text>
            <Text style={styles.headerTitle2}>App</Text>
            <Image
              style={styles.image}
              source={{ uri: 'https://i.pinimg.com/736x/c7/06/b2/c706b2f7087cc2570cdeabac7e6ca54f.jpg' }}
            />
            <Item
              title="História:"
              description="O Clube de Regatas do Flamengo, fundado em 17 de novembro de 1895, é um dos maiores e mais populares clubes do Brasil. Inicialmente criado para competições de remo, tornou-se uma potência no futebol, conquistando títulos nacionais e internacionais, incluindo múltiplos Campeonatos Brasileiros e a Copa Libertadores da América. Com uma torcida apaixonada, conhecida como a maior do país, o Flamengo tem como principais cores o vermelho e o preto e manda seus jogos no icônico estádio do Maracanã."
            />
          </>
        }
        renderItem={({ item }) => {
          const expandedData = DATA2.find(d => d.id === item.id);
          return (
            <Card
              image={item.image}
              text={item.text}
              expandedData={expandedData}
            />
          );
        }}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);


const styles = StyleSheet.create({
  fundo: {
      backgroundColor: 'black',
  },
  bt: {
    backgroundColor: 'red',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'black',
    alignSelf: 'flex-end',
    width: 40,
    marginTop: -113,
    marginBottom: 0,
  },
  container: {
      flex: 1,
      alignItems: 'center',

    },
    box: {
      backgroundColor: 'black',

    },
    card: {
      width: "95%",
      minHeight: 110, 
      padding: 20,
      borderRadius: 10,
      backgroundColor: 'red',
      marginVertical: 8,
      marginHorizontal: 13,
      marginTop: 10,
      margin: 4,
    },
    title: {
        fontSize: 16,
        marginBottom: 80,
        color: 'black',
        marginLeft: 80,
        marginTop: -50,
        fontWeight: 'bold',        
    },
    descrição: {
        fontSize: 14,
        color: 'black',
        marginLeft: 4,
         
    },
  text: {
    fontSize: 18,
    marginTop: 0,
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold', 
    
  },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 2,
    },
    headerTitle: {
      backgroundColor: 'black',
      color: 'red',
      fontSize: 25,
      fontWeight: 'bold', 
      marginLeft: 170,
    },
    headerTitle2: {
      backgroundColor: 'black',
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold', 
      marginLeft: 204,
      marginTop: -30,
    },
    item: {
      backgroundColor: 'red',
      padding: 1,
      marginVertical: 8,
      marginHorizontal: 13,
      alignItems: 'left',
      width: "95%", 
      borderRadius: 10, 
      
    },
  
    image: {
      width: "95%",
      height: 305,
      borderRadius: 40,
      margin: 10,
    },
    source: {
      width: 70,
      height: 90,
      borderRadius: 30,
      marginTop: -13,
      marginLeft: -10,
      
    },
    flat: {
      marginTop: -50,
    },
    extraContent: {
      marginTop: 40,
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 10,
    },
    expandedImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginBottom: 10,
    },
    expandedText: {
      fontSize: 14,
      color: 'white',
    },
});

export default App;