# Harpaviljongen

**Harpaviljongen** är en hemsida för resturangen Harpaviljongen i Stockholm. Den är byggd med React i JavaScript utav David Åkerlind 2025. Den innehåller en övergripande Startsida, Meny-sida, Chambre sépareé-sida,  Galleri-sida och Event-sida. Sidan är uppe på en egen domän www.davidakerlind.com, och hostas med hjälp av Github-pages och Spaceship.com.
Den hämtar sin data från en databas på MongoDB från ett API som är externt och hostas på Render. Det finns även en Admin tänst kopplat till detta API som är byggt också med Ract och Mu-material, Som är mitta andra repo ```harpaviljongen-admin-service``` Där kan man ändra menyerna, eventen och öppettiderna som visas på hemsidan. Det är en relativ säkr tjänst som ygger på inloggning med krypterat lösenord och separation of concerns är applicerat. Den använder dock inga JWT-Tokens. 

## 🛠️ Teknisk översikt

- **Backend**: Node.js med Express
- **Datakälla**: MongoDB + REST API via Render

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
