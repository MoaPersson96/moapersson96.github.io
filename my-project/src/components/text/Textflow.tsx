export default function TextFlow() {
    return (
        <section className="w-full max-w-3xl px-4 md:px-0 mx-auto my-20 text-left text-black">
            <article>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">H1 - Artikel titel</h1>

                <p className="mb-5 text-lg">
                    Detta är ett vanligt stycke – så här ser{" "} 
                    <strong>fet text</strong>,{" "}
                    <em>kursiv text</em>, en{" "}
                    <a href="#" className="text-blue-600 underline underline-offset-2 hover:text-blue-700 transition-colors">länk</a>{" "}
                    och{" "}
                    <code className="px-1.5 text-sm font-mono">inline kod</code> ut.
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-14 mb-3">H2 - Sektion</h2>
                <p className="mb-5">
                    Detta visar hur spacing mellan rubrik och text ser ut i temat.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-3">H3 - Underrubrik</h3>

                <ul className="list-decimal pl-6 mb-6 space-y-1 marker:text-gray-700">
                    <li>Lista item 1</li>
                    <li>Lista item 2</li>
                    <li>Lista item 3</li>
                </ul>

                <ol className="list-decimal pl-6 mb-6 space-y-1 marker:text-gray-700">
                    <li>Första punkt</li>
                    <li>Andra punkt</li>
                </ol>

                <blockquote className="border-l-4 border-gray-700 pl-4 italic text-gray-800 my-8">
                    Detta är hur ett citat ser ut.
                </blockquote>

            </article>
        </section>
    );
}