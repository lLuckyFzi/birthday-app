import GreetingCardsProloguePage from '../../pages/GreetingCards/Prologue'
import type { Route } from '../+types/main';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "BIRTHDAY!" },
        { name: "description", content: "Your happy day!" },
    ];
}

export default function GreetingCardsPrologue() {
    return <GreetingCardsProloguePage />
}