export interface IconItem {
  iconFamily: 'Feather' | 'FontAwesome' | 'MaterialCommunityIcons';
  icon: string;
  color: string;
  text: string;
}

export interface User {
  avatar: string;
  nome: string;
  username: string;
  bio: string;
  descricao: IconItem[];
  chamado: IconItem;
  repos: number;
  seguidores: number;
  seguindo: number;
  tecnologias: IconItem[];
}

export interface Repo {
  id: number;
  nome: string;
  descricao: string;
  linguagem: string;
}