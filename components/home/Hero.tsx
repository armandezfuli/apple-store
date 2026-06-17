import { Button } from "@/components/ui/button"
import Image from "next/image"

const iphones = [
    "/images/iphones/iphone_17.jpg",
    "/images/iphones/iphone_17e.jpg",
    "/images/iphones/iphone_17pro.jpg",
    "/images/iphones/iphone_air.jpg",
]
// {iphones.map((iphone) => (
//     <Image key={iphone} src={iphone} alt="iPhone" width={344} height={366} className="rounded-4xl" />
// ))}

export default function Hero() {
    return (
        <section className="pt-32 pb-20">
            <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center">
                <p className="mb-3 text-sm font-medium text-muted-foreground">New</p>

                <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
                    iPhone 17 Pro
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    Titanium. Powerful.
                    <br />
                    Built for Apple Intelligence.
                </p>

                <Button size="lg" className="mt-8 rounded-full px-8">
                    Shop Now
                </Button>

                <div className="mt-16 w-full max-w-4xl">
                    <Image
                        key={iphones[2]}
                        src={iphones[2]}
                        alt="iPhone 17 Pro"
                        className="mx-auto w-full object-contain"
                        width={1200}
                        height={800}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
