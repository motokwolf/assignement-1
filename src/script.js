document.addEventListener("DOMContentLoaded", function(){
    console.log("Ready!")

    function getElement() {
    fetch("https://periodictable.p.rapidapi.com/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3219b27cd3msh7e6c60d0d96a498p1f282cjsn3b2bf50000a2",
		"x-rapidapi-host": "periodictable.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
    let todayElement = response[Math.floor(Math.random() * response.length)];
    console.log(todayElement)

    let eleNum = document.getElementById('eleNum');
    console.log(eleNum)

    eleNum.innerHTML = (`<h3 style="text-align: left;">${todayElement.atomicNumber}</h3>
    <h1 style="font-size: 3em; text-align: center;">${todayElement.symbol}</h1>
    <h3 style="text-align: right;">${todayElement.name}</h3>`);

    let eleCard = document.getElementById('eleCard');
    console.log(eleCard);

    eleCard.innerHTML = (`<h1 style="margin-bottom:0;">${todayElement.name} (${todayElement.symbol})<sup>${todayElement.atomicNumber}</sup></h1>
    <h3 style="opacity:.6;">${todayElement.groupBlock}</h3>
    <ul style="margin-top:2.6em">
        <li>Atomic mass: <span>${todayElement.atomicMass}</span></li>
        <li>Density (at STP): <span>${todayElement.density}</span></li>
        <li>Melting: <span>${todayElement.meltingPoint}</span></li>
        <li>Boiling: <span>${todayElement.boilingPoint}</span></li>
    </ul>
    <p>${todayElement.facts}</p>
    <p>${todayElement.history}</p>`)

    function newGradient() {
        var c1 = {
              r: Math.floor(255),
              g: Math.floor(35-Math.random()*225),
              b: Math.floor(Math.random()*255)
            };
            var c2 = {
              r: Math.floor(255),
              g: Math.floor(35+Math.random()*220),
              b: Math.floor(35+Math.random()*80)
            };
        c1.rgb = 'rgb('+c1.r+','+c1.g+','+c1.b+')';
        c2.rgb = 'rgb('+c2.r+','+c2.g+','+c2.b+')';
        return 'linear-gradient(340deg, '+c1.rgb+', '+c2.rgb+')';
      }
      
      function rollBg() {
        document.getElementById('symbol-bg').style.background = newGradient()
      }
      rollBg();
})


.catch(err => {
	console.error(err);
});
}


    getElement();
    document.getElementById("randomEle").addEventListener("click", function() {
        getElement();
    })
  
})