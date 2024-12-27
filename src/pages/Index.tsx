import { useState } from "react";
import { Menu } from "lucide-react";
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
          <button
            className="p-4 hover:bg-gray-100 rounded-lg transition-colors m-4"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
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