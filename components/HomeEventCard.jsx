import Image from "next/image";

export default function ({event}){
    return (
        <div className={"rounded-3xl p-3 bg-white " + event.classes}>
            <div>
                <Image src={event.image} alt={""} className={"w-full rounded-2xl"} />
            </div>
            <div className={"mt-4 text-[#171717] text-lg font-medium"}>{event.title}</div>
            <div className={"flex justify-between items-center mt-3 gap-1"}>
                <div className={"font-medium text-[#525252]"}>{event.date}</div>
                .
                <div className={"text-[#525252]"}>{event.location}</div>
            </div>
        </div>
    )
}