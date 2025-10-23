import { Button } from "@/components/ui/button";
import { Award, RefreshCw, Heart } from "lucide-react";

interface EndScreenProps {
  score: number;
  totalQuestions: number;
  onRetake: () => void;
}

const EndScreen = ({ score, totalQuestions, onRetake }: EndScreenProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getMessage = () => {
    if (percentage >= 90) {
      return {
        title: "Outstanding! 🌟",
        message: "You have excellent knowledge about women's health! Keep spreading awareness!",
      };
    } else if (percentage >= 70) {
      return {
        title: "Great Job! 💪",
        message: "You're well-informed about women's health. Keep learning and sharing!",
      };
    } else if (percentage >= 50) {
      return {
        title: "Good Effort! 📚",
        message: "You're on the right track! Review the tips and keep learning!",
      };
    } else {
      return {
        title: "Keep Learning! 🌱",
        message: "Every step towards understanding your health matters. Review the questions and try again!",
      };
    }
  };

  const { title, message } = getMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl animate-fade-in">
        <div className="bg-card rounded-3xl shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.2)] p-8 md:p-12 border-2 border-border text-center">
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-6 shadow-lg animate-fade-in">
            <Award className="w-14 h-14 text-primary" />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            {title}
          </h1>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 mb-8 border-2 border-primary/20 shadow-inner">
            <div className="text-6xl md:text-7xl font-bold text-primary mb-3 animate-fade-in">
              {score}/{totalQuestions}
            </div>
            <div className="text-xl md:text-2xl font-semibold text-muted-foreground">
              {percentage}% Correct
            </div>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-lg mx-auto">
            {message}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={onRetake}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <RefreshCw className="w-6 h-6 mr-2" />
              Retake Quiz
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
              <span className="text-sm md:text-base">
                Remember: Your health matters. Don't hesitate to see a doctor if you have concerns.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndScreen;
