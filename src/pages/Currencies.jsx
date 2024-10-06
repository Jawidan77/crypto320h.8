import {Link} from "react-router-dom";

export default function Currencies (props) {
    const curencies = [
        { name: "Bitcoin", Symbol: "BTC"},
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        {name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },
    ];

    return (
        <div className="currencies">
            {curencies.map((coin)=>{
                const {name, symbol} = coin;

                return(
                    <Link key={name} to={`/price/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                );
            })}

        </div>
    );
    }