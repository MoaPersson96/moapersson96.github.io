import TextImage from "../../components/text-image";
import TextImageReverse from "../../components/text-image-reverse";

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
        </main>
    );
}

export default WTextBild;