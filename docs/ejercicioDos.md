# Implemetancion del ojetivo y lista.

## Tipado del objeto — `types/Anime.ts`

Se creó la carpeta `types/` con el fichero `Anime.ts` para separar el tipado del resto del código.

![Tipos](tipos.png)

Se usa un **tipo union** para `AnimeCategoria` en lugar de `string` para que TypeScript impida en tiempo de compilación usar una categoría que no exista.

El `id` es `string` porque se genera con la librería `uuid` (`v4`), que devuelve identificadores únicos en formato de cadena. Esto garantiza que nunca habrá dos animes con el mismo ID.

## Componente de lista — `app/list.tsx`

### Importaciones

```typescript
import { v4 as uuidv4 } from "uuid";
import { Anime, AnimeCategoria } from "../types/Anime";
```

### Imagen por categoría
![Categorias](categorias.png)

### Estado principal

```typescript
const [animes, setAnimes] = useState(ANIMES_INICIALES);
```

### Renderizado con FlatList

```typescript
<FlatList
  data={animes}
  keyExtractor={(item) => item.id}
  renderItem={renderItem}
/>
```

Se usa `FlatList` en lugar de `ScrollView + map` porque solo renderiza los elementos visibles en pantalla, lo que hace la app más eficiente con listas largas.

## Resultado

-  Interfaz `Anime` con los campos: `id`, `nombre`, `categoria`, `precio`, `marcado`
-  Fichero `types/Anime.ts` independiente importado en `list.tsx`
-  IDs generados con `uuid v4`
-  Lista renderizada con `FlatList` y `keyExtractor` usando el UUID
-  Tres indicadores numéricos calculados automáticamente
-  Imagen dinámica por categoría en cada tarjeta
-  
[Volver Al README](../README.md)