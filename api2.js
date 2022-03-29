
const newDate = new Date
const objDate = {
  date: newDate.getDate(),
  month: newDate.getMonth(),
  year: newDate.getFullYear()
}
console.log(objDate)
function previous() {
  let url = 'https://www.cbr-xml-daily.ru/daily_json.js'
  let array = new Array
  for (i = 0; i < 10; i++) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let date = data.Date
        console.log(data)
        let amount = data.Valute
        console.log(amount)
        let newObj = {
          day: date,
          value: amount
        }

        array.push(newObj)
        url = data.PreviousURL

      })

  }


return array
}
previous()

