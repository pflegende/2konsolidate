https://share.google/aimode/R7cKvbbUyO2F9vfOm
based on https://github.com/element-hq/element-web/issues/9735#issuecomment-1048557103
by gemini 16.2.2026, 03:46:24 https://share.google/aimode/R7cKvbbUyO2F9vfOm
will be off on 23.2.2026, 02:46
lives also on https://matrix.to/#/!FaSNYYihxMGhPlwGvv:matrix.org/$-trZKFLR7kNW0ALt4EnPpsvhMt_r6P2WBlKLgYsAZI4?via=matrix.org

# md2html for use table2matrix

do:

- be aware to use separate post for the table
- mark all md.formated table
- start bml md2html (in opera.LZL.t.md2htm) or use code below
- include clipboard instead of marked table
- set prefix `/html`  followed by blank before first `<table>`

```
/* js best pra ctice  */

javascript:(function(){
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

/* js best practice  EOF */
```
