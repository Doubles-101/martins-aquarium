import { getTips } from '../database.js'

export const TipsList = () => {
    const tips = getTips()

    let htmlString = '<aside class="locationList">'

    for (const tip of tips) {

        htmlString += `<section class="fish--card">
            <div class="tip__title">${tip.title}</div>
            <div class="tip__description">${tip.description}</div>
        </section>
`
    }
    htmlString += `</aside>`

    return htmlString
}
