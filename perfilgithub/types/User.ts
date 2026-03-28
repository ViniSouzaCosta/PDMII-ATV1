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
  seguidores: number;
  seguindo: number;
  tecnologias: IconItem[];
}

