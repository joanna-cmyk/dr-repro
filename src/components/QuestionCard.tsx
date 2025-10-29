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
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-card rounded-2xl shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.15)] p-4 md:p-6 border border-border transition-all duration-300 hover:shadow-[0_15px_40px_-10px_hsl(var(--primary)/0.2)]">
        <h2 className="text-lg md:text-xl font-bold text-foreground mb-4 leading-snug">
          {question.question}
        </h2>

        <div className="space-y-2.5">
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
                  "w-full text-left p-3 md:p-4 rounded-xl border-2 transition-all duration-300 min-h-[52px]",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  !isAnswered && "hover:border-primary hover:bg-primary/5 hover:shadow-md hover:scale-[1.01] cursor-pointer active:scale-[0.99]",
                  isAnswered && "cursor-not-allowed",
                  isSelected && !isAnswered && "border-primary bg-primary/10 shadow-sm",
                  showCorrect && "border-success bg-success/10 shadow-md",
                  showWrong && "border-error-foreground bg-error shadow-md"
                )}
              >
                <div className="flex items-start gap-2.5 md:gap-3">
                  <span
                    className={cn(
                      "flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300",
                      !isAnswered && "bg-secondary text-secondary-foreground",
                      isSelected && !isAnswered && "bg-primary text-primary-foreground shadow-sm",
                      showCorrect && "bg-success text-success-foreground shadow-md",
                      showWrong && "bg-error-foreground text-white shadow-md"
                    )}
                  >
                    {option.label}
                  </span>
                  <span className="flex-1 text-sm md:text-base text-foreground pt-1 leading-snug">
                    {option.text}
                  </span>
                  {showCorrect && (
                    <CheckCircle2 className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 text-success animate-fade-in" />
                  )}
                  {showWrong && (
                    <XCircle className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 text-error-foreground animate-fade-in" />
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
