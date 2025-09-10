import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FarmCredLogo } from "@/components/FarmCredLogo";
import { TrustBadge } from "@/components/TrustBadge";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  CreditCard, 
  Shield, 
  MapPin, 
  Camera, 
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const OnboardingSteps = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    nin: "",
    bvn: "",
    email: "",
    farmLocation: "",
    farmSize: ""
  });

  const steps = [
    {
      id: 1,
      title: "Phone & Identity",
      description: "Verify your phone number and identity",
      icon: Phone
    },
    {
      id: 2,
      title: "Financial Info",
      description: "Link your bank account securely",
      icon: CreditCard
    },
    {
      id: 3,
      title: "Farm Details",
      description: "Register your farm assets",
      icon: MapPin
    },
    {
      id: 4,
      title: "Verification",
      description: "Take a selfie for KYC verification",
      icon: Camera
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete registration
      toast({
        title: "Registration Successful!",
        description: "Welcome to FarmCred. Redirecting to your dashboard...",
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  };

  const handleStartCamera = () => {
    // Request camera permissions and access
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(() => {
          toast({
            title: "Camera Ready!",
            description: "Camera access granted. Take your selfie for KYC verification.",
          });
          // In a real app, this would open the camera component for selfie capture
        })
        .catch((error) => {
          toast({
            title: "Camera Access Required",
            description: "Please allow camera access to complete KYC verification.",
            variant: "destructive"
          });
          console.error("Camera access denied:", error);
        });
    } else {
      toast({
        title: "Camera Not Available",
        description: "Your device doesn't support camera access. Please use a supported device.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // In a real app, you'd reverse geocode these coordinates
          toast({
            title: "Location Captured!",
            description: `GPS coordinates: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
          });
          handleInputChange("farmLocation", `GPS: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        },
        (error) => {
          toast({
            title: "Location Access Required",
            description: "Please allow location access or enter manually.",
            variant: "destructive"
          });
          console.error("Location access denied:", error);
        }
      );
    } else {
      toast({
        title: "Location Not Available",
        description: "Your device doesn't support location services.",
        variant: "destructive"
      });
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 8XX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="nin">National Identity Number (NIN)</Label>
                <Input
                  id="nin"
                  placeholder="Enter your 11-digit NIN"
                  value={formData.nin}
                  onChange={(e) => handleInputChange("nin", e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-4 bg-primary/5 rounded-lg">
              <Shield size={20} className="text-primary" />
              <p className="text-sm text-muted-foreground">
                Your data is encrypted and verified with NIMC database
              </p>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="bvn">Bank Verification Number (BVN)</Label>
                <Input
                  id="bvn"
                  placeholder="Enter your 11-digit BVN"
                  value={formData.bvn}
                  onChange={(e) => handleInputChange("bvn", e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <TrustBadge type="security" label="Bank-Grade Security" />
              <TrustBadge type="verified" label="CBN Verified" />
            </div>
            
            <div className="flex items-center gap-2 p-4 bg-success/5 rounded-lg">
              <CheckCircle size={20} className="text-success" />
              <p className="text-sm text-muted-foreground">
                No charges will be applied to your account
              </p>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="farmLocation">Farm Location</Label>
                <Input
                  id="farmLocation"
                  placeholder="e.g., Funtua, Katsina State"
                  value={formData.farmLocation}
                  onChange={(e) => handleInputChange("farmLocation", e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="farmSize">Farm Size (Hectares)</Label>
                <Input
                  id="farmSize"
                  type="number"
                  placeholder="e.g., 2.5"
                  value={formData.farmSize}
                  onChange={(e) => handleInputChange("farmSize", e.target.value)}
                />
              </div>
            </div>
            
            <Button variant="outline" className="w-full" onClick={handleUseLocation}>
              <MapPin size={16} className="mr-2" />
              Use Current Location
            </Button>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6 text-center">
            <div className="bg-gradient-card p-8 rounded-xl">
              <Camera size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Take a Selfie</h3>
              <p className="text-muted-foreground text-sm">
                We'll verify this matches your NIN photo for security
              </p>
            </div>
            
            <Button variant="hero" className="w-full" onClick={handleStartCamera}>
              <Camera size={16} className="mr-2" />
              Start Camera
            </Button>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5 p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 pt-8">
          <FarmCredLogo size="lg" className="justify-center mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Join FarmCred</h1>
          <p className="text-muted-foreground">Build your agricultural credit profile</p>
        </div>
        
        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all ${
                currentStep >= step.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-muted-foreground'
              }`}>
                {currentStep > step.id ? (
                  <CheckCircle size={16} />
                ) : (
                  <step.icon size={16} />
                )}
              </div>
              <span className="text-xs text-center text-muted-foreground max-w-[60px]">
                {step.title}
              </span>
            </div>
          ))}
        </div>
        
        {/* Step Content */}
        <Card className="p-6 shadow-medium">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{steps[currentStep - 1].title}</h2>
            <p className="text-muted-foreground text-sm">{steps[currentStep - 1].description}</p>
          </div>
          
          {renderStepContent()}
          
          <Button 
            onClick={handleNext}
            className="w-full mt-6"
            variant={currentStep === steps.length ? "hero" : "default"}
          >
            {currentStep === steps.length ? "Complete Registration" : "Continue"}
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingSteps;