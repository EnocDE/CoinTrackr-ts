import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../stores/store";
import { Pair } from "../types";
import Alert from "./Alert";

export default function CryptoSearchForm() {
	const { cryptocurrencies, fetchCryptos, fetchData } = useCryptoStore();
  const [pair, setPair] = useState<Pair>({
    currency: '',
    cryptocurrency: ''
  })
  const [message, setMessage] = useState('')

	useEffect(() => {
		fetchCryptos();
	}, []);

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    setPair({
      ...pair,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (Object.values(pair).includes('')) {
      setMessage('Todos los campos son obligatorios');
      return
    }
    setMessage('')
    // LLamar a la API
    fetchData(pair)
  }

	return (
		<form className="form" onSubmit={handleSubmit}>
      {message && <Alert message={message} />}
			<div className="field">
				<label htmlFor="currency">Moneda</label>
				<select name="currency" id="currency" value={pair.currency} onChange={handleChange}>
					<option value="" disabled>
						-- Selecciona --
					</option>
					{currencies.map((currency) => (
						<option key={currency.code} value={currency.code}>
							{currency.name}
						</option>
					))}
				</select>
			</div>

			<div className="field">
				<label htmlFor="criptocurrency">Crypto</label>
				<select name="cryptocurrency" id="cryptocurrency" value={pair.cryptocurrency} onChange={handleChange}>
					<option value="" disabled>
						-- Selecciona --
					</option>
					{cryptocurrencies.map((crypto) => (
						<option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>
							{crypto.CoinInfo.FullName}
						</option>
					))}
				</select>
			</div>

			<input type="submit" value="Buscar" />
		</form>
	);
}
