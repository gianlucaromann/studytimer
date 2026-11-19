# Studytimer

Ruhiger Study-Timer im Vollbild: Favoriten, Sessions, Pausen, Notizen, Timer-Klang mit Alarm, Uhr als Ring, Sanduhr, Bergsteiger oder Ziffern, Modus für 1 oder 2 Monitore.

Öffnen: `index.html` im Browser. Zweiter Monitor: `index.html#plan`.

Timer per Link vorbelegen: `?focus=50&break=10&sessions=2&goal=Mathe` (optional `style=ring|sand|berg|digital`). Die Werte werden übernommen und gespeichert, danach nur noch «Im Vollbild starten» klicken.

Als App: In Chrome und Edge (Computer und Android) erscheint oben der Knopf «App installieren». Auf dem iPhone: Safari › Teilen › «Zum Home-Bildschirm», auf dem Mac in Safari: Ablage › «Zum Dock hinzufügen». Nach dem ersten Öffnen läuft die App auch offline (`sw.js`). Logo und App-Name kommen aus `manifest.webmanifest` und `icons/`.

## Filmwecker (`wecker/`)

Fiktiver Wecker als Requisite für Filmprojekte, kein echter Wecker. Öffnen: `wecker/` (z. B. `studytimer.ch/wecker/`).

- Weckzeit frei wählbar (z. B. um 13:02 einen Wecker von 06:00 oder 04:19 zeigen) und kurzer Vorlauf: Die Uhr startet kurz vor der Weckzeit und klingelt nach dem Vorlauf.
- Darstellungen: Handy (Sperrbildschirm), Nachttisch (Leuchtziffern), Ruhig (wie Studytimer). Schlummern, Stopp, Schlafanalyse mit Schlafphasen und Vorschlägen für gute Weckzeiten.
- Im Vollbild: `Leertaste` Alarm jetzt / Stopp, `S` Schlummern, `R` Take neu, `N` zum nächsten Alarm springen, `Esc` zurück.
- Per Link vorbelegen: `wecker/?wake=04:19&lead=20&style=bed&label=Frühschicht` (weitere: `sound`, `snooze`, `bed`, `secs`, `h12`, `vib`, `sleep`, `color`, `date`).

## Daten

Einstellungen, Favoriten, Notizen und Schritte bleiben nur im Browser des jeweiligen Geräts (localStorage). Es gibt keinen Server und kein Konto: Jede Person, die die Seite auf ihrem Gerät öffnet, hat ihre eigenen Daten.

