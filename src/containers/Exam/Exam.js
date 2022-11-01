import React,{ useEffect,  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Body_box,End_button, Footer, Header, Time, Title, Wrapper} from './ExamStyle'
import ListQuestion from '../../Components/Exam/listQuestion';


const Exam = () => {

  const formatTime = (seconds) => {
    const getSeconds = `0${(seconds % 60)}`.slice(-2)
    const minutes = `${Math.floor(seconds / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)

    return ` ${getMinutes} : ${getSeconds}`
  }
  
  const  [countdown, setCountDown] = useState(1140);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDown((prevState) => prevState - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);


  const Redirect = () => {
    toEnd();
    window.location='http://localhost:3000/End'
  }
  
  setTimeout(Redirect, 1140000)
  const [data, setData] = useState([{numQ: '', select: ''}])

  const selectOnChange = (event, idQuestion) => {
    const newData = [...data]
    if(newData.length > 1){
      const index = newData.findIndex(obj => {
        return obj.numQ === idQuestion;
      })
      
      if(index !== -1){
        newData.splice(index,1)
        newData.splice(index,0,{numQ:idQuestion, select:event.target.value})

      }
      else{
        newData.push({numQ:idQuestion, select:event.target.value})
      }
    }
    else{
      newData.push({numQ:idQuestion, select:event.target.value})
    }
    setData(() => [...newData])
  }

  const navigate = useNavigate();
  const toEnd = () =>{
    navigate('/End', {state: {data}})
  }

  return (
    <Wrapper>
      
      <Header>
        <Title><strong>Bài Thi Lý Thuyết Bằng Lái Xe A1</strong></Title>
        <Time>Thời gian: {formatTime(countdown)}</Time>
      </Header>
      <Body_box>
          <ListQuestion
            selectOnChange ={(e, idQuestion) => selectOnChange(e, idQuestion)}
          />
      </Body_box>
      <Footer>
          <End_button onClick={() => {toEnd()}}>Kết Thúc</End_button>
      </Footer>
    </Wrapper>

    
  );
}

export default Exam;
