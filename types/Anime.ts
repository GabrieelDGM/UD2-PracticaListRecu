export type AnimeCategoria =
    | "Shōnen"
    | "Seinen"
    | "Shōjo"
    | "Pelea"
    | "Peleas"
    | "Romcom"
    | "Psicológico"
    | "Magia"
    | "Grados"
    | "Isekai";

export interface Anime {
    id: string;
    nombre: string;
    categoria: AnimeCategoria;
    precio: number;
    marcado: boolean;

}