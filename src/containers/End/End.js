import ResultsBox from "../../Components/End/ResultsBox";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ListRQuestion from "../../Components/End/ListRQuestion";
import Data from "../../Components/Data";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background: white;
    flex-direction: column;
    align-items: center;
`;

const End = () => {
  const location = useLocation();
  const selectArr = location.state;
  const Scoring = (data) => {
    const newData = data.data;
    let score = 0;
    for(let i = 1; i < newData.length; i++){
      if(newData[i].select === Data[newData[i].numQ - 1].answer){
        score = score + 1;
      }
    }
    return score;
  }

  const Result = (score) => {
    if(score >= 21)
      return 'Đạt';
    else
      return 'Không Đạt';
  }
    return (
      <Wrapper>
        <ResultsBox 
          Score = {Scoring(location.state)}
          result = {Result(Scoring(location.state))}
        />
        <ListRQuestion
        selectData = {selectArr.data}
        />
        
      </Wrapper>
      
    );
  }
  
  export default End;
  