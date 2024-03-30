import { array, object, string } from "valibot";

export const CurrencySchema = object({
	code: string(),
	name: string(),
});

export const CryptoCurrencyResponseSchema = object({
	CoinInfo: object({
		Id: string(),
		Name: string(),
		FullName: string(),
	}),
});

export const CryptoCurrenciesResponseSchema = array(
	CryptoCurrencyResponseSchema
);

export const PairScheme = object({
  currency: string(),
  cryptocurrency: string()
})

export const CryptoPriceSchema = object({
  IMAGEURL: string(),
  PRICE: string(),
  HIGHDAY: string(),
  LOWDAY: string(),
  CHANGEPCT24HOUR: string(),
  LASTUPDATE: string()
})