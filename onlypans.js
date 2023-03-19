if (document.addEventListener) {
    document.addEventListener("mousewheel", getPrice, false);
}

function getPrice(e) {
    if (window.location.href.indexOf("onlyfans") > -1) {
        if (document.getElementsByClassName("g-btn m-rounded post-subscribe-btn m-uppercase m-block mt-1").length > 0) {
            const prices = document.getElementsByClassName("g-btn m-rounded post-subscribe-btn m-uppercase m-block mt-1");
            var sum = 0
            var symbol = ""
            var items = 0
            for (var i = 0; i < prices.length; i++) {
                symbol = Array.from(prices[i].innerText)[11]
                items = i;
                var sum = sum + Math.round(prices[i].innerText.replace("UNLOCK FOR " + symbol, ""));
            }
            console.log("%s%s for %s items", sum, symbol, items+1)
        }
        if (document.getElementsByClassName("b-price g-semibold").length > 0) {
            const prices = document.getElementsByClassName("b-price g-semibold");
            var sum = 0
            var symbol = ""
            var items = 0
            for (var i = 0; i < prices.length; i++) {
                symbol = Array.from(prices[i].innerText)[0]
                items = i;
                sum = sum + Math.round(prices[i].innerText.replace(symbol, ""));
            }
            console.log("%s%s for %s items", sum, symbol, items+1)
        }
    }
}
