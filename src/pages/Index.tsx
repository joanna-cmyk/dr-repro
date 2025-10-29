import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine active tab from URL
  const activeTab = location.pathname === "/quiz" ? "quiz" : "case-files";

  const handleTabChange = (value: string) => {
    navigate(value === "quiz" ? "/quiz" : "/case-files");
  };

  return (
    <div className="min-h-screen bg-background">
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
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

        <div className="mt-0">
          <Outlet />
        </div>
      </Tabs>
    </div>
  );
};

export default Index;
