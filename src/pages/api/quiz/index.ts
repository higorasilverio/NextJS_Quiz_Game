import questionsData from "../questionsData";
import { shuffleArrayElements } from "src/utils";

const quiz = (req, res) => {
  const questionsIds = questionsData.map((question) => question.id);
  res.status(200).json(shuffleArrayElements(questionsIds));
};

export default quiz;
