import React, { Component } from "react";
import {Wrapper} from './LitsRQuestionStyle';
import Data from "../Data";
import Question from "./ResultsQuestion";


const ListQuestion = (props) => {
    
    return (
        <Wrapper>
            {
                
                Data.map(
                    (item, index) =>{  
                        let select;
                        for(let i = 1; i <props.length; i++){
                            if(props[i].numQ === index + 1)
                                return select = props[i].select
                        }
                        return (
                            <Question
                                
                                Select = {select}
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
