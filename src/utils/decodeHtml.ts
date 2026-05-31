export const decodeHtml = (text: string) => {
  const decoded = text
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&#39;', "'")
    .replaceAll('&quot; ', '"')
    .replaceAll('&amp;', '&');

  return decoded;
};