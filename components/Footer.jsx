import Image from "next/image";
import facebookIcon from "../public/images/facebookIcon.png"
import linkedinIcon from "../public/images/linkedinIcon.png"
import twitterIcon from "../public/images/twitterIcon.png"
import youtubeIcon from "../public/images/youtubeIcon.png"
import instagramIcon from "../public/images/instagramIcon.png"
export default function(){
    return (
        <div className={"flex justify-between items-center"}>
            <div>© 2022 Company Name® Global Inc.</div>
            <div className={"flex gap-2"}>
                <Image src={facebookIcon} alt={""} width={"40"} height={"40"} />
                <Image src={linkedinIcon} alt={""} />
                <Image src={twitterIcon} alt={""} />
                <Image src={youtubeIcon} alt={""} />
                <Image src={instagramIcon} alt={""} />

            </div>
            <div className={"flex gap-10"}>
                <div>Terms of Service</div>
                <div>Privacy Policy</div>
            </div>
        </div>
    )
}