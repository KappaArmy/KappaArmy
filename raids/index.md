---
layout: default
title: Raids
permalink: /raids/
---
<section class="page-intro"><p class="eyebrow">WISSENSDATENBANK</p><h1>Raid-Guides</h1><p>Strategien, Mechaniken und Tipps für die Raids in Destiny 2.</p></section>
<div class="card-grid">{% assign guides = site.raids | sort: 'title' %}{% for guide in guides %}<a class="portal-card" href="{{ guide.url | relative_url }}"><span class="card-icon">⚔</span><h3>{{ guide.title | default: guide.slug | replace: '_', ' ' | escape }}</h3><p>{{ guide.description | default: 'Guide öffnen und Begegnungen entdecken.' | escape }}</p><span class="card-link">Guide öffnen →</span></a>{% endfor %}</div>
