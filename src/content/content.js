console.log('Dev Helper [Content Script]: Ativo nesta página.');

try {
  const links = document.querySelectorAll('a');
  if (links.length > 0) {
    links.forEach(link => {
      link.style.outline = '2px solid #3498db';
    });
    console.log(`Dev Helper: ${links.length} links destacados.`);
  }
} catch (error) {
  console.error('Dev Helper: Falha ao destacar links.', error);
}