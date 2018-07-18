var ser = "";

function loadcurrencies(){
let basecurrency= document.getElementById("baseCurrency").value;
console.log(basecurrency);
ser = basecurrency;
let queryURL = `https://api.coindesk.com/v1/bpi/currentprice/${basecurrency}.json`;

fetch(queryURL).then( function (response) {
return response.json();
}).then(function(result){
	console.log(result);
	displayCurrentResult(result);
}).catch(function(error){
	alert("Something wrong happened")
});
}

function displayCurrentResult(res){
console.log(res);	
var updatedon= document.getElementById("updatedon");
updatedon.innerHTML=`Updated On ${res.time.updated}`;
var updatediso= document.getElementById("updatediso");
updatediso.innerHTML=`Updated ISO ${res.time.updatedISO}`;
var usd= document.getElementById("usd");
usd.innerHTML=`USD ${res.bpi.USD.rate}`;
var base= document.getElementById("base");
var basecurrency= document.getElementById("baseCurrency").value;
base.innerHTML=`${basecurrency} ${res["bpi"][`${basecurrency}`]["rate"]}`;
}

//end of bitcoin.js