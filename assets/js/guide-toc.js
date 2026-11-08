(() => {
  const body = document.querySelector('.guide-body');
  const nav = document.querySelector('.guide-toc');
  if (!body || !nav) return;

  const headings = [...body.querySelectorAll('h1, h2, h3, h4, h5, h6')];
  if (!headings.length) return;

  const usedIds = new Set([...document.querySelectorAll('[id]')].map(node => node.id));
  const firstLevel = Math.min(...headings.map(heading => Number(heading.tagName[1])));
  const list = nav.querySelector('ul');

  headings.forEach((heading, index) => {
    if (!heading.id) {
      const base = `guide-section-${index + 1}`;
      let id = base;
      let suffix = 2;
      while (usedIds.has(id)) id = `${base}-${suffix++}`;
      heading.id = id;
      usedIds.add(id);
    }

    const item = document.createElement('li');
    item.style.setProperty('--toc-depth', Number(heading.tagName[1]) - firstLevel);
    const link = document.createElement('a');
    link.href = `#${encodeURIComponent(heading.id)}`;
    link.textContent = heading.textContent.trim();
    item.append(link);
    list.append(item);
  });

  nav.hidden = false;
  // Generated anchors must also work when a guide opens with a fragment URL.
  if (window.location.hash) {
    let id;
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return;
    }
    const target = document.getElementById(id);
    if (target && body.contains(target)) target.scrollIntoView();
  }
})();
