import useForm from "@/hooks/useForm";
import { useRequestSendCode } from "@/api/certificate";
import { FIND_ID, LOGIN, REGISTER } from "./constants/tabList";
import Icon from "@/components/UI/Icon";
import {
    Form,
    FormTitle,
    InputSection,
    InputBlock,
    FormButton,
    BottomSection,
    AuthButton,
    SmallError,
    Success,
    DescriptionLabel,
} from "@/styles/common/modal/Form-style";
import { useSetRecoilState } from "recoil";
import { currentForm } from "@/temp/formAtom";

export default function UserIDtoFind() {
    const { form, changeHandler } = useForm({ email: "", target: "password", code: "" });

    const setCurrentForm = useSetRecoilState(currentForm);

    const {
        isError: emailError,
        isSuccess: emailSuccess,
        mutate: sendCode,
    } = useRequestSendCode(form, {
        onSuccess: () => {},
        onError: () => {},
    });

    const sendCodeHandler = () => {
        sendCode();
    };
    return (
        <Form>
            <FormTitle>비밀번호 찾기</FormTitle>
            <InputSection>
                <InputBlock>
                    <DescriptionLabel>가입하신 이메일을 입력해주세요.</DescriptionLabel>
                    <Icon icon="email" />
                    <input id="email" type="email" placeholder="이메일" onChange={changeHandler} />
                    <AuthButton type="button" onClick={sendCodeHandler}>
                        인증
                    </AuthButton>
                </InputBlock>
                {emailError && (
                    <SmallError>이미 가입된 이메일이거나 코드가 전송된 상태입니다.</SmallError>
                )}
            </InputSection>
            {emailSuccess && <Success>이메일로 임시 비밀번호가 발급되었습니다.</Success>}
            <BottomSection>
                <FormButton onClick={() => setCurrentForm(LOGIN)}>로그인 하기</FormButton>
                <div className="register">
                    <span>계정이 없으신가요? </span>
                    <button type="button" onClick={() => setCurrentForm(REGISTER)}>
                        회원가입
                    </button>
                </div>
                <button type="button" onClick={() => setCurrentForm(FIND_ID)}>
                    아이디 찾기
                </button>
            </BottomSection>
        </Form>
    );
}
