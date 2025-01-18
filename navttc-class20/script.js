$(document).ready(function() {
    $('#stockForm').on('submit', function(e) {
        e.preventDefault();
        const symbol = $('#symbol').val();
        const apiKey = 'YOUR_API_KEY_HERE';  // Replace with your Alpha Vantage API key
        const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data) {
                if (data["Global Quote"] && data["Global Quote"]["05. price"]) {
                    const price = parseFloat(data["Global Quote"]["05. price"]).toFixed(2);
                    $('#result').html(`<p>Current price of <strong>${symbol}</strong>: $${price}</p>`);
                } else {
                    $('#result').html(`<p>Stock symbol not found. Please try again.</p>`);
                }
            },
            error: function() {
                $('#result').html(`<p>There was an error fetching the stock price. Please try again later.</p>`);
            }
        });
    });
});
