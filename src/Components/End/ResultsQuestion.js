import React , { Component } from 'react';
import {Answer_box, Answer_text, Content, Option, Question_box, Question_image, Question_Text, Result, ResultText, Wrapper } from './ResultsQuestionStyle';

const Question = (props) => {
    return (
        <Wrapper>
            <Question_box >
                <Content>
                    Câu {props.idQuestion}:
                    <Question_Text  value={props.idQuestion}></Question_Text>
                    {props.question}
                    <Question_image src={props.image}></Question_image>
                </Content>
                {props.select === props.answer?
                    <Answer_box>
                        {props.answer === 'A' ?
                            <Option>
                                <input type='radio' name = {props.idQuestion}  value = 'A' checked/>
                                <Answer_text></Answer_text>
                                {props.A}
                            </Option> :
                            <Option>
                            <input type='radio' name = {props.idQuestion}  value = 'A' />
                            <Answer_text></Answer_text>
                            {props.A}
                            </Option>
                        }
                        {props.answer === 'B' ?
                            <Option>
                                <input type='radio' name = {props.idQuestion}  value = 'B' checked/>
                                <Answer_text></Answer_text>
                                {props.B}
                            </Option> :
                            <Option>
                            <input type='radio' name = {props.idQuestion}  value = 'B' />
                            <Answer_text></Answer_text>
                            {props.B}
                            </Option>
                        }
                        { props.C ?
                            <Option >
                                {props.answer === 'C'?
                                    <input type='radio' name = {props.idQuestion}  value = 'C' checked/> : 
                                    <input type='radio' name = {props.idQuestion}  value = 'C' />
                                }
                            <Answer_text></Answer_text>
                            {props.C}
                            </Option> : null
                        }
                        { props.D ?
                            <Option >
                            {props.answer === 'D'?
                                <input type='radio' name = {props.idQuestion}  value = 'D' checked/> : 
                                <input type='radio' name = {props.idQuestion}  value = 'D' />
                            }
                            <Answer_text></Answer_text>
                            {props.D}
                        </Option> : null
                        }
                        <Result>
                            <ResultText>Bạn đã chọn đúng.</ResultText>
                        </Result>
                        
                    </Answer_box> : 
                    <Answer_box>
                    {props.select === 'A' ?
                        <Option>
                            <input type='radio' name = {props.idQuestion}  value = 'A' checked/>
                            <Answer_text></Answer_text>
                            {props.A}
                        </Option> :
                        <Option>
                        <input type='radio' name = {props.idQuestion}  value = 'A' />
                        <Answer_text></Answer_text>
                        {props.A}
                        </Option>
                    }
                    {props.select === 'B' ?
                        <Option>
                            <input type='radio' name = {props.idQuestion}  value = 'B' checked/>
                            <Answer_text></Answer_text>
                            {props.B}
                        </Option> :
                        <Option>
                        <input type='radio' name = {props.idQuestion}  value = 'B' />
                        <Answer_text></Answer_text>
                        {props.B}
                        </Option>
                    }
                    { props.C ?
                        <Option >
                        {props.select === 'C'?
                            <input type='radio' name = {props.idQuestion}  value = 'C' checked/> : 
                            <input type='radio' name = {props.idQuestion}  value = 'C' />
                        }
                        <Answer_text></Answer_text>
                        {props.C}
                        </Option> : null
                    }
                    { props.D ?
                        <Option >
                            {props.select === 'D'?
                                <input type='radio' name = {props.idQuestion}  value = 'D' checked/> : 
                                <input type='radio' name = {props.idQuestion}  value = 'D' />
                            }
                            <Answer_text></Answer_text>
                            {props.D}
                        </Option> : null
                    }
                    <Result>
                        <ResultText>Bạn đã chọn sai. Đáp án đúng là:</ResultText>
                        <ResultText>{props.answer}</ResultText>
                        
                    </Result>
                    
                </Answer_box>
                }
            </Question_box>
            
        </Wrapper>
    )

}
export default Question;