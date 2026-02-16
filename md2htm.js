javascript:(function(){ /* lives under cc-by-sa */
  const selection = window.getSelection().toString();
  if(!selection) { alert('Bitte markiere zuerst eine Markdown-Tabelle!'); return; }
  
  const rows = selection.trim().split('\n');
  if(rows.length < 2) return;

  let html = '<table border="1" style="border-collapse:collapse; width:100%">\n';
  
  rows.forEach((row, index) => {
    /* Trenner-Zeile (---|---) überspringen */
    if (index === 1 && row.includes('---')) return;
    
    const cells = row.split('|').filter(cell => cell.trim() !== '' || row.startsWith('|') && row.endsWith('|'));
    const tag = (index === 0) ? 'th' : 'td';
    
    html += '  <tr>\n';
    cells.forEach(cell => {
      if(cell.trim() || cells.length > 1) {
        html += `    <${tag} style="padding:8px">${cell.trim()}</${tag}>\n`;
      }
    });
    html += '  </tr>\n';
  });
  
  html += '</table>';

  /* Ergebnis in die Zwischenablage kopieren */
  navigator.clipboard.writeText(html).then(() => {
    alert('HTML-Tabelle wurde in die Zwischenablage kopiert!');
  });
})();
