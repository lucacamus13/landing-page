# Portafolio de Proyectos

Sitio estatico para presentar proyectos de GitHub en un formato mas claro para reclutadores, con una landing principal y paginas de detalle que cargan el README de cada repositorio publico.

## Archivos principales

- `index.html`: landing principal
- `project.html`: pagina de detalle de cada proyecto
- `projects-data.js`: listado central de proyectos
- `project.js`: carga dinamica del README desde GitHub

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo `portfolio`.
2. Sube todos los archivos de esta carpeta al repositorio.
3. En GitHub entra a `Settings` > `Pages`.
4. En `Build and deployment`, elige:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. Guarda los cambios.
6. GitHub publicara el sitio en una URL similar a:
   - `https://lucacamus13.github.io/portfolio/`

## Recomendacion para LinkedIn

Cuando el sitio ya este publicado, usa esa URL en:

- la seccion `Featured`
- el campo `Website`
- la descripcion de tu perfil

## Importante

- Las paginas de detalle cargan el `README.md` directamente desde GitHub.
- Si actualizas el README de un repositorio publico, la pagina reflejara esos cambios al volver a abrirla.
- Los repositorios privados no podran mostrarse automaticamente.
