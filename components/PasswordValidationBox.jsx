import IconCheck from "@components/icon/IconCheck";
import PasswordValidationBoxComponent from "@components/PasswordValidationBoxComponent";

export default function PasswordValidationBox(){
    return (
        <div className={"grid grid-cols-2 gap-1.5"}>
            <PasswordValidationBoxComponent text={"one lowercase character"} checked={false} />
            <PasswordValidationBoxComponent text={"one special character"} checked={false} />
            <PasswordValidationBoxComponent text={"one uppercase character"} checked={false} />
            <PasswordValidationBoxComponent text={"8 character minimum"} checked={false} />
            <PasswordValidationBoxComponent text={"one number"} checked={false} />
        </div>
    )
}