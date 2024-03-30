import { Output } from "valibot"
import { CryptoCurrencyResponseSchema, CryptoPriceSchema, CurrencySchema, PairScheme } from "../schema/crypto-schema"

export type Currency = Output<typeof CurrencySchema>
export type CryptoCurrency = Output<typeof CryptoCurrencyResponseSchema>
export type Pair = Output<typeof PairScheme>
export type CryptoPrice = Output<typeof CryptoPriceSchema>