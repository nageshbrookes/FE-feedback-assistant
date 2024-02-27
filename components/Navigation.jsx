import React from "react";
import IconLogo from "@components/icon/IconLogo";
import Logo from "@components/image/logo";
import Link from "next/link";
import Button from "@components/button/Button";

function Navigation() {
    return (
        <div className={"py-6 flex justify-between items-center"}>
            <div>
                <Logo/>
            </div>
            <div className={"flex gap-12"}>
                <Link href={"/#home"} >Home</Link>
                <Link href={"/#works"} >How it works</Link>
                <Link href={"/#about"} >About</Link>
                <Link href={"/#faq"} >FAQ</Link>
                <Link href={"/#contact"} >Contact</Link>
            </div>
            <div>
                <Link href={"/signup"}>
                    <Button text={"Create Account"} style={"text-sm text-[#6A5BC1] border border-[#6A5BC1] rounded-full py-2 px-3 hover:bg-[#6A5BC1] hover:text-white font-medium cursor-pointer"} />
                </Link>
            </div>

        </div>
    );
}

export default Navigation;
