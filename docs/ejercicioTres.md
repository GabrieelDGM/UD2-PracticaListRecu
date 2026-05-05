# 3. Borrado individual y general.

## Marcar / desmarcar

Se usa `map` para recorrer el array y solo modificar el anime con el `id` recibido,
invirtiendo su campo `marcado` con `!a.marcado`:

```typescript
const toggleMarcado = (id: string) => {
  setAnimes((prev) =>
    prev.map((a) => (a.id === id ? { ...a, marcado: !a.marcado } : a))
  );
};
```

El operador spread `...a` copia todos los campos del objeto y solo sobreescribe `marcado`.

## Borrado individual

Se usa `filter` para devolver un nuevo array sin el anime que tenga el `id` recibido:

```typescript
const borrarAnime = (id: string) => {
  setAnimes((prev) => prev.filter((a) => a.id !== id));
};
```

## Indicación visual del marcado

Cuando un anime está marcado se aplican tres cambios visuales:
- La tarjeta cambia de color de fondo y aparece un borde rojo a la izquierda
- El nombre aparece tachado
- Aparece el badge  Visto

## Resultado

-  Botón ☆/★ por tarjeta que alterna el estado `marcado`
-  Botón 🗑 por tarjeta que elimina el anime de la lista
-  Los indicadores numéricos se actualizan automáticamente al marcar o borrar