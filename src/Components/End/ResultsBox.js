import React , { Component } from 'react';
import { Content, Content_Box, Wrapper } from './ResultsBoxStyle';
import ListQuestion from '../Exam/listQuestion';


const ResultsBox = (props) => {
    
    return(
        <Wrapper>
            <Content_Box>
                <Content>Số câu đúng là:</Content>
                {props.Score}
            </Content_Box>
            <Content_Box>
                <Content>Kết quả của bạn là:</Content>
                {props.result}
            </Content_Box>
        </Wrapper>
    )
}
export default ResultsBox;