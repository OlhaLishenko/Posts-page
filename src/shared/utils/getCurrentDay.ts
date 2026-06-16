export function getCurrentDay() {
  const date = new Date();

  const formatted = date
    .toLocaleDateString('uk-UA', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    .replace(/\./g, '-');

  return formatted;
}
