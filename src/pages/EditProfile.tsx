import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FarmCredLogo } from "@/components/FarmCredLogo";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, User, Phone, Mail, MapPin, Calendar, Shield } from "lucide-react";

const EditProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: "Musa",
    lastName: "Ibrahim", 
    email: "musa.ibrahim@email.com",
    phone: "+234 803 123 4567",
    dateOfBirth: "1985-06-15",
    gender: "male",
    address: "123 Farm Road, Funtua",
    city: "Funtua",
    state: "Katsina State",
    bvn: "12345678901",
    nin: "12345678901",
    bankName: "First Bank",
    accountNumber: "0123456789",
    accountName: "Musa Ibrahim",
    cooperativeName: "Funtua Farmers Cooperative",
    cooperativeId: "FFC001234"
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated.",
    });
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5">
      {/* Header */}
      <div className="bg-background border-b border-border p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
              <ArrowLeft size={20} />
            </Button>
            <FarmCredLogo size="md" />
          </div>
          <h1 className="text-xl font-semibold">Edit Profile</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Personal Information */}
        <Card className="p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
              <User size={20} className="text-primary" />
              Personal Information
            </h2>
            <p className="text-muted-foreground">Update your personal details and contact information.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Enter first name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Enter last name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter email address"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone size={16} className="text-success" />
                Phone Number
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Enter phone number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth" className="flex items-center gap-2">
                <Calendar size={16} className="text-warning" />
                Date of Birth
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Address Information */}
        <Card className="p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
              <MapPin size={20} className="text-primary" />
              Address Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address">Street Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Enter street address"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                placeholder="Enter city"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Katsina State">Katsina State</SelectItem>
                  <SelectItem value="Kaduna State">Kaduna State</SelectItem>
                  <SelectItem value="Kano State">Kano State</SelectItem>
                  <SelectItem value="Lagos State">Lagos State</SelectItem>
                  <SelectItem value="Ogun State">Ogun State</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Identity & Banking */}
        <Card className="p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
              <Shield size={20} className="text-primary" />
              Identity & Banking
            </h2>
            <p className="text-muted-foreground">Secure information for verification and payments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="bvn">BVN</Label>
              <Input
                id="bvn"
                value={formData.bvn}
                onChange={(e) => handleInputChange("bvn", e.target.value)}
                placeholder="Enter BVN"
                maxLength={11}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nin">NIN</Label>
              <Input
                id="nin"
                value={formData.nin}
                onChange={(e) => handleInputChange("nin", e.target.value)}
                placeholder="Enter NIN"
                maxLength={11}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bankName">Bank Name</Label>
              <Select value={formData.bankName} onValueChange={(value) => handleInputChange("bankName", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select bank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="First Bank">First Bank</SelectItem>
                  <SelectItem value="GTBank">GTBank</SelectItem>
                  <SelectItem value="Access Bank">Access Bank</SelectItem>
                  <SelectItem value="UBA">UBA</SelectItem>
                  <SelectItem value="Zenith Bank">Zenith Bank</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input
                id="accountNumber"
                value={formData.accountNumber}
                onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                placeholder="Enter account number"
                maxLength={10}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="accountName">Account Name</Label>
              <Input
                id="accountName"
                value={formData.accountName}
                onChange={(e) => handleInputChange("accountName", e.target.value)}
                placeholder="Enter account name"
              />
            </div>
          </div>
        </Card>

        {/* Cooperative Information */}
        <Card className="p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-2">Cooperative Information</h2>
            <p className="text-muted-foreground">Your cooperative membership details.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="cooperativeName">Cooperative Name</Label>
              <Input
                id="cooperativeName"
                value={formData.cooperativeName}
                onChange={(e) => handleInputChange("cooperativeName", e.target.value)}
                placeholder="Enter cooperative name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cooperativeId">Cooperative ID</Label>
              <Input
                id="cooperativeId"
                value={formData.cooperativeId}
                onChange={(e) => handleInputChange("cooperativeId", e.target.value)}
                placeholder="Enter cooperative ID"
              />
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button 
            onClick={handleSubmit} 
            className="flex-1"
          >
            <Save size={16} className="mr-2" />
            Save Changes
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate("/dashboard")}
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;