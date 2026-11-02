(() => {
  'use strict';

  const comparisonTabs = [...document.querySelectorAll('[data-comparison]')];
  const comparisonTablist = document.querySelector('.comparison-tabs');
  const selectComparison = (name, focus = false) => {
    comparisonTabs.forEach(tab => {
      const selected = tab.dataset.comparison === name;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
      if (selected && focus) tab.focus({ preventScroll: true });
    });
  };
  comparisonTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectComparison(tab.dataset.comparison));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % comparisonTabs.length;
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + comparisonTabs.length) % comparisonTabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = comparisonTabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      selectComparison(comparisonTabs[next].dataset.comparison, true);
    });
  });
  selectComparison('two-asset');
  comparisonTablist.hidden = false;

  const sampleButtons = [...document.querySelectorAll('[data-sample]')];
  const sampleFigures = [...document.querySelectorAll('[data-sample-figure]')];
  const selectSample = count => {
    sampleButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.sample === count)));
    sampleFigures.forEach(figure => { figure.hidden = figure.dataset.sampleFigure !== count; });
    document.getElementById('sample-status').textContent = `${Number(count).toLocaleString('en-US')} simulated trajectories per update.`;
  };
  sampleButtons.forEach(button => button.addEventListener('click', () => selectSample(button.dataset.sample)));
  selectSample('512');
  document.querySelector('.sample-controls').hidden = false;

  const dialog = document.getElementById('figure-viewer');
  const image = document.getElementById('figure-image');
  let previousFocus;
  document.querySelectorAll('[data-figure]').forEach(button => {
    button.addEventListener('click', () => {
      previousFocus = button;
      image.src = button.dataset.figure;
      image.alt = button.querySelector('img').alt;
      const title = button.dataset.title;
      document.getElementById('figure-title').textContent = title[0].toUpperCase() + title.slice(1);
      document.getElementById('figure-original').href = button.dataset.pdf;
      dialog.showModal();
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => previousFocus?.focus({ preventScroll: true }));

  document.getElementById('copy-citation').addEventListener('click', async () => {
    const citation = document.getElementById('citation');
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(citation.textContent);
      status.textContent = 'BibTeX copied to clipboard.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(citation);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Citation selected. Press Ctrl+C or Command+C to copy.';
    }
  });
})();
