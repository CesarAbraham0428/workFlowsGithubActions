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
<tipo>(<alcance>): <descripción corta en minúscula>
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

#### Alcances permitidos (`scope`):
El alcance indica el módulo o área que se está modificando y debe colocarse entre paréntesis. Los alcances definidos en este proyecto son:
* `frontend`
* `auth`
* `ui-ux`
* `api`

### Ejemplos de Commits

✅ **Ejemplos Correctos:**
* `feature(frontend): agregar pantalla de inicio de sesion`
* `bug(api): corregir tiempo de espera al consultar endpoints`
* `chore(ui-ux): actualizar colores institucionales del boton principal`
* `docs(frontend): corregir documentacion del flujo de checkout`

❌ **Ejemplos Incorrectos (Serán rechazados por Git):**
* `test: corregir pruebas` *(Falta el alcance entre paréntesis)*
* `feature(frontend) agregar boton` *(Falta el `:` después de los paréntesis)*
* `arreglado el error del boton` *(No tiene tipo ni alcance, formato libre)*
