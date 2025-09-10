import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FarmCredLogo } from "@/components/FarmCredLogo";
import { useNavigate } from "react-router-dom";
import { Users, Building2, Briefcase } from "lucide-react";

const PortalSelection = () => {
  const navigate = useNavigate();

  const portals = [
    {
      id: "farmers",
      title: "Farmers Portal",
      description: "Access your credit profile, apply for loans, and manage farm data",
      icon: Users,
      route: "/dashboard",
      color: "bg-green-500",
    },
    {
      id: "cooperatives",
      title: "Cooperatives Portal", 
      description: "Manage cooperative members, states, and local government data",
      icon: Building2,
      route: "/cooperative",
      color: "bg-blue-500",
    },
    {
      id: "financial",
      title: "Financial Institutions Portal",
      description: "Review loan applications and assess credit scores",
      icon: Briefcase,
      route: "/lender",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5">
      {/* Header */}
      <div className="bg-background border-b border-border p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <FarmCredLogo size="lg" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Select Your Portal</h1>
          <p className="text-lg text-muted-foreground">
            Choose the appropriate portal to access your dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portals.map((portal) => (
            <Card key={portal.id} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 ${portal.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <portal.icon size={32} className="text-white" />
              </div>
              
              <h2 className="text-xl font-semibold mb-4">{portal.title}</h2>
              <p className="text-muted-foreground mb-6">{portal.description}</p>
              
              <Button 
                onClick={() => navigate(portal.route)}
                className="w-full"
                size="lg"
              >
                Enter Portal
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortalSelection;