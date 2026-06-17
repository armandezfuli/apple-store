import Image from "next/image"

const iphones = [
    "/images/iphones/iphone_17.jpg",
    "/images/iphones/iphone_17e.jpg",
    "/images/iphones/iphone_17pro.jpg",
    "/images/iphones/iphone_air.jpg",
]

export default function Home() {
    return (
        <div className="mt-22 mx-auto grid grid-cols-4 gap-6 ">
            {iphones.map((iphone) => (
                <Image key={iphone} src={iphone} alt="iPhone" width={344} height={366} className="rounded-4xl" />
            ))}
        </div>
    )
}
