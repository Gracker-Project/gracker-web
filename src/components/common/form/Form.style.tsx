import { mobile } from "@/example/styles/breakpoint";

import styled from "@emotion/styled";

export const FormWrapper = styled.div`
    width: 90%;
    padding: 35px 0px;

    display: flex;
    flex-direction: column;
    gap: 35px;

    max-width: 600px;
    border-radius: 20px;
`;

export const FormItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    font-size: 14px;
    font-weight: 400;

    color: #5c5c5c;
`;

export const ItemTitle = styled.div`
    height: 100%;
    font-size: 15px;
    font-weight: 600;
    color: #9a2828;
`;

export const ItemContent = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 18px;
`;

export const ItemInput = styled.input`
    width: 100%;
    height: 40px;

    padding: 5px 20px;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid #E8E8E8;

    &:focus {
        outline: 2px solid #9a2828;
    }
`;

export const ItemTextArea = styled.textarea`
    width: 240px;
    height: 40px;

    resize: none;

    padding: 10px 20px;
    font-size: 15px;
    border-radius: 20px;
    border: 1px solid #E8E8E8;

    &:focus {
        outline: 2px solid #9a2828;
    }

    ${mobile} {
        max-width: 250px;
    }
`;

export const ItemRadioContainer = styled.div`
    display: flex;
    gap: 45px;
    align-items: center;

    ${mobile} {
        flex-direction: column;
        gap: 20px;
    }
`;

export const ItemSelect = styled.select`
    width: 100%;
    height: 40px;
    padding: 5px 20px;
    font-size: 15px;
    color: ${(props) => (props.value === "" ? "#5c5c5c" : "#000")};
    border-radius: 10px;
    border: 1px solid #E8E8E8;
    background-color: #fff;
    appearance: none;

    &:focus {
        outline: 2px solid #9a2828;
    }
`;