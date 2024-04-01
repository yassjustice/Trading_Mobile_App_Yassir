import axios from "axios";

const stockApi = axios.create({
    baseURL: "https://v8mnfh1qh1.execute-api.us-east-2.amazonaws.com/dev/trading/",
    headers: {
        "Content-Type": "application/json",
    },
});


// getTopStocksRecommendations
export function getTopStocksRecommendations() {
    return stockApi.get('/getTopStocksRecommendations');
}



// getSilver_symbols
export function getSilver_symbols() {
    return stockApi.get('/getSilver_symbols');
}

// getGold_symbols
export function getGold_symbols() {
    return stockApi.get('/getSilver_symbols');
}

// getSpot_Oil
export function getSpot_Oil() {
    return stockApi.get('/getSpot_Oil');
}

// getSpot_Commodities
export function getSpot_Commodities() {
    return stockApi.get('/getSpot_Commodities');
}

// getCFD_Shares
export function getCFD_Shares() {
    return stockApi.get('/getCFD_Shares');
}

// getFuture_Metals
export function getFuture_Metals() {
    return stockApi.get('/getFuture_Metals');
}

// createorder
// this way :
// {
//     "symbol_name":"US30",
//     "lot":0.01,
//     "price": 1300,
//     "order_type":"sell"
// }
export function createorder(order) {
    return stockApi.post('/createorder',order);
}

// decisionrec
export function decisionrec() {
    return stockApi.post('/decisionrec');
}



// tabs : 


// getforex_symbols
export function getforex_symbols() {
    return stockApi.get('/getforex_symbols');
}


// getcrypto_symbols
export function getcrypto_symbols() {
    return stockApi.get('/getcrypto_symbols');
}

// getIndices_symbols
export function getIndices_symbols() {
    return stockApi.get('/getIndices_symbols');
}

// getCash_Indices (Stock)
export function getCash_Indices() {
    return stockApi.get('/getCash_Indices');
}


//all :
// getsymbolsname
export function getsymbolsname() {
    return stockApi.get('/getsymbolsname');
}

// getsymbolbyname
export function getsymbolbyname(symbolData) {
    return stockApi.post('/getsymbolbyname', symbolData);
}