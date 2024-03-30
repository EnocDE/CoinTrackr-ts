import CryptoPriceDisplay from "./components/CryptoPriceDisplay";
import CryptoSearchForm from "./components/CryptoSearchForm";
import Header from "./components/Header";

function App() {
	return (
		<div className="dots">
			<main className="blurred-bg">
				<Header />

				<h2 className="subtitle">
					Busca tus cryptos favoritas y mantente al dia
				</h2>

				<div className="content">
					<CryptoSearchForm />
          <CryptoPriceDisplay />
				</div>

			</main>
		</div>
	);
}

export default App;
