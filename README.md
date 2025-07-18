# Harpaviljongen

**Harpaviljongen** är en hemsida för resturangen Harpaviljongen i Stockholm. Den är byggd med React i JavaScript utav David Åkerlind 2025. Den innehåller en övergripande Startsida, Meny-sida, Chambre sépareé-sida,  Galleri-sida och Event-sida. Sidan är uppe på en egen domän www.harpaviljongen.com, och hostas med hjälp av Github-pages och Spaceship.com.
Den hämtar sin data så som menyer, öppettider och vinlista, från en databas på MongoDB från ett API som är externt och hostas på Render. Det finns även en Admin-tänst kopplat till detta API som är byggt också med Ract och Mu-material, Som är mitta andra repo [harpaviljongen-admin-service](https://github.com/DavidAkerlind/harpaviljongen-admin-service) Där kan man ändra menyerna, eventen och öppettiderna som visas på hemsidan. Det är en relativ säker tjänst som bygger på inloggning med krypterat lösenord och separation of concerns är applicerat. Den använder dock inga JWT-Tokens. 

## 🛠️ Teknisk översikt
- **Frontend**: React + JavaScript [Hemsidan](https://harpaviljongen.com/)

- **Backend**: Node.js med Express [ADMIN-repo](https://github.com/DavidAkerlind/harpaviljongen-admin-service)
- **Datakälla**: MongoDB + REST API via Render [API-repo](https://github.com/DavidAkerlind/harpaviljongen-DB-API)

🧑‍💻 Byggt av [David Åkerlind](https://github.com/DavidAkerlind)
