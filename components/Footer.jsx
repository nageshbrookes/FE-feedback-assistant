import Image from "next/image";
import facebookIcon from "../public/images/facebookIcon.png"
import linkedinIcon from "../public/images/linkedinIcon.png"
import twitterIcon from "../public/images/twitterIcon.png"
import youtubeIcon from "../public/images/youtubeIcon.png"
import instagramIcon from "../public/images/instagramIcon.png"
import Logo from "@components/image/logo";
export default function(){
    return (
        <div className={"flex flex-col md:flex-row gap-6 justify-between items-center py-6"}>
            <div>
                <Logo/>
            </div>
            <div className={"flex gap-2"}>
                <Image src={facebookIcon} alt={""} width={"40"} height={"40"} />
                <Image src={linkedinIcon} alt={""} />
                <Image src={twitterIcon} alt={""} />
                <Image src={youtubeIcon} alt={""} />
                <Image src={instagramIcon} alt={""} />
            </div>
            <div className={"text-xs md:text-base text-[#525252]"}>
                © 2022 Company Name® Global Inc.
            </div>
        </div>
    )
}