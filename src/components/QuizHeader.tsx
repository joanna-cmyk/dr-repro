import { Progress } from "@/components/ui/progress";

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
}

const QuizHeader = ({ currentQuestion, totalQuestions, score }: QuizHeaderProps) => {
  const progressPercentage = ((currentQuestion - 1) / totalQuestions) * 100;

  return (
    <header className="w-full max-w-4xl mx-auto mb-8">
      <div className="bg-card rounded-2xl shadow-sm p-6 border border-border">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Know Your Body Quiz 🌸
          </h1>
          <div className="text-lg font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
            Score: {score}/{totalQuestions}
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion} of {totalQuestions}</span>
            <span>{Math.round(progressPercentage)}% Complete</span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>
      </div>
    </header>
  );
};

export default QuizHeader;
