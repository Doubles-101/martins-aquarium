import { getLocations } from '../database.js'

export const LocationsList = () => {
    const locations = getLocations()

    let htmlString = '<article class="locationsList"><ul>'

    for (const location of locations) {

        htmlString += `<section class="location--list">

            <div class="location__name"><li>${location.location}</li></div>  

        </section>
`
    }
    htmlString += `</ul></article>`

    return htmlString
}
