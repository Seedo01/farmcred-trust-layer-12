import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FarmCredLogo } from "@/components/FarmCredLogo";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, MapPin, Leaf, Calendar, Camera } from "lucide-react";

const UpdateFarmData = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    farmSize: "2.5",
    location: "Funtua, Katsina State",
    cropTypes: "Maize & Millet",
    plantingDate: "2024-05-15",
    expectedHarvest: "2024-11-15",
    irrigationMethod: "rain-fed",
    fertilizer: "NPK",
    pesticide: "Recommended",
    laborers: "4",
    equipment: "Tractor, Planter, Harvester",
    notes: "Good soil quality, expecting high yield this season"
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    toast({
      title: "Farm Data Updated",
      description: "Your farm information has been successfully updated.",
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
          <h1 className="text-xl font-semibold">Update Farm Data</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <Card className="p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Farm Information</h2>
            <p className="text-muted-foreground">Keep your farm data up to date to maintain accurate credit scoring.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Farm Size */}
            <div className="space-y-2">
              <Label htmlFor="farmSize" className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Farm Size (hectares)
              </Label>
              <Input
                id="farmSize"
                value={formData.farmSize}
                onChange={(e) => handleInputChange("farmSize", e.target.value)}
                placeholder="Enter farm size"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="Enter farm location"
              />
            </div>

            {/* Crop Types */}
            <div className="space-y-2">
              <Label htmlFor="cropTypes" className="flex items-center gap-2">
                <Leaf size={16} className="text-success" />
                Crop Types
              </Label>
              <Input
                id="cropTypes"
                value={formData.cropTypes}
                onChange={(e) => handleInputChange("cropTypes", e.target.value)}
                placeholder="Enter crop types"
              />
            </div>

            {/* Planting Date */}
            <div className="space-y-2">
              <Label htmlFor="plantingDate" className="flex items-center gap-2">
                <Calendar size={16} className="text-accent" />
                Planting Date
              </Label>
              <Input
                id="plantingDate"
                type="date"
                value={formData.plantingDate}
                onChange={(e) => handleInputChange("plantingDate", e.target.value)}
              />
            </div>

            {/* Expected Harvest */}
            <div className="space-y-2">
              <Label htmlFor="expectedHarvest">Expected Harvest Date</Label>
              <Input
                id="expectedHarvest"
                type="date"
                value={formData.expectedHarvest}
                onChange={(e) => handleInputChange("expectedHarvest", e.target.value)}
              />
            </div>

            {/* Irrigation Method */}
            <div className="space-y-2">
              <Label htmlFor="irrigation">Irrigation Method</Label>
              <Select value={formData.irrigationMethod} onValueChange={(value) => handleInputChange("irrigationMethod", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select irrigation method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rain-fed">Rain-fed</SelectItem>
                  <SelectItem value="drip">Drip Irrigation</SelectItem>
                  <SelectItem value="sprinkler">Sprinkler</SelectItem>
                  <SelectItem value="flood">Flood Irrigation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Number of Laborers */}
            <div className="space-y-2">
              <Label htmlFor="laborers">Number of Laborers</Label>
              <Input
                id="laborers"
                type="number"
                value={formData.laborers}
                onChange={(e) => handleInputChange("laborers", e.target.value)}
                placeholder="Enter number of laborers"
              />
            </div>

            {/* Equipment */}
            <div className="space-y-2">
              <Label htmlFor="equipment">Farm Equipment</Label>
              <Input
                id="equipment"
                value={formData.equipment}
                onChange={(e) => handleInputChange("equipment", e.target.value)}
                placeholder="List your farm equipment"
              />
            </div>
          </div>

          {/* Fertilizer and Pesticide */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-2">
              <Label htmlFor="fertilizer">Fertilizer Type</Label>
              <Select value={formData.fertilizer} onValueChange={(value) => handleInputChange("fertilizer", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select fertilizer type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="NPK">NPK</SelectItem>
                  <SelectItem value="Urea">Urea</SelectItem>
                  <SelectItem value="Organic">Organic Compost</SelectItem>
                  <SelectItem value="DAP">DAP</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pesticide">Pesticide Usage</Label>
              <Select value={formData.pesticide} onValueChange={(value) => handleInputChange("pesticide", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select pesticide usage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Recommended">Recommended Dosage</SelectItem>
                  <SelectItem value="Organic">Organic Only</SelectItem>
                  <SelectItem value="Minimal">Minimal Use</SelectItem>
                  <SelectItem value="None">No Pesticides</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2 mt-6">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              placeholder="Add any additional information about your farm"
              className="min-h-[100px]"
            />
          </div>

          {/* Upload Photos Section */}
          <div className="mt-8 p-6 border-2 border-dashed border-border rounded-lg">
            <div className="text-center">
              <Camera size={32} className="mx-auto text-muted-foreground mb-2" />
              <h3 className="font-medium mb-2">Upload Farm Photos</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Add recent photos of your farm to support your data
              </p>
              <Button variant="outline">
                <Camera size={16} className="mr-2" />
                Upload Photos
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
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
        </Card>
      </div>
    </div>
  );
};

export default UpdateFarmData;