<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TEAMFLOW — Dashboard</title>
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@800&family=DM+Sans:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root { --acc: #E85D2F; --dark: #0F1923; }
        body { font-family: 'DM Sans', sans-serif; margin: 0; background: #F8FAFC; }
        header { background: white; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #EEE; position: sticky; top: 0; }
        .logo-s { height: 35px; }
        .badge { background: #E85D2F15; color: var(--acc); padding: 5px 12px; border-radius: 20px; font-weight: 700; font-size: 12px; }
        .container { padding: 20px; max-width: 600px; margin: auto; }
        .match-card { background: white; border-radius: 18px; padding: 20px; margin-bottom: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.03); display: flex; align-items: center; justify-content: space-between; }
        .match-info h4 { margin: 0; color: var(--dark); }
        .match-info p { margin: 5px 0 0; font-size: 13px; color: #888; }
        .score { font-family: 'Syne'; font-size: 20px; color: var(--acc); }
        .admin-panel { background: #0F1923; color: white; padding: 20px; border-radius: 20px; margin-bottom: 30px; }
        input { background: #ffffff15; border: 1px solid #ffffff30; color: white; padding: 12px; width: 100%; border-radius: 10px; margin-bottom: 10px; box-sizing: border-box; }
        .btn-add { background: var(--acc); color: white; border: none; padding: 12px; width: 100%; border-radius: 10px; font-weight: 700; cursor: pointer; }
    </style>
</head>
<body>

    <header>
        <img src="/logo-horizontal.png" alt="Logo" class="logo-s">
        <span class="badge"><%= role.toUpperCase() %></span>
    </header>

    <div class="container">
        <% if (role === 'coach') { %>
            <div class="admin-panel">
                <h3 style="margin-top:0; font-family: 'Syne';">AJOUTER UN MATCH</h3>
                <form action="/add-match" method="POST">
                    <input type="text" name="opponent" placeholder="Adversaire" required>
                    <input type="text" name="date" placeholder="Date et Heure (ex: Samedi 14h)" required>
                    <input type="text" name="location" placeholder="Lieu (Domicile / Extérieur)" required>
                    <button type="submit" class="btn-add">PUBLIER LE MATCH</button>
                </form>
            </div>
        <% } %>

        <h3 style="font-family: 'Syne'; color: var(--dark);">CALENDRIER DES MATCHS</h3>
        
        <% if (matches.length === 0) { %>
            <p style="text-align: center; color: #999;">Aucun match prévu pour le moment.</p>
        <% } %>

        <% matches.forEach(match => { %>
            <div class="match-card">
                <div class="match-info">
                    <h4><%= match.opponent %></h4>
                    <p><%= match.date %> • <%= match.location %></p>
                </div>
                <div class="score"><%= match.score %></div>
            </div>
        <% }) %>
    </div>

</body>
</html>
