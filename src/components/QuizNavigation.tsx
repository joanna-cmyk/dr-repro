import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface QuizNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  canGoNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

const QuizNavigation = ({
  currentQuestion,
  totalQuestions,
  canGoNext,
  onPrevious,
  onNext,
}: QuizNavigationProps) => {
  const isFirstQuestion = currentQuestion === 1;
  const isLastQuestion = currentQuestion === totalQuestions;

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 flex items-center justify-between gap-4">
      <Button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        variant="outline"
        size="lg"
        className="flex items-center gap-2 px-6"
      >
        <ChevronLeft className="w-5 h-5" />
        Previous
      </Button>

      <Button
        onClick={onNext}
        disabled={!canGoNext}
        variant="default"
        size="lg"
        className="flex items-center gap-2 px-6 bg-primary hover:bg-primary/90"
      >
        {isLastQuestion ? "Finish" : "Next"}
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default QuizNavigation;
