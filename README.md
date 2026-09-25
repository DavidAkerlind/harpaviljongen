# Harpaviljongen

**Harpaviljongen** är en hemsida för resturangen Harpaviljongen i Stockholm. Den är byggd med React i JavaScript utav David Åkerlind 2025. Den innehåller en övergripande Startsida, Meny-sida, Chambre sépareé-sida,  Galleri-sida och Event-sida. Sidan är uppe på en egen domän www.harpaviljongen.com, och hostas med hjälp av Github-pages och Spaceship.com.
Den hämtar sin data så som menyer, öppettider och vinlista, från en databas på MongoDB från ett API som är externt och hostas på Render. Det finns även en Admin-tänst kopplat till detta API som är byggt också med Ract och Mu-material, Som är mitta andra repo [harpaviljongen-admin-service](https://github.com/DavidAkerlind/harpaviljongen-admin-service) Där kan man ändra menyerna, eventen och öppettiderna som visas på hemsidan. Det är en relativ säker tjänst som bygger på inloggning med krypterat lösenord och separation of concerns är applicerat. Den använder dock inga JWT-Tokens. 

## 🛠️ Teknisk översikt
- **Frontend**: React + JavaScript [Hemsidan](https://harpaviljongen.com/)

- **Backend**: Node.js med Express [ADMIN-repo](https://github.com/DavidAkerlind/harpaviljongen-admin-service)
- **Datakälla**: MongoDB + REST API via Render [API-repo](https://github.com/DavidAkerlind/harpaviljongen-DB-API)

## ⚙️ Styrs från admin

Knapparna *Meny* och *Vinlista* (i menyn och på startsidan) öppnar den PDF som är vald i admin (admin.harpaviljongen.com). Om ingen är vald öppnas `Ny_meny_kommer_snart.pdf`. Menyer som skapas i admin (t.ex. *Lunchmeny*) får egna knappar, men bara när en PDF är vald för dem. I admin väljer man också om varje menyknapp ska synas i menyn och/eller på startsidan. Länkarna och knapparna till Chambre, Evenemang och Galleri visas eller döljs också därifrån. Sidan hämtar detta från `/api/site-config` en gång per besök och sparar det i webbläsaren. Den väntar aldrig på API:t.

### Besöksstatistik

På harpaviljongen.com skickar sidan en liten anonym räkning till API:t för varje sidvisning (`POST /api/site-config/seen`): bara sidans adress och vilken sida besökaren kom från. Inga cookies, inget sparas i webbläsaren och ingen IP-adress sparas. Siffrorna visas under *Statistik* i admin, bredvid Cloudflare Web Analytics om det är kopplat. Lokalt räknas inget, om du inte sätter `VITE_ANALYTICS=on` i `.env.local` (se `src/components/PageViews/PageViews.jsx`).

## 🧪 Lokal utveckling

```bash
npm install
npm run dev   # http://localhost:5173
```

För att köra mot ett lokalt API:

```bash
cp .env.example .env.local   # VITE_API_URL=http://localhost:7000/api
```

Hela guiden (API, admin och hemsida lokalt + Postman) finns i API-repot: [docs/LOCAL_TESTING.md](https://github.com/DavidAkerlind/harpaviljongen-DB-API/blob/main/docs/LOCAL_TESTING.md).

🧑‍💻 Byggt av [David Åkerlind](https://github.com/DavidAkerlind)
