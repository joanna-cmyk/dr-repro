import { useState } from "react";
import { Button } from "./ui/button";
import { Lock } from "lucide-react";
import CodeEntryModal from "./CodeEntryModal";
import type { CaseFile } from "@/data/caseFilesData";

interface FlipCardProps {
  caseFile: CaseFile;
  isUnlocked: boolean;
  onUnlock: () => void;
}

const FlipCard = ({ caseFile, isUnlocked, onUnlock }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Flip Card */}
      <div 
        className="relative w-full aspect-[4/3] cursor-pointer group"
        style={{ perspective: "1000px" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-gpu`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front of Card */}
          <div
            className="absolute inset-0 bg-card rounded-lg shadow-md border border-border p-6 flex flex-col items-center justify-center text-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            {isUnlocked && (
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1">
                ✅ Unlocked
              </div>
            )}
            
            <div className="text-4xl mb-4">{caseFile.emoji}</div>
            <h3 className="text-xl font-bold mb-4">{caseFile.title}</h3>
            <p className="text-sm text-muted-foreground">Click to read story →</p>
          </div>

          {/* Back of Card */}
          <div
            className="absolute inset-0 bg-card rounded-lg shadow-md border border-border p-6 overflow-y-auto"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="text-sm leading-relaxed text-foreground mb-4">
              {caseFile.scenario}
            </p>
            <p className="text-xs text-muted-foreground text-center">
              Click to flip back ↺
            </p>
          </div>
        </div>
      </div>

      {/* Code Entry Section */}
      <div className="w-full mt-6 bg-muted/30 rounded-lg p-6 border border-border">
        <div className="text-center space-y-3">
          <h4 className="text-lg font-semibold flex items-center justify-center gap-2">
            <Lock className="h-5 w-5" />
            Unlock the Answer
          </h4>
          <p className="text-sm text-muted-foreground">
            Get your code from CLUEMASTER
          </p>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
            className="w-full max-w-xs mx-auto"
          >
            Enter Code 🔓
          </Button>
        </div>
      </div>

      {/* Code Entry Modal */}
      <CodeEntryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        correctCode={caseFile.code}
        charactersInTrouble={caseFile.charactersInTrouble}
        realLifeIssue={caseFile.realLifeIssue}
        onCorrectCode={onUnlock}
      />
    </div>
  );
};

export default FlipCard;
