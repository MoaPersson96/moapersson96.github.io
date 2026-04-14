import ImageCTA from "../../components/cta/ImageCTA";
import CTATextCenter from "../../components/cta/CTATextCenter";
import CTATextLeft from "../../components/cta/CTATextLeft";
import CTATextRight from "../../components/cta/CTATextRight";
import CallToAction1 from "../../components/CallToAction1";
import CallToAction2 from "../../components/cta/CTAButtonUnder";

function WCTA() {
    return (
        <main className="grow w-full" role="main">
            {/* INNEHÅLL HÄR */}

            <div className="px-4 mt-5">
                <ImageCTA
                    title="Lorem ipsum dolor sit"
                    description="Quisque faucibus ex sapien vitae pellentesque sem placerat."
                    buttonText="Läs mer!"
                    image="/images/LTUNatt.webp"
                    href="#"
                />
            </div>

            <div className="px-4 mt-5">
                <CTATextLeft
                    title="Lorem ipsum dolor sit amet"
                    description="Quisque faucibus ex sapien vitae pellentesque sem placerat. Donec a nisi sed enim efficitur efficitur."
                    buttonText="Läs mer!"
                    href="#"
                />
            </div>

            <div className="px-4 mt-5">
                <CTATextCenter
                    title="Lorem ipsum dolor sit amet"
                    description="Quisque faucibus ex sapien vitae pellentesque sem placerat. Donec a nisi sed enim efficitur efficitur."
                    buttonText="Läs mer!"
                    href="#"
                />
            </div>

            <div className="px-4 mt-5">
                <CTATextRight
                    title="Lorem ipsum dolor sit amet"
                    description="Quisque faucibus ex sapien vitae pellentesque sem placerat. Donec a nisi sed enim efficitur efficitur."
                    buttonText="Läs mer!"
                    href="#"
                />
            </div>

            <div className="mt-5">
                <CallToAction1
                    title="Lorem ipsum dolor sit amet"
                    buttonText="Läs mer!"
                    buttonAction={() => alert("Call to action button clicked!")}
                    href="#"
                />
            </div>

            <div className="mt-5 mb-5">
                <CallToAction2
                    title="Lorem ipsum dolor sit amet"
                    buttonText="Läs mer!"
                    buttonAction={() => alert("Call to action button clicked!")}
                    href="#"
                />
            </div>

        </main>
    );
}

export default WCTA;
