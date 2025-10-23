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
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-card rounded-3xl shadow-2xl p-8 md:p-12 border border-border text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
            <Award className="w-12 h-12 text-primary" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h1>

          <div className="bg-primary/5 rounded-2xl p-6 mb-6 border border-primary/20">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
              {score}/{totalQuestions}
            </div>
            <div className="text-xl text-muted-foreground">
              {percentage}% Correct
            </div>
          </div>

          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            {message}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onRetake}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Retake Quiz
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Heart className="w-5 h-5 text-primary fill-primary" />
              <span className="text-sm">
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
