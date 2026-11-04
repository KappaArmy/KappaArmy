# KappaArmy Webseite

Dark-Mode-Communityportal für KappaArmy auf GitHub Pages, erstellt mit Jekyll.

## Inhalte pflegen

Neue Raid-Guides in `_raids/`, Dungeon-Guides in `_dungeons/` als Markdown-Dateien anlegen. Beispiel:

```markdown
---
title: Königsfall
description: Mechaniken und Strategien
---

# Vorbereitung

## Erste Begegnung

Hier steht dein Guide.
```

Die Übersichten unter `/raids/` und `/dungeons/` werden automatisch aus diesen Dateien erstellt.

Die Clan-Links werden zentral in `_data/clans.yml` gepflegt. Design-Anpassungen liegen in `assets/css/style.css`.

## GitHub Pages und eigene Domain

Aktuell sind `url: https://kappaarmy.github.io` und `baseurl: /KappaArmy` in `_config.yml` hinterlegt. Beim Umzug auf eine eigene Domain `url` auf die Domain setzen und `baseurl: ""` verwenden; anschließend GitHub Pages Custom Domain und DNS konfigurieren.

Das Projekt verwendet nur Jekyll und Standard-Liquid-Templates; es ist kein zusätzliches Theme erforderlich.
