import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { fetchCurrentCryptoPrice, getCryptos } from "../services/CryptoService";
import { CryptoCurrency, CryptoPrice, Pair } from "../types";

type CryptoStore = {
	cryptocurrencies: CryptoCurrency[];
	result: CryptoPrice;
	loading: boolean;
	fetchCryptos: () => Promise<void>;
	fetchData: (pair: Pair) => Promise<void>;
};

// Se crea el store
export const useCryptoStore = create<CryptoStore>()(
	devtools((set) => ({
		cryptocurrencies: [],
		// Se le inica que este objeto vacio lo trate como el typo CryptoPrice, lo mismo que si pusieramos un objeto con sus valores vacios
		result: {} as CryptoPrice,
		loading: false,

		// Acciones
		fetchCryptos: async () => {
			const cryptocurrencies = await getCryptos();
			set(() => ({
				cryptocurrencies,
			}));
		},
		fetchData: async (pair) => {
			set(() => ({
				loading: true,
			}));
			const result = await fetchCurrentCryptoPrice(pair);
			set(() => ({
				result,
				loading: false,
			}));
		},
	}))
);
