import questionsData from "../questionsData";

const questions = (req, res) => {
  const questionId = +req.query.id;
  const selectedQuestion = questionsData.filter(
    (question) => question.id === questionId
  );
  const questionDataView = selectedQuestion[0]?.shuffleAnswers().toObject();

  questionDataView
    ? res.status(200).json(questionDataView)
    : res.status(204).send();
};

export default questions;
