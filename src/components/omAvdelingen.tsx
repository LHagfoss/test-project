import Image from "next/image";

import krsLogo from "../../public/Images/l-krs-forenklet-byvaapen-horisontal.svg"
import FadeIn from "./fadeIn";

export default function OmAvdelingen() {
    return (
        <FadeIn delay={0}>
            <div className="w-[100vw] h-[100vh] flex justify-center p-5 md:p-20 items-center mb-20">
                <div className="container h-full bg-blue-100 md:rounded-3xl p-10 flex flex-col md:flex-row">
                    <div className="text-[--textDark] flex-1 flex flex-col justify-between">
                        <h1 className="md:text-[2.5vw] font-bold">Om selve IT-Avdelingen</h1>
                        <h3 className="md:text-[1.5vw] font-medium mb-10">Arbeidsmiljøet, HMS og tanker</h3>
                        <div className="h-full flex flex-col justify-between">
                            <p className="md:text-[1vw]">
                                Jeg har hatt det veldig bra med folkene her på jobb. Alle er veldig hjelpsomme og tilgjengelige, 
                                noe som gjør det enkelt å få hjelp når det trengs. Det er en rolig og avslappet atmosfære, 
                                og det er lett å ha en samtale med kollegene når det er behov for det. 
                                Det er også hyggelig å se hvordan alle jobber sammen og støtter hverandre.
                            </p>
                            <p className="md:text-[1vw]">
                                Når det gjelder HMS (helse, miljø og sikkerhet), er det viktig å huske på noen viktige punkter. 
                                For det første, er det lurt å alltid holde det ryddig. Jeg rydder tilbake verktøy og tusjer etc, etter jeg bruker dem, selvom jeg skal bruke dem gjennom dagen.
                                De har ergonomiske stoler jeg sitter på når jeg slapper av og gjør hva jeg vil på laptoppen. Jeg prøver å sitte i en god stilling som hjepler med å IKKE ødelegge ryggen min.
                            </p>
                            <p className="md:text-[1vw]">
                                Jeg har hatt det gøy her og lært mye om drift og brukerstøtte, her i Kristiansand kommunene IT-avdelingen. 
                                Jeg kanskje kunne ha jobbet her i tidligere framtid, men jeg heller foretrekker IT-utvikling.
                            </p>
                            <div className="w-full flex gap-5">
                                <button type="button" className="w-full bg-[--primary] py-5 rounded-lg text-[--inverseText]" onClick={() => {
                                    const element = document.getElementById('imageContent');
                                    if (element) {
                                        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
                                    }
                                }}>Gå ned</button>

                                <button type="button" className="w-full bg-[--primary] py-5 rounded-lg text-[--inverseText]" onClick={() => {
                                    const element = document.getElementById('footer');
                                    if (element) {
                                        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
                                    }
                                }}>Gå helt ned</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 hidden md:flex justify-center items-center">
                        <Image src={krsLogo} alt="" className="w-[600px]"></Image>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}
