import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import FlipCard from "@/components/FlipCard";
import { caseFiles } from "@/data/caseFilesData";

const CaseFiles = () => {
  const [unlockedCards, setUnlockedCards] = useState<Set<number>>(new Set());
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleUnlock = (cardId: number) => {
    setUnlockedCards(prev => new Set(prev).add(cardId));
  };

  const handleNext = () => {
    if (currentCardIndex < caseFiles.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Case Files</h1>
          <p className="text-muted-foreground">
            Explore real-life health scenarios through interactive case stories
          </p>
        </div>

        {/* Desktop Grid - 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {caseFiles.map((caseFile) => (
            <FlipCard
              key={caseFile.id}
              caseFile={caseFile}
              isUnlocked={unlockedCards.has(caseFile.id)}
              onUnlock={() => handleUnlock(caseFile.id)}
            />
          ))}
        </div>

        {/* Mobile View - One card at a time */}
        <div className="md:hidden">
          <div className="mb-4 text-center">
            <span className="text-sm text-muted-foreground">
              Case {currentCardIndex + 1} of {caseFiles.length}
            </span>
          </div>

          <FlipCard
            caseFile={caseFiles[currentCardIndex]}
            isUnlocked={unlockedCards.has(caseFiles[currentCardIndex].id)}
            onUnlock={() => handleUnlock(caseFiles[currentCardIndex].id)}
          />

          {currentCardIndex < caseFiles.length - 1 && (
            <div className="mt-6 flex justify-center">
              <Button
                onClick={handleNext}
                size="lg"
                className="w-full max-w-xs"
              >
                Next Scenario
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseFiles;
