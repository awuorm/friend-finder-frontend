import React, { useEffect, useState } from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import { StyledQuestions } from "../styles";

export const Dashboard = props => {
  console.log("props from dashboard", props);
  const [answers, setAnswers] = useState([]);
  const { getQuestions, questions, login, answersPost } = props;
  const [loggedInUser] = useState(login.loggedIn.userid);
  //   const [quizid,setQuizId] = useState();
  const answersArray = [
    "tea",
    "coffee",
    "Tesla",
    "Lamborghini",
    "Japan",
    "Brazil",
    "Archery",
    "Cooking",
    "Facebook",
    "Twitter",
    "Titanic",
    "Handover",
    "Die young",
    "Die at 100",
    "Hiphop",
    "pop",
    "workout",
    "get extra sleep",
    "life of the party",
    "wallflower",
    "indoors",
    "outdoors",
    "early",
    "late"
  ];
  useEffect(() => {
    getQuestions();
  }, [questions, getQuestions]);
  //   console.log(questions.qstns);

  const valueChange = (e, id) => {
    answersArray.map((ans, index) => {
      if (ans === e.target.value) {
        setAnswers(
          answers.concat({
            userid: loggedInUser,
            questionid: Math.round((index + 1) / 2),
            answerid: index + 1
          })
        );
      }
    });
  };
  console.log("userid ===>", loggedInUser);
  console.log(answers);

  const onSubmit = e => {
    e.preventDefault();
    answersPost(answers, props);
  };

  return (
    <StyledQuestions>
      <h5>Answer the questions below to see your matches</h5>
      <div>
        {questions.qstns.map(quiz => {
          return (
            <div key={quiz.id}>
              <h4>{quiz.questionsBody}</h4>
              <input
                value={quiz.ans_a}
                onChange={e => valueChange(e, quiz.id)}
                type="radio"
              />
              <label>{quiz.ans_a}</label>
              <input value={quiz.ans_b} onChange={valueChange} type="radio" />
              <label>{quiz.ans_b}</label>
            </div>
          );
        })}
      <button onClick={onSubmit}>submit</button>
      </div>
    </StyledQuestions>
  );
};

export default connect(state => state, actionCreators)(Dashboard);
