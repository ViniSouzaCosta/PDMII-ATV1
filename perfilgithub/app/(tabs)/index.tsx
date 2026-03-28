import { ScrollView, View, Text, Image, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { user } from '../../data/User';

type ProfileIconItem = {
  iconFamily: 'Feather' | 'FontAwesome' | 'MaterialCommunityIcons';
  icon: string;
  color: string;
};

type Styles = {
  scroll: ViewStyle;
  container: ViewStyle;
  box: ViewStyle;
  avatar: ImageStyle;
  nome: TextStyle;
  username: TextStyle;
  stats: ViewStyle;
  statItem: TextStyle;
  boxTitleRow: ViewStyle;
  boxTitleIcon: TextStyle;
  boxTitle: TextStyle;
  boxSubtitle: TextStyle;
  descItem: ViewStyle;
  descIcon: TextStyle;
  descText: TextStyle;
  section: ViewStyle;
  sectionBlock: ViewStyle;
  tecnologiasScrollView: ViewStyle;
  tecnologiasScroll: ViewStyle;
  tecnologiaItem: ViewStyle;
  tecnologiaText: TextStyle;
  chamadoRow: ViewStyle;
  chamadoText: TextStyle;
  bio: TextStyle;
  statsCardImage: ImageStyle;
};

function ProfileIcon({ item }: { item: ProfileIconItem }) {
  if (item.iconFamily === 'FontAwesome') {
    return <FontAwesome name={item.icon as any} size={18} color={item.color} style={styles.descIcon} />;
  }

  if (item.iconFamily === 'MaterialCommunityIcons') {
    return <MaterialCommunityIcons name={item.icon as any} size={18} color={item.color} style={styles.descIcon} />;
  }

  return <Feather name={item.icon as any} size={18} color={item.color} style={styles.descIcon} />;
}

export default function Home() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.nome}>{user.nome}</Text>
      <Text style={styles.username}>@{user.username}</Text>

      <View style={styles.stats}>
        <Text style={styles.statItem}>{user.seguidores} Seguidores</Text>
        <Text style={styles.statItem}>{user.seguindo} Seguindo</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.chamadoRow}>
          <ProfileIcon item={user.chamado} />
          <Text style={styles.chamadoText}>{user.chamado.text}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.bio}>{user.bio}</Text>
        </View>

        <View style={styles.boxTitleRow}>
          <Feather name="user" size={18} color="white" style={styles.boxTitleIcon} />
          <Text style={styles.boxTitle}>Sobre mim</Text>
        </View>
        {user.descricao.map((item, index) => (
          <View key={index} style={styles.descItem}>
            <ProfileIcon item={item} />
            <Text style={styles.descText}>{item.text}</Text>
          </View>
        ))}

        <View style={styles.sectionBlock}>
          <View style={styles.boxTitleRow}>
            <Feather name="layers" size={18} color="white" style={styles.boxTitleIcon} />
            <Text style={styles.boxSubtitle}>Tecnologias</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.tecnologiasScrollView}
            contentContainerStyle={styles.tecnologiasScroll}
          >
            {user.tecnologias.map((item, index) => (
              <View key={index} style={styles.tecnologiaItem}>
                <ProfileIcon item={item} />
                <Text style={styles.tecnologiaText}>{item.text}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.sectionBlock}>
            <View style={styles.boxTitleRow}>
              <Feather name="bar-chart-2" size={18} color="white" style={styles.boxTitleIcon} />
              <Text style={styles.boxSubtitle}>GitHub Stats</Text>
            </View>
            <Image
              source={require('../../assets/images/card.jpeg')}
              style={styles.statsCardImage}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create<Styles>({
  scroll: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#212931',
  },
  box: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  username: {
    color: 'gray',
    marginTop: 4,
  },
  stats: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },
  statItem: {
    color: 'white',
    fontSize: 16,
  },
  boxTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  boxTitleIcon: {
    marginRight: 8,
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  boxSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  descItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  descIcon: {
    marginRight: 10,
  },
  descText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: '#3A3F48',
    paddingBottom: 16,
    marginBottom: 20,
  },
  sectionBlock: {
    borderTopWidth: 1,
    borderTopColor: '#3A3F48',
    paddingTop: 16,
    marginTop: 16,
  },
  tecnologiasScrollView: {
    width: '100%',
  },
  tecnologiasScroll: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  tecnologiaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  tecnologiaText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 8,
  },
  chamadoRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#3A3F48',
    paddingBottom: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  chamadoText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  bio: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
  statsCardImage: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginTop: 6,
  },

});