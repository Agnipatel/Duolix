export function calcDiscountedPrice(price: number, discountPercent?: number) {
  if (!discountPercent || discountPercent <= 0)
    return { discountedPrice: price, savings: 0 };

  const savings = (price * discountPercent) / 100;
  const discountedPrice = Math.round((price - savings) * 100) / 100;

  return { discountedPrice, savings: Math.round(savings * 100) / 100 };
}
