import React, { Component } from "react";
import {Wrapper} from './LitsRQuestionStyle';
import Data from "../Data";
import Question from "./ResultsQuestion";


const ListQuestion = (props) => {
    const {selectData} = props
    return (
        <Wrapper>
            {
                
                Data.map(
                    (item, index) =>{  
                        return (
                            <Question
                                select = {selectData[selectData.findIndex(obj => {
                                    return obj.numQ === index + 1;
                                    })].select}
                                num = {index + 1}
                                idQuestion = {index + 1}
                                question = {item.question}
                                image = {item.image}
                                A = {item.A}
                                B = {item.B}
                                C = {item.C}
                                D = {item.D}
                                answer = {item.answer}
                                
                            />
                        )
                        
                    }
                )
            }
        </Wrapper>
        
    )
}

export default ListQuestion;
