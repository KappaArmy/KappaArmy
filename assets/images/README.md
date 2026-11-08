# Website-Bilder

Pro Raid und Dungeon gibt es einen Ordner mit demselben Namen wie die zugehoerige Markdown-Datei in `_raids/` bzw. `_dungeons/`.

- `title.jpg`: offizielles Aktivitaetsbild von Bungie (`pgcrImage`).
- `source.json`: Quell-URL, Aktivitaets-ID und Abrufdatum.
- Weitere Bilder (z. B. Karten oder Encounter) koennen im jeweiligen Ordner ergaenzt werden.

Beispiel fuer die Einbindung in Markdown:

```markdown
![Deep Stone Crypt]({{ '/assets/images/raids/deepstone_crypt/title.jpg' | relative_url }})
```

Quelle: https://www.bungie.net/Platform/Destiny2/Manifest/
Die Bilder stammen von Bungie; die Rechte verbleiben bei Bungie.

## Encounter

Jeder Raid und Dungeon hat einen gemeinsamen `encounter/`-Ordner. Alle Bilder liegen direkt darin, ohne weitere Unterordner. Die 78 Haupt-Encounter werden ueber nummerierte Dateinamen zugeordnet.

Beispiel fuer kuenftige Bilder:

```text
raids/deepstone_crypt/
  title.jpg
  source.json
  encounter/
    01_crypt_security.jpg
    02_atraks_1.jpg
    03_taniks_reborn.jpg
    04_taniks_abomination.jpg
```

Die Dateinamen zeigen das Ablageschema; die Bilder fuer Deep Stone Crypt sind inzwischen vorhanden.

- Es werden ausschliesslich Bilder aus offiziellen Bungie-Veroeffentlichungen verwendet (Bungie.net, Bungie Help und Bungie Press Room). Offizielle Pressebilder koennen ueber den auf der Quellseite eingebundenen Gamespress-/Azure-Bildserver ausgeliefert werden.
- Die vorhandenen `title.jpg` stammen direkt aus Bungies Destiny-2-Manifest und bleiben erhalten.
- Nach erneuter Pruefung am 2026-11-09 sind fuer 39 der 78 Haupt-Encounter offizielle Bilder hinterlegt. Leere `encounter/`-Ordner enthalten eine `.gitkeep`. Fuer fehlende Bilder gibt es keine zusaetzlichen JSON-Dateien.
- Bilddownloads von Wikis, Community-Screenshots und selbst erstellte Karten werden nicht verwendet. Die Zuordnung nummerierter Bungie-Pressebilder zu Encounter basiert auf der visuellen Pruefung.
- Kuenftige offizielle Bilder als `<nummer>_<encounter>.jpg` bzw. im passenden Originalformat direkt unter `encounter/` ablegen. Fuer weitere Bilder z. B. `01_crypt_security_detail.jpg` verwenden. Die offizielle Bungie-Quellseite und den Originaldateinamen in `<nummer>_<encounter>.source.json` dokumentieren und Guide sowie Katalog aktualisieren.
- Der zentrale Katalog liegt in `_data/encounter.json`; `folder` bezeichnet den gemeinsamen Ordner, `image_basename` den Dateinamen ohne Erweiterung. `reference_url` dient ausschliesslich als Beleg fuer die Encounter-Namen, nicht als Bildquelle.
- Einstiege, reine Laufwege, Sprungpassagen und optionale Geheimnisse sind nicht separat nummeriert.
- Bei The Desert Perpetual sind die ersten drei Encounter frei waehlbar; ihre Nummerierung dient nur der Ablage.

Die vorhandenen offiziellen Bilder sind in den benannten Encounter-Abschnitten der Guides eingebunden. Die Aktivitaetsbilder aus dem Bungie-Manifest werden nicht als spezifische Encounter-Bilder ausgegeben.

Eine Liste aller Encounter und ihres Bildstatus steht in [ENCOUNTER.md](ENCOUNTER.md).
