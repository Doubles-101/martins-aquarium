import { FishList } from "./fish/FishList.js"
import { TipsList } from "./tips/TipsList.js"
import { LocationsList } from "./locations/LocationsList.js"

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector("#container")


parentHTMLElement.innerHTML = FishList()
parentHTMLElement.innerHTML += TipsList()
parentHTMLElement.innerHTML += LocationsList()