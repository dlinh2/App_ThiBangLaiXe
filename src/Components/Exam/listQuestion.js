import React, { Component } from "react";
import {Wrapper} from './listQuestionStyle';
import Data from "../Data";
import Question from "./Question";


const ListQuestion = (props) => {

    // const renderQuestion = () => {
    //     const items = []
    //     for(let i = 0; i < Data.length; i++){
    //         const item = (
    //             <Question
    //                 num = {i + 1}
    //                 question = {Data[i].question}
    //                 image = {Data[i].image}
    //                 A = {Data[i].A}
    //                 B = {Data[i].B}
    //                 C = {Data[i].C}
    //                 D = {Data[i].D}
    //                 selectClick = {props.selectClick}
    //                 // selectClick={(e) => selectClick(e)}
    //             />
    //         )
    //         items.push(item)
    //     }
    //     return {items}
    // }
    return (
        <Wrapper>
            {
                
                Data.map(
                    (item, index) =>{
                        return (
                            <Question
                                selectOnChange = {props.selectOnChange}
                                num = {index + 1}
                                idQuestion = {index + 1}
                                question = {item.question}
                                image = {item.image}
                                A = {item.A}
                                B = {item.B}
                                C = {item.C}
                                D = {item.D}
                                
                            />
                        )
                    }
                )
            }
        </Wrapper>
        
    )
}

export default ListQuestion;
