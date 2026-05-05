# Añadir anime

## Objetivo

Poder añadir un nuevo animel con el componente Modal.

## Estados del formulario

Se añadieron cinco estados para controlar el modal y el formulario:

```typescript
const [modalVisible, setModalVisible] = useState(false);
const [formNombre, setFormNombre] = useState("");
const [formPrecio, setFormPrecio] = useState("");
const [formCategoria, setFormCategoria] = useState("Shōnen");
const [formError, setFormError] = useState("");
 `modalVisible` controla si el modal está abierto o cerrado
- `formNombre` y `formPrecio` guardan lo que escribe el usuario
- `formCategoria` guarda la categoría seleccionada, por defecto `"Shōnen"`
- `formError` guarda el mensaje de error si la validación falla.

## Validaciones

Antes de añadir el anime se comprueban dos cosas:

```typescript
if (!formNombre.trim()) {
  setFormError("El nombre no puede estar vacío.");
  return;
}
const precioNum = parseFloat(formPrecio);
if (!formPrecio.trim() || isNaN(precioNum) || precioNum < 0) {
  setFormError("Introduce un precio válido (número positivo).");
  return;
}
```

Si alguna falla se muestra el mensaje en rojo sin cerrar el modal para que el usuario pueda corregirlo.

## Añadir el anime

Si las validaciones pasan se crea un nuevo objeto `Anime` con `uuidv4()` como id y se añade al principio de la lista:

```typescript
const nuevo: Anime = {
  id: uuidv4(),
  nombre: formNombre.trim(),
  categoria: formCategoria,
  precio: precioNum,
  marcado: false,
};
setAnimes((prev) => [nuevo, ...prev]);
```

## Cerrar el modal

Al cancelar o al guardar correctamente se llama a `cerrarModal()` que resetea todos los campos y cierra el modal:

```typescript
const cerrarModal = () => {
  setFormNombre("");
  setFormPrecio("");
  setFormCategoria("Shōnen");
  setFormError("");
  setModalVisible(false);
};
```

## Selector de categoría

Las categorías se muestran como botones con `Pressable`. El botón activo cambia de color para indicar cuál está seleccionada:

```typescript
<Pressable
  style={[styles.categoriaBtn, formCategoria === cat && styles.categoriaBtnActivo]}
  onPress={() => setFormCategoria(cat)}
>
```

## Resultado

- Botón para abrir el modal
- Formulario con nombre, precio y selector de categoría
- Validaciones con mensaje de error sin cerrar el modal
- Al guardar el anime aparece al principio de la lista
- Al cancelar o guardar se limpian todos los campos

[Volver Al README](../README.md)