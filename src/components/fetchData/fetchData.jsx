import axios from 'axios' 

export function getExchangeRate(fromCurrency, toCurrency){ 

    const options = { 
        method: 'GET', 
        url: 'https://alpha-vantage.p.rapidapi.com/query', 
        params: { from_currency: fromCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: toCurrency }, 
        headers: { 'X-RapidAPI-Key': '420dd1149emshb4f7cfe487bac6bp16b715jsn9ae42c37d8bd', 'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com' } 
    }; 
    
    return axios.request(options)
        .then(res => { return res.data; })
        .catch((err) => { return err; }) 

}