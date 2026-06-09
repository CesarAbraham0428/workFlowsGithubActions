# Cala App

Este proyecto está construido con Angular y cuenta con herramientas automatizadas para el control de calidad del código y la estandarización de los mensajes de confirmación de cambios (commits).

---

## Herramientas de Calidad de Código

### ESLint
Utilizamos ESLint para analizar y mantener el estilo de programación limpio y consistente en todo el proyecto (archivos `.ts` y `.html`).

#### Comandos Disponibles:
* **Analizar código**:
  ```bash
  npm run lint
  ```
  O alternativamente usando `npx`:
  ```bash
  npx eslint .
  ```
* **Corregir automáticamente errores solucionables**:
  ```bash
  npm run lint:fix
  ```
  O alternativamente usando `npx`:
  ```bash
  npx eslint . --fix
  ```

---

## Reglas y Validación de Commits

Para mantener un historial de Git ordenado y legible, se utiliza **Husky** junto con **Commitlint**. Esto intercepta tus confirmaciones de cambios e impide realizar commits con mensajes que no cumplan con el estándar.

### Formato Obligatorio del Mensaje de Commit:
Los mensajes de commit deben seguir la estructura de **Conventional Commits**:

```text
<tipo>: <descripción corta en minúscula>
```

#### Tipos permitidos (`type`):
* `feature`: Una nueva funcionalidad.
* `bug`: Corrección de un error o bug en producción o desarrollo.
* `hotfix`: Solución rápida de emergencia para errores críticos.
* `refactor`: Cambios de código que no corrigen un error ni añaden una funcionalidad (reorganización, optimización).
* `chore`: Tareas de mantenimiento, actualización de dependencias, configuración de herramientas, etc.
* `docs`: Cambios únicamente en la documentación.
* `test`: Añadir o corregir pruebas unitarias o de integración.
* `performance`: Cambios de código que mejoran el rendimiento.

