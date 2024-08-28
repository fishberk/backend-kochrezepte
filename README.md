# Projektübersicht: Rezept-App

Ziel des Projekts:
Erstelle eine einfache Rezept-App mit Express.js und Mongoose. Die App ermöglicht es Benutzern, Rezepte hinzuzufügen, anzuzeigen, zu bearbeiten und zu löschen. Dieses Projekt wird dir helfen, die Grundlagen von Express.js und Mongoose in einer praktischen Anwendung zu erlernen.

Projektstruktur
    * server.js: Startet den Express-Server und stellt die Verbindung zur MongoDB her.
    * models/Recipe.js: Definiert das Mongoose-Modell für Rezepte.
    * routes/recipes.js: Enthält die CRUD-Routen für die Verwaltung von Rezepten.
    * controllers/recipeController.js: Implementiert die Logik für die CRUD-Operationen.

Anforderungen
1. Express-Server einrichten:

    * Erstelle einen Express-Server und richte die JSON-Middleware ein.
    * Verbinde den Server mit einer MongoDB-Datenbank.


2. Mongoose-Modell erstellen:

    * Definiere ein Mongoose-Schema für Rezepte mit Feldern wie Titel, Zutaten, Anweisungen, Kochzeit und Erstellungsdatum.

3. CRUD-Routen implementieren:

    * GET: Abrufen aller Rezepte und eines spezifischen Rezepts.
    * POST: Erstellen eines neuen Rezepts.
    * PATCH: Aktualisieren eines vorhandenen Rezepts.
    * DELETE: Löschen eines Rezepts.
Hinweise
Verwende Express-Router, um die Routen zu organisieren und zu verwalten.
Verwende Mongoose-Middleware, um Fehler beim Zugriff auf die Datenbank zu handhaben.
Teste die API-Routen mit Postman oder einem anderen API-Client.


Zusätzliche Aufgaben
* Validierung und Fehlerbehandlung: Füge Validierungen für die Eingabedaten hinzu und implementiere eine ordnungsgemäße Fehlerbehandlung.

* Front-End-Integration (Optional): Erstelle eine einfache Benutzeroberfläche mit React, um die API-Endpunkte visuell zu testen.
