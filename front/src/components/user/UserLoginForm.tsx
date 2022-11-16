import useForm from "@/hooks/useForm";
import FormInput from "@/components/common/FormInput";
import { USER_LOGIN } from "@/constants/requests";
import { InputDataType } from "@/types/inputData_type";

const inputData: InputDataType = [
    {
        type: "email",
        name: "email",
        description: "이메일",
    },
    {
        type: "password",
        name: "password",
        description: "비밀번호",
    },
];

const initialState = {
    email: "",
    password: "",
};

export default function UserLoginForm() {
    const { form, validatedForm, onChangeHandler, onSubmitHandler } = useForm({
        initialState,
        endpoint: USER_LOGIN,
    });

    const props = {
        inputData,
        form,
        validatedForm,
        onChangeHandler,
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <FormInput {...props} />
            <button>로그인</button>
        </form>
    );
}
