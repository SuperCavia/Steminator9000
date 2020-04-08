// This file is supposed to be invisible by super sneaky encryption
//de async commando's maken van de inhoud van de .json file inhooud een array
async function second() {
  const lmao = await fetchData('extern bestand.json')
  return lmao;
}
async function third() {
  const old = await fetchData('extern bestand backup.json')
  return old;
}
//zodra je op de button klikt word gekeken naar de inhoud van de imput
async function myFunction(){
  Temp = hallo.value
  console.log(Temp)
  var lmao = await second()
  var old = await third()
  if (lmao.includes(Temp)){
    console.log(lmao);
    const index = lmao.indexOf(Temp);
    if (index > -1) {
      lmao.splice(index, 1);
    }
    console.log(lmao);
//Hier komt het deel van de code die "extern bestand.json" aanpast naar de nieuwe "lmao" varriable om hergebruik code's te voorkomen
  location.href = "steminator 9000.html"
  }
  else if (old.includes(Temp)){
    //als je een oude code invult en dus iemand je wachtwoord heeft gestolen, krijg je een error die je vraagt hulp te zoeken
    alert("Error: Deze code is al eerder gebruikt, indien u denkt dat dit een fout is contacteer alstublieft een medewerker")
  }
}
//nodig voor importeren van de .json files
function fetchData(jsonFile) {
  return fetch(jsonFile).then(r=>r.json())
}
