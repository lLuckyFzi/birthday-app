import { v4 as uuidv4 } from 'uuid'

export const menuData = [
    {
        id: uuidv4(),
        title: "Grab the Cats!",
        image: "/images/illustrations/chasing-cats.png",
        route: "/game/prologue-chasing-cats",
    },
    {
        id: uuidv4(),
        title: "XOX",
        image: "/images/illustrations/xox.png",
        route: "/game/prologue-tic-tac-toe"
    },
    {
        id: uuidv4(),
        title: "Greeting Cards",
        image: "/images/illustrations/greeting-cards.png",
        route: "/game/prologue-greeting-cards"
    },
    {
        id: uuidv4(),
        title: "Happy Birthday",
        image: "/images/illustrations/happy-birthday.png",
        route: "/game/prologue-puzzle"
    },
    {
        id: uuidv4(),
        title: "Wishing",
        image: "/images/illustrations/wishing.png",
        route: "/game/prologue-wishing-form"
    },
]