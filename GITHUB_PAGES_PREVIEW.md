# Ver la visual de MEDACCER en GitHub Pages

## Qué se añadió
- `index.html`
- `medaccer-preview.css`
- `medaccer-preview.js`

Con esto, al activar GitHub Pages desde la raíz (`/(root)`), verás una preview navegable con:
- Selector de especialidad (9 verticales)
- Selector de país LATAM (Colombia activo, resto en modo “Próximamente”)
- Hero dinámico con ROI, propuesta única, features, testimonio y demo animada de WhatsApp
- Pricing con plan recomendado destacado

## Activación (igual a tu captura)
1. Ir a **Settings → Pages**.
2. En **Source**, elegir **Deploy from a branch**.
3. En **Branch**, seleccionar la rama donde está este commit (ej. `main` o tu rama de trabajo).
4. Folder: **`/(root)`**.
5. Clic en **Save**.
6. Esperar 1–3 minutos.

## URL esperada
- `https://<tu-usuario>.github.io/<tu-repo>/`
- En tu caso debería verse algo como: `https://juanguerrero356.github.io/22-de-septiembre/`

## Si no se ve
- Confirma que `index.html` esté en la raíz del repo.
- Revisa la pestaña **Actions** por si falló el deploy de Pages.
- Hard refresh del navegador (`Ctrl + F5`).
