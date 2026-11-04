---
layout: default
title: Dungeons
permalink: /dungeons/
---
<section class="page-intro"><p class="eyebrow">WISSENSDATENBANK</p><h1>Dungeon-Guides</h1><p>Deine Übersicht über Begegnungen, Mechaniken und Strategien.</p></section>
<div class="card-grid">{% assign guides = site.dungeons | sort: 'title' %}{% for guide in guides %}<a class="portal-card" href="{{ guide.url | relative_url }}"><span class="card-icon">◇</span><h3>{{ guide.title | default: guide.slug | replace: '_', ' ' | escape }}</h3><p>{{ guide.description | default: 'Guide öffnen und Begegnungen entdecken.' | escape }}</p><span class="card-link">Guide öffnen →</span></a>{% endfor %}</div>
