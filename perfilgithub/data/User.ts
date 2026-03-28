import { User } from "../types/User";

export const user: User = {
  avatar: 'https://avatars.githubusercontent.com/u/183950478?s=400&u=29233cc86fafc6a6aa6ec6ff445f07804faf9e89&v=4',
  nome: 'Vinicius de Souza Camargo Costa',
  username: 'ViniSouzaCosta',
  bio: 'Estudante de Desenvolvimento de Software Multiplataforma na FATEC Registro.',
  descricao: [
    { iconFamily: 'FontAwesome', icon: 'graduation-cap', color: '#a5a49f', text: 'Estudante do 4º semestre de Desenvolvimento de Software Multiplataforma na FATEC Registro' },
    { iconFamily: 'Feather', icon: 'code', color: '#4CAF50', text: 'Focado em aprender e criar soluções inovadoras utilizando diversas tecnologias.' },
    { iconFamily: 'FontAwesome', icon: 'github', color: '#e0b9b9', text: 'Buscando evoluir e colocar em prática o conhecimento adquirido durante o curso' },
    { iconFamily: 'FontAwesome', icon: 'rocket', color: '#ff7301', text: 'Quero me aprofundar em desenvolvimento web e tecnologias multiplataforma' },
  ],
  chamado: { text: 'Olá! Eu sou o Vinícius', iconFamily: 'FontAwesome', icon: 'hand-paper-o', color: '#c9eb08' },
  seguidores: 21,
  seguindo: 43,
  tecnologias: [
    { iconFamily: 'MaterialCommunityIcons', icon: 'language-javascript', color: '#F7DF1E', text: 'JavaScript' },
    { iconFamily: 'MaterialCommunityIcons', icon: 'nodejs', color: '#68A063', text: 'Node.js' },
    { iconFamily: 'FontAwesome', icon: 'database', color: '#4479A1', text: 'MySQL' },
    { iconFamily: 'FontAwesome', icon: 'code', color: '#007ACC', text: 'VS Code' },
    { iconFamily: 'FontAwesome', icon: 'github', color: '#FFFFFF', text: 'GitHub Desktop' },
  ],
};


