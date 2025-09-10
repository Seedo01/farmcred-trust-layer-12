import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FarmCredLogo } from "@/components/FarmCredLogo";
import { StatsCard } from "@/components/StatsCard";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Building2, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Search,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Filter,
  Leaf,
  Tractor,
  Wheat
} from "lucide-react";

const BanksAgribusiness = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const banks = [
    {
      id: 1,
      name: "First Bank of Nigeria",
      type: "Commercial Bank",
      rating: 4.5,
      location: "Katsina, Nigeria",
      phone: "+234 803 123 4567",
      email: "agriloans@firstbank.com.ng",
      specialties: ["Agricultural Loans", "Equipment Financing", "Working Capital"],
      loanRange: "₦100,000 - ₦5,000,000",
      interestRate: "12-18%",
      processing: "5-10 days",
      featured: true
    },
    {
      id: 2,
      name: "Bank of Agriculture (BOA)",
      type: "Development Bank",
      rating: 4.8,
      location: "Kaduna, Nigeria",
      phone: "+234 805 987 6543",
      email: "loans@boa.gov.ng",
      specialties: ["Crop Production", "Livestock", "Agro-processing"],
      loanRange: "₦50,000 - ₦10,000,000",
      interestRate: "9-15%",
      processing: "7-14 days",
      featured: true
    },
    {
      id: 3,
      name: "Zenith Bank",
      type: "Commercial Bank",
      rating: 4.3,
      location: "Kano, Nigeria",
      phone: "+234 807 111 2222",
      email: "agriculture@zenithbank.com",
      specialties: ["Farm Mechanization", "Storage Facilities", "Export Finance"],
      loanRange: "₦200,000 - ₦8,000,000",
      interestRate: "14-20%",
      processing: "3-7 days",
      featured: false
    }
  ];

  const agribusinesses = [
    {
      id: 1,
      name: "Olam Nigeria",
      type: "Agro-Processing",
      rating: 4.6,
      location: "Lagos, Nigeria",
      phone: "+234 809 333 4444",
      email: "farmers@olamgroup.com",
      specialties: ["Rice Processing", "Sesame", "Cashew"],
      services: ["Input Supply", "Off-taking", "Training"],
      partnership: "Contract Farming",
      featured: true
    },
    {
      id: 2,
      name: "Dangote Agro Sacks",
      type: "Input Supplier",
      rating: 4.4,
      location: "Katsina, Nigeria",
      phone: "+234 802 555 6666",
      email: "supply@dangote.com",
      specialties: ["Fertilizer", "Seeds", "Agro-chemicals"],
      services: ["Bulk Supply", "Credit Sales", "Technical Support"],
      partnership: "Input Credit",
      featured: true
    },
    {
      id: 3,
      name: "Flour Mills Nigeria",
      type: "Agro-Processing",
      rating: 4.2,
      location: "Kano, Nigeria",
      phone: "+234 806 777 8888",
      email: "outgrowers@flourmills.com",
      specialties: ["Wheat", "Maize", "Rice"],
      services: ["Guaranteed Purchase", "Quality Premium", "Storage"],
      partnership: "Outgrower Scheme",
      featured: false
    }
  ];

  const filteredBanks = banks.filter(bank => 
    bank.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bank.specialties.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredAgribusinesses = agribusinesses.filter(agri => 
    agri.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agri.specialties.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5">
      {/* Header */}
      <div className="bg-background border-b border-border p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
              <ArrowLeft size={20} />
            </Button>
            <FarmCredLogo size="md" />
          </div>
          <h1 className="text-xl font-semibold">Banks & Agribusiness</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Welcome Section */}
        <div className="bg-gradient-hero p-6 rounded-xl text-primary-foreground mb-6">
          <h1 className="text-2xl font-bold mb-2">Financial Partners & Agribusiness Network</h1>
          <p className="opacity-90 mb-4">
            Connect with verified lenders and agribusiness partners to grow your farming operations
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatsCard
            icon={Building2}
            title="Partner Banks"
            value="15+"
            description="Verified financial institutions"
          />
          <StatsCard
            icon={Users}
            title="Agribusinesses"
            value="25+"
            description="Active partnerships"
          />
          <StatsCard
            icon={TrendingUp}
            title="Success Rate"
            value="94%"
            description="Successful partnerships"
          />
          <StatsCard
            icon={DollarSign}
            title="Total Funding"
            value="₦2.5B+"
            description="Disbursed to farmers"
          />
        </div>

        {/* Search and Filter */}
        <Card className="p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search banks, agribusinesses, or services..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant={activeFilter === "all" ? "default" : "outline"} size="sm" onClick={() => setActiveFilter("all")}>
                All
              </Button>
              <Button variant={activeFilter === "featured" ? "default" : "outline"} size="sm" onClick={() => setActiveFilter("featured")}>
                Featured
              </Button>
              <Button variant="outline" size="sm">
                <Filter size={16} className="mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="banks" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="banks" className="flex items-center gap-2">
              <Building2 size={16} />
              Banks & Lenders
            </TabsTrigger>
            <TabsTrigger value="agribusiness" className="flex items-center gap-2">
              <Tractor size={16} />
              Agribusiness Partners
            </TabsTrigger>
          </TabsList>

          {/* Banks Tab */}
          <TabsContent value="banks" className="space-y-4">
            {filteredBanks.map((bank) => (
              <Card key={bank.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Bank Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{bank.name}</h3>
                          {bank.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
                        </div>
                        <p className="text-muted-foreground mb-2">{bank.type}</p>
                        <div className="flex items-center gap-1 mb-2">
                          <Star size={16} className="text-warning fill-warning" />
                          <span className="text-sm font-medium">{bank.rating}</span>
                          <span className="text-sm text-muted-foreground">(245 reviews)</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin size={16} className="text-muted-foreground" />
                        <span>{bank.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone size={16} className="text-muted-foreground" />
                        <span>{bank.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail size={16} className="text-muted-foreground" />
                        <span>{bank.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock size={16} className="text-muted-foreground" />
                        <span>Processing: {bank.processing}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {bank.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline">{specialty}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Loan Details */}
                  <div className="lg:w-80 bg-gradient-card p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Loan Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Loan Range:</span>
                        <span className="font-medium">{bank.loanRange}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Interest Rate:</span>
                        <span className="font-medium">{bank.interestRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Processing Time:</span>
                        <span className="font-medium">{bank.processing}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" className="flex-1">Apply Now</Button>
                      <Button variant="outline" size="sm" className="flex-1">Learn More</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Agribusiness Tab */}
          <TabsContent value="agribusiness" className="space-y-4">
            {filteredAgribusinesses.map((agri) => (
              <Card key={agri.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Agribusiness Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{agri.name}</h3>
                          {agri.featured && <Badge className="bg-success text-success-foreground">Partner</Badge>}
                        </div>
                        <p className="text-muted-foreground mb-2">{agri.type}</p>
                        <div className="flex items-center gap-1 mb-2">
                          <Star size={16} className="text-warning fill-warning" />
                          <span className="text-sm font-medium">{agri.rating}</span>
                          <span className="text-sm text-muted-foreground">(156 reviews)</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin size={16} className="text-muted-foreground" />
                        <span>{agri.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone size={16} className="text-muted-foreground" />
                        <span>{agri.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail size={16} className="text-muted-foreground" />
                        <span>{agri.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle size={16} className="text-success" />
                        <span>{agri.partnership}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-medium mb-2">Specialties:</h5>
                      <div className="flex flex-wrap gap-2">
                        {agri.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="border-success text-success">
                            <Leaf size={12} className="mr-1" />
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Services Details */}
                  <div className="lg:w-80 bg-gradient-card p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Services Offered</h4>
                    <div className="space-y-2 mb-4">
                      {agri.services.map((service, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle size={14} className="text-success" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">Partner Now</Button>
                      <Button variant="outline" size="sm" className="flex-1">Details</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BanksAgribusiness;