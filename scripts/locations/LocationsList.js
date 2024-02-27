import { getLocations } from '../database.js'

export const LocationsList = () => {
    const locations = getLocations()

    let htmlString = '<article class="locationsList"><h1>Places I Have Visited:</h2><ul class="ultimateLocation--list">'

    for (const location of locations) {

        htmlString += `<section class="location--list">

            <div class="location__name"><li>${location.location}: "${location.quote}"</li></div>  

        </section>
`
    }
    htmlString += `</ul></article>`

    return htmlString
}
