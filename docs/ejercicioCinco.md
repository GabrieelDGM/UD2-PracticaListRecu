# Borrar lista

## Objetivo

Añadir un botón que permita vaciar toda la lista de una vez, deshabilitado cuando no hay elementos.

## Función borrarTodos

```typescript
const borrarTodos = () => {
  setAnimes([]);
};
```

Simplemente reemplaza el estado con un array vacío. Al hacerlo, los tres indicadores se ponen automáticamente a cero porque se recalculan a partir del estado.

## Botón deshabilitado

Se usa la prop `disabled` junto a un estilo condicional para deshabilitar el botón cuando la lista está vacía:

```typescript
<TouchableOpacity
  style={[styles.btnBorrarTodo, totalAnimes === 0 && styles.btnDeshabilitado]}
  onPress={borrarTodos}
  disabled={totalAnimes === 0}
>
```

Cuando `totalAnimes === 0` se aplica el estilo `btnDeshabilitado` que pone el botón en gris y la prop `disabled` impide que se pueda pulsar.

## Mensaje de lista vacía

Cuando la lista está vacía se muestra un mensaje informativo en lugar del `FlatList`:

```typescript
{animes.length === 0 ? (
  <View style={styles.listaVacia}>
    <Text style={styles.listaVaciaEmoji}>📭</Text>
    <Text style={styles.listaVaciaTexto}>
      Tu lista está vacía.{"\n"}¡Añade tu primer anime!
    </Text>
  </View>
) : (
  <FlatList ... />
)}
```

## Resultado

-  Botón "Vaciar lista" que borra todos los animes
- Botón deshabilitado y en gris cuando no hay elementos
- Los indicadores vuelven a cero automáticamente
-  Mensaje informativo cuando la lista está vacía
  
[Volver Al README](../README.md)