---
layout: default
title: Unsere Clans
permalink: /clans/
---
<section class="page-intro"><p class="eyebrow">COMMUNITY</p><h1>Unsere Clans</h1><p>Fünf Clan-Gruppen. Eine gemeinsame Community.</p></section>
<div class="card-grid">{% for clan in site.data.clans %}<a class="portal-card" href="{{ clan.url }}" target="_blank" rel="noopener noreferrer"><span class="card-icon">♜</span><h3>{{ clan.title | escape }}</h3><p>Unsere Destiny 2 Clan-Gruppe auf Bungie.net.</p><span class="card-link">Bei Bungie ansehen ↗</span></a>{% endfor %}</div>
