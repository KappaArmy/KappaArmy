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
