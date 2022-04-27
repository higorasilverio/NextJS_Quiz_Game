import { QuestionModel } from "src/model";
import { useCallback, useEffect, useState } from "react";
import { Quiz, Statement } from "src/components";
import { isNotEmpty } from "src/utils";
import { useRouter } from "next/router";

const BASE_URL = "https://next-js-quiz-game.vercel.app/api";

export default function QuizPage() {
  const router = useRouter();
  const timeToAnswer = +router.query.level;
  const questionsQuantity = +router.query.questions;

  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>(null);
  const [nailed, setNailed] = useState<number>(0);

  const loadQuestionsIds = useCallback(async () => {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const questionsIds: number[] = await resp.json();
    const tenFirstQuestions = questionsIds.slice(0, questionsQuantity);

    setQuestionsIds(tenFirstQuestions);
  }, [questionsQuantity]);

  const loadQuestion = useCallback(async (id: number) => {
    const resp = await fetch(`${BASE_URL}/questions/${id}`);
    const json = await resp.json();
    const newQuestion = QuestionModel.toClass(json);

    setQuestion(newQuestion);
  }, []);

  const answeredQuestion = useCallback((answeredQuestion: QuestionModel) => {
    setQuestion(answeredQuestion);
    const answeredCorrectly = answeredQuestion.gotIt;

    setNailed((previousCount) =>
      answeredCorrectly ? previousCount + 1 : previousCount
    );
  }, []);

  const getNextQuestionId = useCallback(() => {
    if (question) {
      const nextIndex = questionsIds.indexOf(question.id) + 1;
      return questionsIds[nextIndex];
    }
    return undefined;
  }, [question, questionsIds]);

  const goToNextQuestion = useCallback(
    (nextId: number) => loadQuestion(nextId),
    [loadQuestion]
  );

  const finishQuiz = useCallback(
    () =>
      router.push({
        pathname: "/result",
        query: { total: questionsIds.length, correct: nailed },
      }),
    [nailed, questionsIds, router]
  );

  const goToNextStep = useCallback(() => {
    const nextId = getNextQuestionId();
    nextId ? goToNextQuestion(nextId) : finishQuiz();
  }, [finishQuiz, getNextQuestionId, goToNextQuestion]);

  useEffect(() => {
    loadQuestionsIds();
  }, [loadQuestionsIds]);

  useEffect(() => {
    if (isNotEmpty(questionsIds)) loadQuestion(questionsIds[0]);
  }, [loadQuestion, questionsIds]);

  return question ? (
    <Quiz
      question={question}
      timeToAnswer={timeToAnswer}
      lastOne={getNextQuestionId() === undefined}
      answeredQuestion={answeredQuestion}
      goToNextStep={goToNextStep}
    />
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Statement text="Loading question..." />
    </div>
  );
}
