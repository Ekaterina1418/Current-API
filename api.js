const url = 'https://www.cbr-xml-daily.ru/daily_json.js'

async function setValute() {

    const response = await fetch(url)
    const data = await response.json()


    let procent
    for (key in data.Valute) {
        let numberOne = data.Valute[key].Value
        let numberTwo = data.Valute[key].Previous
        if (numberOne > numberTwo) {
            procent = ' + ' + Math.round((numberOne - numberTwo) / numberTwo * 100)

        } else if (numberOne < numberTwo) {
            procent = ' - ' + Math.round((numberTwo - numberOne) / numberTwo * 100)



            const newDate = new Date().toLocaleDateString()
            document.querySelector('.title').innerHTML = 'Курс валют на ' + newDate
            let currencyHtml = document.querySelector('.currency-block')
            let currency = document.querySelector('.currency')
            let procentDiv = document.querySelector('.procent')

            let newSelect = document.createElement('details')
            let newOption = document.createElement('summary')
            let paragraph = document.createElement('p')
            let procentHtml = document.createElement('p')


            newOption.classList.add('currency-option')
            newSelect.classList.add('currency-select')
            paragraph.classList.add('currency-paragraph')
            procentHtml.classList.add('currency-procent')
            currencyHtml.prepend(newSelect)
            newSelect.prepend(newOption)
            currency.prepend(paragraph)
            procentDiv.prepend(procentHtml)
            document.querySelector('.currency-option').innerHTML = data.Valute[key].CharCode
            document.querySelector('.currency-paragraph').innerHTML = numberOne
            document.querySelector('.currency-procent').innerHTML = procent + '%'


            const day = data.PreviousDate
            let newDay = new Date(day).toLocaleDateString()
            console.log(day)
            let selectDay = document.querySelector('.currency-option')
            let optionDay = document.createElement('summary')
            let span = document.createElement('span')
            selectDay.after(optionDay)
            optionDay.classList.add('option-day')
            let addOption = document.querySelector('.option-day').innerHTML = newDay
            optionDay.append(span)
            span.classList.add('currency-span')
            document.querySelector('.currency-span').innerHTML = data.Valute[key].Previous.toFixed(2)
        }
    }


}


setValute()
