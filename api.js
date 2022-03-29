fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(res => res.json())
    .then(data => setValute(data))



function setValute(data) {
    let procent
    for (key in data.Valute) {
        let numberOne = data.Valute[key].Value
        let numberTwo = data.Valute[key].Previous
        if (numberOne > numberTwo) {
            procent = ' + ' + Math.round((numberOne - numberTwo) / numberTwo * 100)  

        } else if (numberOne < numberTwo) {
            procent = ' - ' + Math.round((numberTwo - numberOne) / numberTwo * 100)
           

        }

      document.body.insertAdjacentHTML('afterend', `
      <ul class="list-info">
         <li><button onclick="eventButton(event)">${data.Valute[key].CharCode}</button></li>
         <li>${data.Valute[key].Value}</li>
         <li>${procent}%</li> 
        </ul>
         `)

   }

}
function eventButton (event) {
console.log(event.target)
}