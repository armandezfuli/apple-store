import GradientBlinds from "@/components/GradientBlinds"
import Hero from "@/components/home/Hero"

export default function Home() {
    return (
        <div className="">
            <main>
                <section className="relative min-h-screen">
                    <div className="absolute inset-0">
                        <GradientBlinds
                            gradientColors={["#4662ff", "#001690"]}
                            angle={25}
                            noise={0.05}
                            blindCount={25}
                            blindMinWidth={90}
                            mouseDampening={0.25}
                            mirrorGradient
                            spotlightRadius={0.6}
                            spotlightSoftness={0.5}
                            spotlightOpacity={0.25}
                            distortAmount={0}
                            shineDirection="right"
                        />
                    </div>
                    {/* <div className="relative z-10">
                        <Hero />
                    </div> */}
                </section>
            </main>
        </div>
    )
}
