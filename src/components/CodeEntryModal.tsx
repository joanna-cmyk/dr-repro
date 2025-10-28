import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface CodeEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  correctCode: string;
  charactersInTrouble: string;
  realLifeIssue: string;
  onCorrectCode: () => void;
}

const CodeEntryModal = ({
  isOpen,
  onClose,
  correctCode,
  charactersInTrouble,
  realLifeIssue,
  onCorrectCode,
}: CodeEntryModalProps) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!code.trim()) {
      setError("Please enter a code");
      return;
    }

    if (code.trim().toUpperCase() === correctCode.toUpperCase()) {
      setIsUnlocked(true);
      setError("");
      onCorrectCode();
    } else {
      setError("❌ Incorrect code. Try again!");
      setCode("");
    }
  };

  const handleClose = () => {
    setCode("");
    setError("");
    setIsUnlocked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background rounded-lg shadow-xl max-w-md w-full p-6 animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {!isUnlocked ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Enter Code</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Enter your code..."
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError("");
                }}
                className="text-center text-lg"
                autoFocus
              />
              
              {error && (
                <p className="text-sm text-destructive text-center">{error}</p>
              )}
              
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Submit
                </Button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">
              ✅ Unlocked!
            </h2>
            
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  👥 Characters in Trouble:
                </h3>
                <p className="text-foreground">{charactersInTrouble}</p>
              </div>
              
              <div className="bg-destructive/10 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  🚨 Real-Life Issue:
                </h3>
                <p className="text-foreground">{realLifeIssue}</p>
              </div>
              
              <Button onClick={handleClose} className="w-full">
                Close
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CodeEntryModal;
