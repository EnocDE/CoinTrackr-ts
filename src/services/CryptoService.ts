import axios from "axios";
import { parse } from "valibot";
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema";
import { Pair } from "../types";

// LLamado a la API
export async function getCryptos() {
	const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=25&tsym=USD";
	const { data: { Data }, } = await axios(url);
  // Aqui se necesita el type que se declaro con un array de objetos #nota: no permite usar [] en el type
	const result = parse(CryptoCurrenciesResponseSchema, Data); 
	if (result) {
		return result
	}
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`
  const { data: { DISPLAY } } = await axios(url);
  console.log(DISPLAY);
  
  const result = parse(CryptoPriceSchema, DISPLAY[`${pair.cryptocurrency}`][`${pair.currency}`]);
  if (result) {
    return result
  }
  
}