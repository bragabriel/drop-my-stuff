const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function formatPrice(price: number): string {
  return currencyFormatter.format(price);
}

export function formatLot(id: number): string {
  return id.toString().padStart(2, '0');
}
