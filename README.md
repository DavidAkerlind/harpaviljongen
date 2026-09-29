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

På harpaviljongen.com skickar sidan en liten anonym räkning till API:t för varje sidvisning (`POST /api/site-config/seen`): bara sidans adress och vilken sida besökaren kom från. Inga cookies, inget sparas i webbläsaren och ingen IP-adress sparas. Siffrorna visas under *Statistik* i admin, ihoplagda med Cloudflares siffror om det är kopplat. Cloudflares siffror räknar bara sidorna som finns i `PAGES` i API:ts `services/cloudflareAnalytics.js`, så lägg till en ny sida där också. Lokalt räknas inget, om du inte sätter `VITE_ANALYTICS=on` i `.env.local` (se `src/components/PageViews/PageViews.jsx`).

### Bildspelet på startsidan

Startsidans hero är ett bildspel som styrs från admin (**Startbild**): vilka bilder som visas, i vilken ordning, vilken som visas först, tid per bild (5–30 s), slumpad ordning eller bildspelet av (då visas bara den första bilden). Hemsidan läser det från `GET /api/site-config` (`hero`) och sparar det i webbläsaren, så en återkommande besökare ser rätt bilder direkt. Bilderna ligger i Cloudinary, som ger varje skärm rätt bredd och format (WebP/AVIF). Logiken finns i `src/components/HeroSection/useHero.js` och `HeroSlideshow.jsx`.

Bildspelet pausar när det inte syns (annan flik, bortskrollat). Det går även för besökare som valt mindre rörelse i sin enhet, eftersom bilderna bara tonar över i varandra.

**Inbyggda bilder:** tills bilder har laddats upp i admin, och om API:t inte svarar vid ett första besök (efter 1,5 s), visas hemsidans egna bilder i `src/components/HeroSection/heroSlides.js`, med admin-inställningarna när de är kända. Byta eller lägga till en inbyggd bild: lägg originalbilden (så stor som möjligt, t.ex. `7-terrassen.jpg`) i en mapp och kör `node scripts/hero-images.mjs <mappen>`. Skriptet gör WebP-filer i flera bredder i `src/assets/pictures/hero/`, och webbläsaren hämtar den som passar skärmen. Lägg sedan till namnet (`7-terrassen`) i `heroSlides.js`.

### Nyhetsbrev

- **Popupen:** restaurangens popup-formulär från Get a Newsletter laddas på varje sida (skriptet ligger i `<head>` i `index.html`). Hur popupen ser ut, när den visas (t.ex. efter några sekunder) och hur ofta ställs in i Get a Newsletter-kontot.
- **Fältet i sidfoten** på startsidan: e-post och **Prenumerera** (sist på datorn, ovanför kartan på mobilen, där knappen ligger under fältet). Adressen skickas till API:t (`POST /api/newsletter`), som lämnar den vidare till ett prenumerationsformulär i Get a Newsletter. Fältet visas inte när API:t säger att det inte är kopplat än (`newsletter: false` i `/api/site-config`). Se `src/components/Newsletter/Newsletter.jsx` och docs/GO_LIVE.md i API:t.
- **"Få vårat nyhetsbrev →"** i hamburgermenyn, ovanför adressen: leder än så länge till fältet i sidfoten (`/#nyhetsbrev`).

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
