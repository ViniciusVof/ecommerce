export function formatMoney(
  value: number,
  currency: string = "BRL",
  language: string = "pt-br"
): string {
  return value.toLocaleString(language, {
    style: "currency",
    currency: currency,
  });
}
