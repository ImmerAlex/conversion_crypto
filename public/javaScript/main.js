const ContentBurger = document.querySelector('.ContentBurger');
const ContainerItemNav = document.querySelector('.ContainerItemNav');

ContentBurger.addEventListener("click", () => {
    ContentBurger.classList.toggle("Active")
    ContainerItemNav.classList.toggle("Active")
})


var PriceBtc = new WebSocket("wss://stream.binance.com:9443/ws/btceur@trade");
var LastPriceBtc = 0
const BtcPrice = document.querySelector('#BtcPrice');

PriceBtc.onmessage = (event) => {
    var PriceBtc = parseFloat(JSON.parse(event.data).p).toFixed(2);

    const InputNbrBtc = document.getElementById('InputNbrBtc');
    const ResultConvertBtc = document.getElementById('ResultConvertBtc');
    InputNbrBtc.addEventListener("input", () => {
        ResultConvertBtc.innerHTML = parseFloat(InputNbrBtc.value * PriceBtc).toFixed(2)
    })

    if (PriceBtc < LastPriceBtc) {
        BtcPrice.innerHTML = PriceBtc + "€";
        BtcPrice.style.color = "crimson";
        LastPriceBtc = PriceBtc;
    }
    else if (PriceBtc > LastPriceBtc) {
        BtcPrice.innerHTML = PriceBtc + "€";
        BtcPrice.style.color = "lime";
        LastPriceBtc = PriceBtc;
    }
    else if (PriceBtc === LastPriceBtc) {
        BtcPrice.innerHTML = PriceBtc + "€";
        BtcPrice.style.color = "black";
        LastPriceBtc = PriceBtc;
    };
};


var PriceEth = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");
var LastPriceEth = 0
const EthPrice = document.querySelector('#EthPrice');

PriceEth.onmessage = (event) => {
    var PriceEth = parseFloat(JSON.parse(event.data).p).toFixed(2);

    const InputNbrEth = document.getElementById('InputNbrEth');
    const ResultConvertEth = document.getElementById('ResultConvertEth');
    InputNbrEth.addEventListener("input", () => {
        ResultConvertEth.innerHTML = parseFloat(InputNbrEth.value * PriceEth).toFixed(2)
    })

    if (PriceEth < LastPriceEth) {
        EthPrice.innerHTML = PriceEth;
        EthPrice.style.color = "crimson";
        LastPriceEth = PriceEth;
    }
    else if (PriceEth > LastPriceEth) {
        EthPrice.innerHTML = PriceEth;
        EthPrice.style.color = "lime";
        LastPriceEth = PriceEth;
    }
    else if (PriceEth === LastPriceEth) {
        EthPrice.innerHTML = PriceEth;
        EthPrice.style.color = "black";
        LastPriceEth = PriceEth;
    };
};


var PriceBnb = new WebSocket("wss://stream.binance.com:9443/ws/bnbeur@trade");
var LastPriceBnb = 0
const BnbPrice = document.querySelector('#BnbPrice');

PriceBnb.onmessage = (event) => {
    var PriceBnb = parseFloat(JSON.parse(event.data).p).toFixed(2);

    const InputNbrBnb = document.getElementById('InputNbrBnb');
    const ResultConvertBnb = document.getElementById('ResultConvertBnb');
    InputNbrBnb.addEventListener("input", () => {
        ResultConvertBnb.innerHTML = parseFloat(InputNbrBnb.value * PriceBnb).toFixed(2)
    })

    if (PriceBnb < LastPriceBnb) {
        BnbPrice.innerHTML = PriceBnb;
        BnbPrice.style.color = "crimson";
        LastPriceBnb = PriceBnb;
    }
    else if (PriceBnb > LastPriceBnb) {
        BnbPrice.innerHTML = PriceBnb;
        BnbPrice.style.color = "lime";
        LastPriceBnb = PriceBnb;
    }
    else if (PriceBnb === LastPriceBnb) {
        BnbPrice.innerHTML = PriceBnb;
        BnbPrice.style.color = "black";
        LastPriceBnb = PriceBnb;
    };
};
