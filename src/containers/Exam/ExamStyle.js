import styled from "styled-components";

export const Wrapper = styled.div`
{
    height: 100vh; 
    background-color: white;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}`

export const Header = styled.div`{
    width: 100vw; 
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 20px 20px 20px;
}`

export const Title = styled.div`{
    width: 100vw;
    height: 10vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:30px;
    box-sizing: border-box;
}`
export const Time = styled.div`{
    width: 10em;
    height: 5vh;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    box-sizing: border-box;

}`

export const Body_box = styled.div`{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;

}`


export const Footer = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}`

export const End_button = styled.button`{
    width: 100px;
    height: 50px;
    background-color: #e7f3f5;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-decoration: none
}`
