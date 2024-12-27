import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainSidebar } from "@/components/MainSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex">
      <MainSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      
      <main className="flex-1">
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="m-4"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        )}
        
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Repositories</h1>
          <p className="text-gray-600">Start managing your repositories here.</p>
        </div>
      </main>
    </div>
  );
};

export default Index;