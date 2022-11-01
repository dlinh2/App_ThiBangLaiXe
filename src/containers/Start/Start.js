import { Content, Description, Start_button, Title, Wrapper } from "./StartStyle";
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <Wrapper>
      <Description>
        <Title>Thi Lý Thuyết Bằng Lái Xe Máy</Title>
        <Content>
          <p>
            <strong>Cấu trúc đề thi và yêu cầu:</strong>
          </p>
          <ul>
            <li>Thời gian làm bài: 19 phút</li>
            <li>Số câu hỏi: 25 câu</li>
            <li>Mỗi câu hỏi trong đề sát hạch có từ 02 đến 04 ý trả lời và chỉ có 01 ý trả lời đúng nhất. </li>
            <li>Trong số các câu hỏi, có 01 câu trả lời sai (câu hỏi điểm liệt) sẽ bị truất quyền sát hạch.</li>
            <li>Các câu còn lại, mỗi câu tính 01 điểm.</li>
            <li>Mỗi câu hỏi chỉ có duy nhất 1 đáp án đúng.</li>
            <li>Kết thúc bài thi, thí sinh đạt 21/25 điểm trở lên và không sai câu hỏi điểm liệt là đạt.</li>
          </ul>
        </Content>
      </Description>

      <Link to='/Exam' style={{ textDecoration: 'none' }}>
        <Start_button>Bắt Đầu</Start_button>
      </Link>
    
      {/* <Start_button
      onClick={() => {
        api.create().Start()
        .then(response => {
          window.location.replace('/Exam');

        })
        .catch((error) => {
          const { message } = error;
          console.log('Error: ', message);
        });
      }}
      >Start</Start_button> */}
    </Wrapper>

  );
}

export default Start;
