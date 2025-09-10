import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FarmCredLogo } from "@/components/FarmCredLogo";
import { TrustBadge } from "@/components/TrustBadge";
import { FeatureCard } from "@/components/FeatureCard";
import { StatsCard } from "@/components/StatsCard";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-farming.jpg";
import { 
  Shield, 
  CreditCard, 
  MapPin, 
  Users, 
  TrendingUp, 
  Globe,
  CheckCircle,
  ArrowRight,
  Phone,
  Menu,
  X
} from "lucide-react";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const features = [
    {
      icon: Shield,
      title: "Verified Identity System",
      description: "Built on NIN & BVN verification with bank-grade security. Every farmer profile is authenticated through official Nigerian databases.",
      benefits: [
        "NIN & BVN API integration",
        "Selfie-based KYC verification", 
        "SMS OTP security",
        "Fraud detection system"
      ]
    },
    {
      icon: MapPin,
      title: "GPS Farm Asset Registry",
      description: "Register farmland with GPS coordinates and satellite verification. Create digital collateral certificates linked to NCR.",
      benefits: [
        "GPS-tagged farm verification",
        "Satellite imagery validation",
        "Digital collateral certificates",
        "NCR integration"
      ]
    },
    {
      icon: CreditCard,
      title: "AI-Powered Credit Scoring",
      description: "Advanced algorithms assess creditworthiness using farm data, cooperative history, and payment behavior.",
      benefits: [
        "Smart risk assessment",
        "Cooperative data integration",
        "Real-time credit scoring",
        "Loan matching system"
      ]
    },
    {
      icon: Users,
      title: "Cooperative Integration",
      description: "Work with trusted farmer cooperatives and field agents to ensure authentic onboarding and community validation.",
      benefits: [
        "Cooperative validation",
        "Agent network support",
        "Community verification",
        "Group lending options"
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <FarmCredLogo size="md" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <Link to="/onboarding">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/onboarding">
                <Button variant="hero">Get Started</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/onboarding">
                  <Button variant="outline" className="w-full">Sign In</Button>
                </Link>
                <Link to="/onboarding">
                  <Button variant="hero" className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-success/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <TrustBadge type="verified" label="CBN Verified" />
                  <TrustBadge type="security" label="Bank-Grade Security" />
                  <TrustBadge type="rating" label="NIMC Integrated" />
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Agricultural
                  <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent block">
                    Credit Made Simple
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Build verified farmer profiles, register farm assets, and access fair agricultural 
                  lending through Nigeria's first trust-based agricultural credit platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/onboarding">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Start Registration
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone size={20} className="mr-2" />
                  USSD: *123*456#
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-success" />
                  <span>Free registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-success" />
                  <span>No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-success" />
                  <span>Instant verification</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="Nigerian farmer using FarmCred mobile app" 
                  className="rounded-2xl shadow-strong w-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Farmer Dashboard Cards */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Farmer Dashboard Preview
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how farmers can track their credit profile, farm assets, and loan status in real-time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Sample Farmer Cards */}
            <Card className="p-6 bg-gradient-card shadow-soft border border-border">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Musa Ibrahim</h3>
                <p className="text-sm text-muted-foreground">Funtua, Katsina State</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Credit Score</span>
                  <span className="font-semibold text-success">750/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Hectares</span>
                  <span className="font-semibold">2.5 ha</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Loan Term</span>
                  <span className="font-semibold">12 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Active Loan</span>
                  <span className="font-semibold">₦250,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Next Payment</span>
                  <span className="font-semibold">Dec 15, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Payment Amount</span>
                  <span className="font-semibold">₦25,000</span>
                </div>
                <Button className="w-full mt-4" variant="hero" onClick={() => toast({
                  title: "Payment Processing",
                  description: "Redirecting to secure payment portal...",
                })}>
                  Make Payment
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-soft border border-border">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Fatima Yusuf</h3>
                <p className="text-sm text-muted-foreground">Kaduna, Kaduna State</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Credit Score</span>
                  <span className="font-semibold text-success">820/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Hectares</span>
                  <span className="font-semibold">4.2 ha</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Loan Term</span>
                  <span className="font-semibold">18 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Active Loan</span>
                  <span className="font-semibold">₦450,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Next Payment</span>
                  <span className="font-semibold">Dec 10, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Payment Amount</span>
                  <span className="font-semibold">₦30,000</span>
                </div>
                <Button className="w-full mt-4" variant="hero" onClick={() => toast({
                  title: "Payment Processing", 
                  description: "Redirecting to secure payment portal...",
                })}>
                  Make Payment
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-soft border border-border">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Ahmed Bello</h3>
                <p className="text-sm text-muted-foreground">Zaria, Kaduna State</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Credit Score</span>
                  <span className="font-semibold text-warning">650/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Hectares</span>
                  <span className="font-semibold">1.8 ha</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Loan Term</span>
                  <span className="font-semibold">6 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Active Loan</span>
                  <span className="font-semibold">₦180,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Next Payment</span>
                  <span className="font-semibold">Dec 20, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Payment Amount</span>
                  <span className="font-semibold">₦35,000</span>
                </div>
                <Button className="w-full mt-4" variant="hero" onClick={() => toast({
                  title: "Payment Processing",
                  description: "Redirecting to secure payment portal...",
                })}>
                  Make Payment
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Nigerian Agriculture
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive features designed to create trust, reduce fraud, and enable 
              fair access to agricultural financing across Nigeria.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About FarmCred</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              FarmCred is Nigeria's first digital agricultural lending platform that builds trust through verified farmer identities and asset registration. We connect farmers with financial institutions, enabling access to fair credit and building sustainable agricultural finance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure & Trusted</h3>
              <p className="text-muted-foreground">
                Bank-grade security with NIN and BVN verification ensures authentic farmer profiles and prevents fraud.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Asset Verification</h3>
              <p className="text-muted-foreground">
                GPS-tagged farm registration with satellite verification creates reliable collateral certificates.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fair Access</h3>
              <p className="text-muted-foreground">
                AI-powered credit scoring connects verified farmers with appropriate lending options at fair rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your agricultural finance? Contact us today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">0800-FARMCRED</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">help@farmcred.ng</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Office</h3>
              <p className="text-muted-foreground">Funtua, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Agricultural Credit Profile?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of Nigerian farmers who have already started their journey 
            to better agricultural financing through verified digital profiles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 w-full sm:w-auto"
              >
                Start Registration
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 w-full sm:w-auto"
            >
              <Phone size={20} className="mr-2" />
              Call: 0800-FARMCRED
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <FarmCredLogo size="md" className="text-background" />
              <p className="text-background/70">
                Nigeria's first trust-based agricultural credit platform
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2 text-background/70">
                <p>Farmer Registration</p>
                <p>Asset Verification</p>
                <p>Credit Scoring</p>
                <p>Loan Matching</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-background/70">
                <p>Help Center</p>
                <p>USSD Guide</p>
                <p>Video Tutorials</p>
                <p>Contact Support</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-background/70">
                <p>0800-FARMCRED</p>
                <p>help@farmcred.ng</p>
                <p>Funtua, Nigeria</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 FarmCred. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
