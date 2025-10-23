import { QuizQuestion } from "@/data/quizData";
import { CheckCircle2, XCircle, Lightbulb, AlertTriangle } from "lucide-react";
import { useEffect, useRef } from "react";

interface FeedbackSectionProps {
  question: QuizQuestion;
  isCorrect: boolean;
}

const FeedbackSection = ({ question, isCorrect }: FeedbackSectionProps) => {
  const feedbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (feedbackRef.current) {
      feedbackRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, []);

  return (
    <div ref={feedbackRef} className="w-full max-w-4xl mx-auto mt-6 px-4 space-y-4 animate-fade-in">
      {/* Feedback Banner */}
      <div
        className={`rounded-xl p-4 md:p-5 flex items-center gap-3 shadow-md transition-all ${
          isCorrect
            ? "bg-success/10 border-2 border-success"
            : "bg-error border-2 border-error-foreground"
        }`}
      >
        {isCorrect ? (
          <>
            <CheckCircle2 className="w-7 h-7 text-success flex-shrink-0" />
            <span className="text-lg md:text-xl font-bold text-success">✅ Correct!</span>
          </>
        ) : (
          <>
            <XCircle className="w-7 h-7 text-error-foreground flex-shrink-0" />
            <span className="text-lg md:text-xl font-bold text-error-foreground">
              ❌ Not quite!
            </span>
          </>
        )}
      </div>

      {/* Tip Section */}
      <div className="bg-accent rounded-xl p-5 md:p-7 border-2 border-accent-foreground/10 shadow-sm transition-all hover:shadow-md">
        <div className="flex items-start gap-3 mb-4">
          <Lightbulb className="w-7 h-7 text-accent-foreground flex-shrink-0 mt-0.5" />
          <h3 className="text-lg md:text-xl font-bold text-accent-foreground">💡 Tip</h3>
        </div>
        <p className="text-base md:text-lg text-accent-foreground/90 leading-relaxed whitespace-pre-line">
          {question.tip}
        </p>
      </div>

      {/* Red Flag Section */}
      <div className="bg-error rounded-xl p-5 md:p-7 border-2 border-error-foreground/20 shadow-sm transition-all hover:shadow-md">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-7 h-7 text-error-foreground flex-shrink-0 mt-0.5" />
          <h3 className="text-lg md:text-xl font-bold text-error-foreground">🚩 Red Flag</h3>
        </div>
        <p className="text-base md:text-lg text-error-foreground leading-relaxed whitespace-pre-line">
          {question.redFlag}
        </p>
      </div>
    </div>
  );
};

export default FeedbackSection;
