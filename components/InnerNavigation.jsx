'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "../public/images/homeicon.svg"
import HomeOutline from "../public/images/homeoutline.svg"
import TicketIcon from "../public/images/ticketicon.svg"
import ReviewIcon from "../public/images/reviewicon.svg"

import {useRouter} from "next/navigation";
import { usePathname } from 'next/navigation'

function InnerNavigation() {
    const router = useRouter()
    const pathname = usePathname()
  return (
    <div className={"bg-primary-1 py-4 px-[100px] flex justify-center"}>
        <div className={"flex gap-4 text-white"}>
            <Link href={"/dashboard"} className={ `${pathname === '/dashboard' ? 'bg-white/10' : ''} py-4 w-[230px] flex justify-center gap-4 rounded-lg`}>
                <div>
                    {
                        pathname === '/dashboard'
                        ? <Image src={HomeIcon} alt={""}/>
                            : <Image src={ HomeOutline} alt={""}/>
                    }
                </div>
                <div>Dashboard</div>
            </Link>
            <Link href={"/event"} className={`${pathname === '/event' ? 'bg-white/10' : ''} py-4 w-[230px] flex justify-center gap-4 rounded-lg`}>
                <div>
                    <Image src={TicketIcon} alt={""}/>
                </div>
                <div>Events</div>
            </Link>
            <Link href={"/review"} className={`${pathname === '/review' ? 'bg-white/10' : ''} py-4 w-[230px] flex justify-center gap-4 rounded-lg`}>
                <div>
                    <Image src={ReviewIcon} alt={""}/>
                </div>
                <div >Reviews</div>
            </Link>
        </div>
    </div>
  );
}

export default InnerNavigation;
