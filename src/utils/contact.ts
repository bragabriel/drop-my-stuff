import type { Item } from '../types/item';
import { formatLot } from './format';

export const INSTAGRAM_URL = 'https://www.instagram.com/gabrielbraga.gbs/';
export const WHATSAPP_NUMBER = '5519982930667';

export function whatsappLinkFor(item: Item): string {
  const message = `Oi Gabriel! Tenho interesse no lote ${formatLot(item.id)} — ${item.title}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
