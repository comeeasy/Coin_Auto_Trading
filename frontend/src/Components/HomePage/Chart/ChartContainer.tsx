/* eslint-disable camelcase */
import React from 'react'
import './ChartContainer.css'
import ChartItem from './ChartItem'

interface CoinInfo {
    buy_price?: number;
    buy_time?: string;
    fee?: number;
    name?: string;
    ticker?: string;
}

interface Coins {
    coins: [CoinInfo]
}

function ChartContainer({ coins }: Coins) {
    return (
        <>
            <div className='chartContainer'>
                { coins.map((coin) => (
                    <ChartItem key={coin.ticker} buyPrice={coin.buy_price} buyTime={coin.buy_time} fee={coin.fee} name={coin.name} ticker={coin.ticker} />
                ))}
            </div>
        </>
    )
}

export default ChartContainer