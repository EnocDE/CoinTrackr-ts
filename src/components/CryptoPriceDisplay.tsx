import { useMemo } from "react";
import { useCryptoStore } from "../stores/store";
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {
	const { result, loading } = useCryptoStore();
	const hasResult = useMemo(
		() => Object.entries(result).length !== 0,
		[result]
	);

	return (
		<div className="crypto">
			{loading ? (
				<Spinner />
			) : (
				hasResult && (
					<>
						{/* <h2>Datos</h2> */}
						<div className="crypto-content">
							<img
								src={`https://cryptocompare.com/${result.IMAGEURL}`}
								alt="icono crypto"
							/>
							<div className="crypto-data">
								<p>
									Precio actual: <span>{result.PRICE}</span>
								</p>
								<p>
									Precio más alto: <span>{result.HIGHDAY}</span>
								</p>
								<p>
									Precio más bajo: <span>{result.LOWDAY}</span>
								</p>
								<p>
									Variación ultimas 24hrs: <span>{result.CHANGEPCT24HOUR}</span>
								</p>
								<p>
									Última actualización: <span>{result.LASTUPDATE}</span>
								</p>
							</div>
						</div>
					</>
				)
			)}
		</div>
	);
}
