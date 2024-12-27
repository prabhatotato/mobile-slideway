import { Home, FileCode2, Cloud, HelpCircle, Settings, PhoneCall, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItem {
  icon: React.ComponentType;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Repositories", href: "/" },
  { icon: FileCode2, label: "AI Code Review", href: "/code-review" },
  { icon: Cloud, label: "Cloud Security", href: "/security" },
  { icon: HelpCircle, label: "How to Use", href: "/help" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: PhoneCall, label: "Support", href: "/support" },
  { icon: LogOut, label: "Logout", href: "/logout" },
];

interface MainSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MainSidebar({ isOpen, onClose }: MainSidebarProps) {
  const isMobile = useIsMobile();

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white">
      <div className="p-4 border-b">
        <img 
          src="/lovable-uploads/5d5fd859-7d64-436a-8c52-312ff968818d.png" 
          alt="CodeAnt AI" 
          className="h-8"
        />
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="w-full justify-start gap-3 font-normal"
            onClick={() => isMobile && onClose()}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </nav>
    </div>
  );

  if (isMobile) {
    return isOpen ? (
      <>
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
        <div className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-white shadow-lg slide-down",
          "h-[80vh] overflow-y-auto"
        )}>
          {sidebarContent}
        </div>
      </>
    ) : null;
  }

  return (
    <div className="w-64 border-r h-screen sticky top-0">
      {sidebarContent}
    </div>
  );
}