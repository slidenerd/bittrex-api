const bittrex = require('../bittrex-api')();

console.log('Connecting ....');
bittrex.websockets.listen(function (data, wsclient) {
  if (data.M === 'updateSummaryState') {
    data.A.forEach(function (data_for) {
      data_for.Deltas.forEach(function (marketsDelta) {
        console.log('Ticker Update for ' + marketsDelta.MarketName, marketsDelta);
      });
    });
  }
})
  .then(function (wsclient) {
    console.log('serviceHandlers:', wsclient.serviceHandlers);
  });
