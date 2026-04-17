import TextImage from "../../components/text-image";
import TextImageReverse from "../../components/text-image-reverse";
import TextImage2 from "../../components/text-image2";

function WTextBild() {
    return (
        <main className="grow flex flex-col items-center justify-center text-center" role="main">
            <TextImage
                image="https://skelleftea.se/images/200.661ce830197a1dc5fe4b25/1750841987293/Profilbild%20PLVM.jpg"
                eyebrow="Jobba i Skellefteå"
                title="Bygg framtiden med oss!"
                description="Vi behöver dig och din kompetens. Med många jobb i platsbankerna finns det en hel del att välja mellan."
                primaryCta={{
                    text: "Vägar till en (ny) karriär",
                    href: "/",
                }}
                secondaryCta={{
                    text: "Upptäck alla lediga jobb",
                    href: "/",
                }}
            />
            <TextImageReverse
                image="https://skelleftea.se/images/200.661ce830197a1dc5fe4b25/1750841987293/Profilbild%20PLVM.jpg"
                eyebrow="Jobba i Skellefteå"
                title="Bygg framtiden med oss!"
                description="Vi behöver dig och din kompetens. Med många jobb i platsbankerna finns det en hel del att välja mellan."
                primaryCta={{
                    text: "Vägar till en (ny) karriär",
                    href: "/",
                }}
                secondaryCta={{
                    text: "Upptäck alla lediga jobb",
                    href: "/",
                }}
            />
            <TextImage2
                image="https://www.svtstatic.se/image-news/1280/16:9/0.5/0.5/e-1151236-1366296901000"
                title="En stad som fortsätter att våga"
                text="När Society Expo drar igång våren 2026 kommer alla – från invånare och idéskapare till forskare och beslutsfattare – att samlas för att forma framtiden på ett smart och hållbart sätt."
                link="/"
                linkText="Society Expo 2026"
                lowerText="Extra välkommen till Skellefteå 27 maj - 9 juni!"
            />
        </main>
    );
}

export default WTextBild;