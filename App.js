import { View, FlatList, StyleSheet, Text, StatusBar, Image, Button, LayoutAnimation, Platform, UIManager, TextInput, Switch } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

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
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Card = ({ image, text, expandedData, opacity, fontSize, darkMode, showStats }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={[styles.card, expanded && { minHeight: 300 }, { opacity }]}> 
      {image && <Image source={{ uri: image }} style={styles.source} />}
      {text && text.map((line, index) => (
        <Text key={index} style={[styles.title, { fontSize }]}>{line}</Text>
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
        <View style={[styles.extraContent, darkMode && { backgroundColor: 'white' }]}>
          <Image
            source={{ uri: expandedData.image }}
            style={styles.expandedImage}
            resizeMode="cover"
          />
          {(showStats ? expandedData.text : expandedData.text.slice(0, 2)).map((line, index) => (
            <Text key={index} style={[styles.expandedText, darkMode && { color: 'black' }]}>{line}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

const Item = ({ title, description }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}> {title}</Text>
      <Text style={styles.descrição}>{description}</Text>
    </View>
  );
};

const App = () => {
  const [nome, setNome] = useState('');
  const [tituloFavorito, setTituloFavorito] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sugestao, setSugestao] = useState('');
  const [decadaFavorita, setDecadaFavorita] = useState('1980');
  const [competicaoFavorita, setCompeticaoFavorita] = useState('Libertadores');
  const [customCards, setCustomCards] = useState([]);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [textFontSize, setTextFontSize] = useState(16);
  const [darkModeCard, setDarkModeCard] = useState(false);
  const [showStats, setShowStats] = useState(true);

  const criarCard = () => {
    if (nome || tituloFavorito || mensagem || sugestao) {
      setCustomCards([...customCards, {
        id: (customCards.length + 100).toString(),
        image: 'https://i.pinimg.com/originals/f4/d4/6c/f4d46c65ce4911fdc08a2c64d7be7771.jpg',
        text: [
          `Títulos favoritos do ${nome}`,
          `Favorito: ${tituloFavorito}`,
          `Mensagem: ${mensagem}`,
          `Futuro: ${sugestao}`,
          `Década favorita: ${decadaFavorita}`,
          `Competição favorita: ${competicaoFavorita}`,
        ],
      }]);
      setNome('');
      setTituloFavorito('');
      setMensagem('');
      setSugestao('');
    }
  };

  return (
    <SafeAreaProvider style={styles.fundo}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={[...customCards, ...DATA]}
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
          ListFooterComponent={
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Seu nome" placeholderTextColor="white" value={nome} onChangeText={setNome} />
              <TextInput style={styles.input} placeholder="Título favorito do Flamengo" placeholderTextColor="white" value={tituloFavorito} onChangeText={setTituloFavorito} />
              <TextInput style={styles.input} placeholder="Mensagem para o Mengão" placeholderTextColor="white" value={mensagem} onChangeText={setMensagem} />
              <TextInput style={styles.input} placeholder="Sugestão de título futuro" placeholderTextColor="white" value={sugestao} onChangeText={setSugestao} />

              <Text style={styles.label}>Escolha sua década favorita:</Text>
              <Picker selectedValue={decadaFavorita} style={styles.picker} dropdownIconColor="white" onValueChange={(itemValue) => setDecadaFavorita(itemValue)}>
                <Picker.Item label="1980" value="1980" />
                <Picker.Item label="1990" value="1990" />
                <Picker.Item label="2000" value="2000" />
                <Picker.Item label="2010" value="2010" />
                <Picker.Item label="2020" value="2020" />
              </Picker>

              <Text style={styles.label}>Escolha sua competição favorita:</Text>
              <Picker selectedValue={competicaoFavorita} style={styles.picker} dropdownIconColor="white" onValueChange={(itemValue) => setCompeticaoFavorita(itemValue)}>
                <Picker.Item label="Libertadores" value="Libertadores" />
                <Picker.Item label="Brasileirão" value="Brasileirão" />
                <Picker.Item label="Copa do Brasil" value="Copa do Brasil" />
                <Picker.Item label="Mundial" value="Mundial" />
                <Picker.Item label="Carioca" value="Carioca" />
              </Picker>

              <Text style={styles.label}>Opacidade da imagem do card:</Text>
              <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={0.2}
                maximumValue={1}
                step={0.05}
                value={imageOpacity}
                minimumTrackTintColor="red"
                maximumTrackTintColor="#000000"
                onValueChange={setImageOpacity}
              />

              <Text style={styles.label}>Tamanho da fonte dos títulos:</Text>
              <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={12}
                maximumValue={24}
                step={1}
                value={textFontSize}
                minimumTrackTintColor="red"
                maximumTrackTintColor="#000000"
                onValueChange={setTextFontSize}
              />

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <Text style={styles.label}>Modo escuro no card extra:</Text>
                <Switch value={darkModeCard} onValueChange={setDarkModeCard} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <Text style={styles.label}>Mostrar estatísticas detalhadas:</Text>
                <Switch value={showStats} onValueChange={setShowStats} />
              </View>

              <View style={styles.createButton}>
                <Button title="Criar Card Personalizado" onPress={criarCard} color="black" />
              </View>
            </View>
          }
          renderItem={({ item }) => {
            const expandedData = DATA2.find(d => d.id === item.id);
            return <Card image={item.image} text={item.text} expandedData={expandedData} opacity={imageOpacity} fontSize={textFontSize} darkMode={darkModeCard} showStats={showStats} />;
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  fundo: { 
    backgroundColor: 'black' 
  },

  container: { 
    flex: 1, 
    marginTop: StatusBar.currentHeight || 2 
  },

  bt: {
    backgroundColor: 'red', borderWidth: 2, 
    borderRadius: 20, 
    borderColor: 'black', 
    alignSelf: 'flex-end', 
    width: 40, 
    marginTop: -113, 
    marginBottom: 0,
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
    marginLeft: 4 
  },

  text: { 
    fontSize: 18, 
    marginTop: 0, 
    color: 'black', 
    textAlign: 'left', 
    fontWeight: 'bold' 
  },

  headerTitle: { 
    backgroundColor: 'black',
    color: 'red', 
    fontSize: 25, 
    fontWeight: 'bold', 
    marginLeft: 170 
  },

  headerTitle2: { 
    backgroundColor: 'black', 
    color: 'white', 
    fontSize: 25, 
    fontWeight: 'bold', 
    marginLeft: 204, 
    marginTop: -30 },

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
    margin: 10 
  },

  source: { 
    width: 70, 
    height: 90, 
    borderRadius: 30, 
    marginTop: -13, 
    marginLeft: -10 
  },

  extraContent: { 
    marginTop: 40, 
    backgroundColor: 'black', 
    padding: 10, 
    borderRadius: 10 },
  expandedImage: { 
    width: '100%', 
    height: 200, 
    borderRadius: 10, 
    marginBottom: 10 
  },

  expandedText: { 
    fontSize: 14, 
    color: 'white'
   },
  inputContainer: { 
    padding: 10 
  },
  input: { 
    backgroundColor: '#333', 
    color: 'white', 
    padding: 10, 
    marginVertical: 5, 
    borderRadius: 10
   },

  picker: { 
    color: 'white', 
    backgroundColor: '#333', 
    borderRadius: 10, 
    marginVertical: 5 
  },

  label: { 
    color: 'white', 
    marginTop: 10
   },

  createButton: { 
    marginTop: 10, 
    borderRadius: 10 
  },
});

export default App;
