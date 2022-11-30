import { useState } from "react";
import UserIDtoFind from "./UserIDtoFind";
import UserLogin from "./UserLogin";
import UserPWtoFind from "./UserPWtoFind";
import UserRegister from "./UserRegister";

interface Props {
    setShowLoginForm(value: boolean): void;
}

export default function UserFormController({ setShowLoginForm }: Props) {
    const LOGIN = 1;
    const REGISTER = 2;
    const FIND_ID = 3;
    const FIND_PW = 4;

    const [tabNumber, setTabNumber] = useState(LOGIN);

    if (tabNumber === LOGIN) {
        return (
            <UserLogin
                setTabNumber={setTabNumber}
                setShowLoginForm={setShowLoginForm}
                tabList={{ LOGIN, REGISTER, FIND_ID, FIND_PW }}
            />
        );
    }

    if (tabNumber === REGISTER) {
        return <UserRegister setTabNumber={setTabNumber} tabList={{ LOGIN }} />;
    }

    if (tabNumber === FIND_ID) {
        return <UserIDtoFind setTabNumber={setTabNumber} tabList={{ REGISTER, LOGIN, FIND_PW }} />;
    }

    if (tabNumber === FIND_PW) {
        return <UserPWtoFind setTabNumber={setTabNumber} tabList={{ REGISTER, LOGIN, FIND_ID }} />;
    }

    return null;
}