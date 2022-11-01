import React , { Component } from 'react';
import {Answer_box, Answer_text, Content, Option, Question_box, Question_image, Question_Text, Wrapper } from './QuestionStyle';

const Question = (props) => {
    return (
        <Wrapper>
            <Question_box >
                <Content>
                    Câu {props.num}:
                    <Question_Text  value={props.num}></Question_Text>
                    {props.question}
                    <Question_image src={props.image}></Question_image>
                </Content>
                <Answer_box>
                    <Option>
                        <input type='radio' name = {props.num}  value = 'A' onChange={(e, idQuestion) => props.selectOnChange(e, props.idQuestion)}/>
                        <Answer_text></Answer_text>
                        {props.A}
                    </Option>
                    <Option >
                        <input type='radio' name = {props.num}  value = 'B' onChange={(e, idQuestion) => props.selectOnChange(e, props.idQuestion)}/>
                        <Answer_text></Answer_text>
                        {props.B}
                    </Option>
                    { props.C ?
                    <Option >
                        <input type='radio' name = {props.num}  value = 'C' onChange={(e, idQuestion) => props.selectOnChange(e, props.idQuestion)}/>
                        <Answer_text></Answer_text>
                        {props.C}
                    </Option> : null
                    }
                    { props.D ?
                    <Option >
                        <input type='radio' name = {props.num}  value = 'D' onChange={(e, idQuestion) => props.selectOnChange(e, props.idQuestion)}/>
                        <Answer_text></Answer_text>
                        {props.D}
                    </Option> : null
                    }
                    
                </Answer_box>
            </Question_box>
            
        </Wrapper>
    )

}
export default Question;