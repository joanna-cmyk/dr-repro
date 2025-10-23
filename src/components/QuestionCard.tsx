import { QuizQuestion } from "@/data/quizData";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuestionCardProps {
  question: QuizQuestion;
  selectedAnswer: string | null;
  onSelectAnswer: (label: string) => void;
  isAnswered: boolean;
}

const QuestionCard = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  isAnswered,
}: QuestionCardProps) => {
  const correctAnswer = question.options.find((opt) => opt.isCorrect);
  const isCorrect = selectedAnswer === correctAnswer?.label;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8 border border-border">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 leading-relaxed">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option.label;
            const showCorrect = isAnswered && option.isCorrect;
            const showWrong = isAnswered && isSelected && !option.isCorrect;

            return (
              <button
                key={option.label}
                onClick={() => !isAnswered && onSelectAnswer(option.label)}
                disabled={isAnswered}
                className={cn(
                  "w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all duration-300",
                  "hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  !isAnswered && "hover:border-primary hover:bg-primary/5 cursor-pointer",
                  isAnswered && "cursor-not-allowed",
                  isSelected && !isAnswered && "border-primary bg-primary/10",
                  showCorrect && "border-success bg-success/10",
                  showWrong && "border-error-foreground bg-error"
                )}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
                      !isAnswered && "bg-secondary text-secondary-foreground",
                      isSelected && !isAnswered && "bg-primary text-primary-foreground",
                      showCorrect && "bg-success text-success-foreground",
                      showWrong && "bg-error-foreground text-white"
                    )}
                  >
                    {option.label}
                  </span>
                  <span className="flex-1 text-base md:text-lg text-foreground pt-1">
                    {option.text}
                  </span>
                  {showCorrect && (
                    <CheckCircle2 className="flex-shrink-0 w-6 h-6 text-success" />
                  )}
                  {showWrong && (
                    <XCircle className="flex-shrink-0 w-6 h-6 text-error-foreground" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
