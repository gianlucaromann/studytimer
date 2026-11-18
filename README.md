# Studytimer

Ruhiger Study-Timer im Vollbild: Favoriten, Sessions, Pausen, Notizen, Timer-Klang mit Alarm, Uhr als Ring, Sanduhr, Bergsteiger oder Ziffern, Modus für 1 oder 2 Monitore.

Öffnen: `index.html` im Browser. Zweiter Monitor: `index.html#plan`.

Timer per Link vorbelegen: `?focus=50&break=10&sessions=2&goal=Mathe` (optional `style=ring|sand|berg|digital`). Die Werte werden übernommen und gespeichert, danach nur noch «Im Vollbild starten» klicken.

Als App: In Chrome und Edge (Computer und Android) erscheint oben der Knopf «App installieren». Auf dem iPhone: Safari › Teilen › «Zum Home-Bildschirm», auf dem Mac in Safari: Ablage › «Zum Dock hinzufügen». Nach dem ersten Öffnen läuft die App auch offline (`sw.js`). Logo und App-Name kommen aus `manifest.webmanifest` und `icons/`.

## Daten

Einstellungen, Favoriten, Notizen und Schritte bleiben nur im Browser des jeweiligen Geräts (localStorage). Es gibt keinen Server und kein Konto: Jede Person, die die Seite auf ihrem Gerät öffnet, hat ihre eigenen Daten.

