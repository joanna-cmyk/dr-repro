import { useState } from "react";
import { quizQuestions } from "@/data/quizData";
import QuizHeader from "@/components/QuizHeader";
import QuestionCard from "@/components/QuestionCard";
import FeedbackSection from "@/components/FeedbackSection";
import QuizNavigation from "@/components/QuizNavigation";
import EndScreen from "@/components/EndScreen";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState(0);
  const [showEndScreen, setShowEndScreen] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestion.id];
  const isAnswered = selectedAnswer !== undefined;
  const correctAnswer = currentQuestion.options.find((opt) => opt.isCorrect);
  const isCorrect = selectedAnswer === correctAnswer?.label;

  const handleSelectAnswer = (label: string) => {
    if (isAnswered) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: label,
    }));

    const selectedOption = currentQuestion.options.find((opt) => opt.label === label);
    if (selectedOption?.isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowEndScreen(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleRetake = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setShowEndScreen(false);
  };

  if (showEndScreen) {
    return (
      <EndScreen
        score={score}
        totalQuestions={quizQuestions.length}
        onRetake={handleRetake}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background py-4 px-4">
      <QuizHeader
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={quizQuestions.length}
        score={score}
      />

      <QuestionCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleSelectAnswer}
        isAnswered={isAnswered}
      />

      {isAnswered && (
        <FeedbackSection question={currentQuestion} isCorrect={isCorrect} />
      )}

      <QuizNavigation
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={quizQuestions.length}
        canGoNext={isAnswered}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default Quiz;
