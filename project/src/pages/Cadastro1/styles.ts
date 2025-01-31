import styled from "styled-components";

export const Container = styled.div`
    padding: 70px;
    margin: auto;
    min-height: 90vh;
    text-align: center;
`;

export const Button = styled.button`
    margin-left: 0px;
    background-color: #20B2AA;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
`;

export const Label = styled.div`
font-size: 13px;
padding: 10px 0;
    input {
        display: block;
        margin: auto;
        margin-top: 7px;
        width: 250px;
        padding: 20px 10px;
        border: 2px solid #25CD89;
        border-radius: 10px;
        color: #000000;
        outline: 1;
        font-size: 15px;
        background-color: #F8F8FF;
}
`;

export const FormArea = styled.div`
    padding: 10px 0;
    min-height: 90vh;
    max-height: 90px;
`;