# 🚀 Despliegue en Cloudflare Pages

## Opción 1: Despliegue desde GitHub (Recomendado)

### Paso 1: Subir a GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/garena-ff-redemption.git
git push -u origin main
```

### Paso 2: Conectar con Cloudflare Pages

1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Selecciona **Workers & Pages** en el menú lateral
3. Haz clic en **Create application** → **Pages** → **Connect to Git**
4. Autoriza GitHub y selecciona tu repositorio
5. Configura el proyecto:
   - **Framework preset**: Next.js
   - **Build command**: `npx @cloudflare/next-on-pages`
   - **Build output directory**: `.vercel/output/static`
   - **Root directory**: `/`

### Paso 3: Configurar Variables de Entorno

En **Settings** → **Environment variables**, agrega:

| Variable | Valor |
|----------|-------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | AIzaSyDodvzbfO3lHZfjkVF7r6ncCX_AE1CEkig |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | garena-ff-8a5aa.firebaseapp.com |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | garena-ff-8a5aa |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | garena-ff-8a5aa.firebasestorage.app |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | 998236846118 |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | 1:998236846118:web:54781d023bbe248517cee7 |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | G-C4V1WV2M6L |
| `NEXT_PUBLIC_FIREBASE_DATABASE_URL` | https://garena-ff-8a5aa-default-rtdb.firebaseio.com/ |

### Paso 4: Desplegar
Haz clic en **Save and Deploy**. Cloudflare construirá y desplegará tu aplicación automáticamente.

---

## Opción 2: Despliegue Manual con Wrangler

### Paso 1: Instalar Wrangler e iniciar sesión
```bash
npm install -g wrangler
wrangler login
```

### Paso 2: Construir y desplegar
```bash
npm run pages:build
npm run pages:deploy
```

---

## 📁 Estructura del Proyecto

```
├── src/
│   ├── app/
│   │   ├── page.tsx          # Página principal
│   │   ├── layout.tsx        # Layout
│   │   └── api/
│   │       └── redemption/   # API para Firebase
│   └── lib/
│       └── firebase.ts       # Configuración Firebase
├── public/
│   ├── background.png        # Imagen de fondo
│   └── logo-icon.png         # Icono del sitio
├── .env.local                # Variables de entorno (local)
├── wrangler.toml             # Configuración Cloudflare
└── next.config.ts            # Configuración Next.js
```

---

## 🔧 Dominio Personalizado

Después del despliegue, puedes agregar un dominio personalizado:

1. Ve a tu proyecto en Cloudflare Pages
2. **Settings** → **Custom domains**
3. Haz clic en **Set up a custom domain**
4. Ingresa tu dominio (ej: `rewards.tudominio.com`)
5. Cloudflare configurará automáticamente los DNS

---

## ⚠️ Notas Importantes

- Las imágenes están configuradas como `unoptimized` para compatibilidad con Cloudflare
- Firebase Realtime Database funciona correctamente en el edge de Cloudflare
- El proyecto usa Next.js App Router con API Routes
