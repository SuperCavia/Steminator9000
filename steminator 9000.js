// This file is supposed to be invisible by super sneaky encryption
async function main() {
  const kanidaten = await fetchData('kandidaten.json')
  console.log(kanidaten)
  for (var nummer = 0; nummer < kanidaten.length ;nummer++) {
    const btn = CreateButtons(nummer, kanidaten[nummer])
  }
}

function ConfirmOption(event){
  var btn = event.target;
  console.log(btn.innerHTML)
  if (confirm("Do you want to vote on " + btn.innerHTML + "?")) {
    // Hier komt code die het gekoze antwoord encrypt en doorstuurt naar de opslagplek
   location.href = "login.html"
  }
  else {
    console.log("derp")
    // Do nothing!
  }
}

function CreateButtons(nummer, naam) {
  var btn = document.createElement("BUTTON");          // Create a <button> element
  btn.addEventListener('click', ConfirmOption);
  btn.innerHTML = naam;                                // Insert text
  document.body.appendChild(btn);                      // Append <button> to <body>
  btn.id = nummer                                      // Give button unique id
  btn.className = "mens"                               // Give button mens class
  return btn;
}

function fetchData(jsonFile) {
  return fetch(jsonFile).then(r=>r.json())
}

main();
