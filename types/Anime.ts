export type AnimeCategoria =
  | "Shōnen"
  | "Seinen"
  | "Shōjo"
  | "Romcom"
  | "Psicológico"
  | "Isekai";

  export interface Anime {
  id: string;                 
  nombre: string;
  categoria: AnimeCategoria;
  precio: number;
  marcado: boolean;
  }