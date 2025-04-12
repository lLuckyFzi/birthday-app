import WishingFormPage from '../../pages/WishingForm/WishingForm'
import type { Route } from '../+types/main';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "BIRTHDAY!" },
        { name: "description", content: "Your happy day!" },
    ];
}

export default function WishingForm() {
    return <WishingFormPage />
}