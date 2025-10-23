import { Progress } from "@/components/ui/progress";

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
}

const QuizHeader = ({ currentQuestion, totalQuestions, score }: QuizHeaderProps) => {
  const progressPercentage = ((currentQuestion - 1) / totalQuestions) * 100;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border mb-8">
      <div className="w-full max-w-4xl mx-auto px-4 py-5">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
            <span className="text-primary">🌸</span>
            Know Your Body Quiz
          </h1>
          <div className="text-base md:text-lg font-bold text-primary bg-primary/10 px-4 py-2 rounded-full shadow-sm border border-primary/20 transition-all hover:shadow-md">
            Score: {score}/{totalQuestions}
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
            <span>Question {currentQuestion} of {totalQuestions}</span>
            <span className="text-primary">{Math.round(progressPercentage)}% Complete</span>
          </div>
          <Progress value={progressPercentage} className="h-2.5" />
        </div>
      </div>
    </header>
  );
};

export default QuizHeader;
