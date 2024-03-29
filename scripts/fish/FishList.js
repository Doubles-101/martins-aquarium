import { mostHolyFish, soldierFish, nonHolyFish } from '../database.js'

export const FishList = () => {

    const sortedFish = mostHolyFish().concat(soldierFish()).concat(nonHolyFish())
    
    let htmlString = '<article class="fishList">'

    for (const fish of sortedFish) {

        htmlString += `<section class="fish--card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">Size: ${fish.size}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">Food: ${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}