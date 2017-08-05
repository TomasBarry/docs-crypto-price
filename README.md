# docs-crypto-price
Get the price of cryptocurrencies in Google Docs

### How to use

1. In Google Sheets open Tools > Script Editor
2. Paste the contents of code.gs into the editor, replacing what is there
3. Save the project. Give it a meaningful name, something like CryptoPrice
4. Run the code by pressing the play button (between the bug and the magnifying glass)
   * You may be required to review and accept permissions
5. Back in your Google Sheets doc, you can use the function:
   * `=cryptoPrice("ETH", "EUR")`
   * This will fill in the current price of Ethereum in Euro into the cell
