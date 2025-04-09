import MainPages from '../pages/Main/Main'
import type { Route } from './+types/main';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "BIRTHDAY!" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Main() {
    return <MainPages />
}