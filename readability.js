async () => {
  const readability = await import('https://cdn.jsdelivr.net/npm/@mozilla/readability@0.6.0/+esm');
  return (new readability.Readability(document)).parse();
}
