import { getTips } from '../database.js'

export const TipsList = () => {
    const tips = getTips()

    let htmlString = '<aside class="tipsList"><h1>Tips & Tricks:</h1>'

    for (const tip of tips) {

        htmlString += `<section class="tip--card">
            <div class="tip__title">${tip.title}</div>
            <div class="tip__description">${tip.description}</div>
        </section>
`
    }
    htmlString += `</aside>`

    return htmlString
}
