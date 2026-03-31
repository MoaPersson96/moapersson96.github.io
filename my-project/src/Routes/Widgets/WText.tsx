import TextBox from "../../components/TextBox";

function WText() {
    return (
        <main className="grow flex flex-col items-center justify-center text-center" role="main">
            <TextBox
                title="Möjligheterna på campus"
                text="På Campus Skellefteå finns både Luleå tekniska universitet, Umeå universitet och ett nära samarbete med Mälardalens högskola och Folkuniversitetet. Dessutom kan du ta del av internationella universitets utbud via onlinekurser från några av världens bästa lärosäten.

Det är ingen slump att spelindustrin har vuxit sig stark i Skellefteå. På Campus Skellefteå hittar du ett flertal utbildningar inom området och ett kreativt kluster med mötesplatser för spelutvecklare – bland annat Game Jams, föreläsningar, pitchtävlingar, resor till spelmässor och den årliga konferensen Arctic Game Conference.

YH-utbildningarna är kortare än universitetsutbildningarna och tas fram i nära samarbete med företag i branscher som söker kompetent arbetskraft. På Campus Skellefteå finns bland annat utbildningar inom spel, IT och kreativa näringar, industri och tillverkning samt vård och samhälle. Här fungerar Campus som en nod i Vigeo – en ny test- och demonstrationsmiljö för digitalisering och digital infrastruktur för livslångt lärande."
                background={true}
            />
            <TextBox
                title="Studera"
                text="Vuxnas motiv att börja studera är olika. Du kanske vill utveckla din yrkeskompetens och framskrida i karriären. En del önskar slutföra studier som kommit av sig och andra studerar för nöjes skull eller för att man har ett bestämt mål. Om du valt att studera på annan ort men bor i Skellefteå så kan du ha rätt till ett antal fördelar som pendlingsbidrag, möjlighet att skriva tenta eller annan hjälp i dina studier via Studentcentrum på Campus Skellefteå."
                background={false}
            />
        </main>
    );
}

export default WText;