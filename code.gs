function cryptoPrice(crypto, currency) {
  var url = 'https://min-api.cryptocompare.com/data/price?fsym=' + crypto + '&tsyms=' + crypto + ',' + currency;
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  return data[currency];
}
