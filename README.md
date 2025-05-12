# Harpaviljongen

**Harpaviljongen** är ett digitalt menysystem byggt i JavaScript, med möjligheter att läsa, redigera och visa menyer med en enkel REST API-arkitektur. Projektet är utformat för att kunna användas i restaurangsammanhang där menyer ofta behöver justeras.

## 🛠️ Teknisk översikt

- **Backend**: Node.js med Express
- **Datakälla**: JSON-fil (`data.json`)
- **Endpoints**:
  - `GET /api/menus` – Hämtar alla menyer
  - `GET /api/menus/:menuId` – Hämtar en specifik meny
  - `PUT /api/menus/:menuId/:field` – Uppdaterar ett fält (t.ex. `title`, `description`) i en meny
  - `PUT /api/menus/:menuId/:itemId/:field` – Uppdaterar ett fält i ett enskilt menyobjekt

## 📁 Struktur

```
.
├── api/
│   └── menus.js        # Express-router för meny-API:t
├── data/
│   └── data.json       # Alla menyer och menyobjekt lagras här
├── server.js           # Startar Express-servern
└── public/             # Statisk front-end (valfritt)
```

## ▶️ Starta projektet

1. Klona repo:
   ```bash
   git clone https://github.com/DavidAkerlind/harpaviljongen.git
   cd harpaviljongen
   ```

2. Installera beroenden:
   ```bash
   npm install
   ```

3. Starta server:
   ```bash
   node server.js
   ```

4. Servern körs nu på:  
   [http://localhost:3000](http://localhost:3000)

## ✏️ Exempelanrop

### Uppdatera titel på en meny
```http
PUT /api/menus/menu-snacks/title
Body: { "value": "NY SNACKTITEL" }
```

### Uppdatera pris på ett menyobjekt
```http
PUT /api/menus/menu-snacks/snack-1/price
Body: { "value": 89 }
```

## 🔧 Att göra

- ✅ Läsa och skriva till `data.json`
- ✅ PUT-anrop för menyer och menyobjekt
- ☐ Validering av indata
- ☐ UI för hantering

## 📄 Licens

MIT – använd fritt men nämn gärna upphovsmakaren.

---

🧑‍💻 Byggt av [David Åkerlind](https://github.com/DavidAkerlind)
