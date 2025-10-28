import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CaseFiles from "./CaseFiles";
import Quiz from "./Quiz";

const Index = () => {
  const [activeTab, setActiveTab] = useState("case-files");

  return (
    <div className="min-h-screen bg-background">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 h-12">
              <TabsTrigger value="case-files" className="text-base">
                Case Files
              </TabsTrigger>
              <TabsTrigger value="quiz" className="text-base">
                Quiz
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="case-files" className="mt-0">
          <CaseFiles />
        </TabsContent>

        <TabsContent value="quiz" className="mt-0">
          <Quiz />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
