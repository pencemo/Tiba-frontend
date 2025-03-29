import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { CloudUploadIcon, Delete02Icon } from "hugeicons-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useEditCar } from "@/hooks/QueryHooks/useCars";
import { carCategory } from "@/Utils/ArrayList";
import { Loader2 } from "lucide-react";
const url = import.meta.env.VITE_API_BASE_URL

export function EditPopup({ open, onOpenChange, car }) {
  const [files, setFiles] = useState([]);
  const { toast } = useToast();
  const [deleteImages, setDeleteImages]=useState([])
  const [errors, setErrors] = useState('');
  const { mutate, isPending } = useEditCar({
    
  });

  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    color: '',
    mileage: '',
    transmission: 'automatic',
    fuel_type: '',
    seats: '',
    daily_rate: '',
    weekly_rate: '',
    monthly_rate: '',
    showroomId: '',
    images: [],
    available: true,
    category: '',
  });

  useEffect(() => {
    if (car) {
      setFormData({...car, daily_rate: car.daily_rate.$numberDecimal, weekly_rate: car.weekly_rate.$numberDecimal, monthly_rate: car.monthly_rate.$numberDecimal});
    }
  }, [car]);

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const oldImgs = formData.images.length
    if (e.target.files) {
      if(e.target.files.length+oldImgs > 4){
        toast({
          title: "Error",
          description: "You can only upload 4 images",
        });
        setErrors('You can only upload 4 images')
        return
      }
      setFiles(Array.from(e.target.files));
    }
  };

  const handleRemoveImage = (index) => {
    const filtedImg = files.filter((_, i) => i !== index);
    setFiles(filtedImg);
  }

  const handleRadioChange = (value) => {
    setFormData(prev => ({ ...prev, transmission: value }));
  };

  const deleteImage = async (url) => {
    setDeleteImages([...deleteImages, url]);
    const filteredImages = formData.images.filter(img => img !== url);
    setFormData(prev => ({ ...prev, images: filteredImages }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors('');
    // return console.log(deleteImages);

    if (!formData.make || !formData.showroomId || !formData.model || !formData.year || !formData.fuel_type || !formData.daily_rate) {
      return setErrors('Please fill all required fields');
    }

    const newFormData = new FormData();

    for(const [key, value] of Object.entries(formData)){
        if(key === 'images'){
            formData.images.forEach((image) => {
                newFormData.append('images', image);
            })
        }else{
        newFormData.append(key, value);
        }
    }

    deleteImages.forEach((image) => {
      newFormData.append('deleteImages', image);
    });

    files.forEach((file) => {
      newFormData.append('files', file);
    })

    mutate(newFormData, {
      onSuccess: (data) => {
        if(data.success){
          handleCancel()
          toast({
            title: "Car updated",
            description: "Car data updated successfully",
          });
        }else{
          toast({
            title: "Error",
            description: "Error updating Car. Please try again.",
          });
          setErrors(data.message)
        }
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Error updating Car. Please try again.",
        });
      },
    });
    // onOpenChange(false);
  };

const handleCancel = () => {
    setFormData({
      make: '',
      model: '',
      year: '',
      color: '',
      mileage: '',
      transmission: 'automatic',
      fuel_type: '',
      seats: '',
      daily_rate: '',
      weekly_rate: '',
      monthly_rate: '',
      showroomId: '',
      available: true,
      category: ''
    });
    setFiles([]);
    setDeleteImages([])
    setErrors('')
    onOpenChange(false);
}
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-md:h-full overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Car Details</DialogTitle>
          <DialogDescription>
            Update the car details below. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="images"
              className="w-full flex flex-col gap-1 items-center bg-muted justify-center cursor-pointer hover:bg-muted-foreground/20 h-24 rounded-lg border border-dashed"
            >
              <span>
                <CloudUploadIcon size={30} strokeWidth={1.3} />
              </span>
              <span className="text-sm font-medium">Upload Images</span>
            </label>
            <input
              id="images"
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="sr-only"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <FormField
              label="Make"
              id="make"
              value={formData.make}
              onChange={handleInputChange}
              name="make"
              placeholder="e.g. Toyota"
              error={errors && !formData.make}
            />
            <FormField
              label="Model"
              id="model"
              value={formData.model}
              onChange={handleInputChange}
              name="model"
              placeholder="e.g. Corolla"
              error={errors && !formData.model}
            />
            <RadioGroupField
              label="Transmission"
              value={formData.transmission}
              onValueChange={handleRadioChange}
            />
          </div>

          
          <div className="grid md:grid-cols-3 gap-4">
            <FormField
              label="Mileage"
              id="mileage"
              value={formData.mileage}
              onChange={handleInputChange}
              name="mileage"
              type="number"
              placeholder="e.g. 50000"
            />
            <FormField
              label="Number of Seats"
              id="seats"
              value={formData.seats}
              onChange={handleInputChange}
              name="seats"
              type="number"
              placeholder="e.g. 5"
            />
            <FormField
              label="Color"
              id="color"
              value={formData.color}
              onChange={handleInputChange}
              name="color"
              placeholder="e.g. Red"
            />
           
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <SelectField
              label="Fuel Type"
              name="fuel_type"
              value={formData.fuel_type}
              onValueChange={(value) => setFormData(prev => ({ ...prev, fuel_type: value }))}
              options={['petrol', 'diesel', 'electric', 'hybrid']}
              error={errors && !formData.fuel_type}
            />
            <SelectField
              label="Category"
              name="category"
              value={formData.category}
              onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
              options={carCategory}
              error={errors && !formData.category}
            />
            <SelectField
              label="Year"
              name="year"
              value={formData.year}
              onValueChange={(value) => setFormData(prev => ({ ...prev, year: value }))}
              options={years}
              error={errors && !formData.year}
            />
          </div>


          <div className="grid md:grid-cols-3 gap-4">
            <FormField
              label="Daily Rate"
              id="daily-rate"
              value={formData.daily_rate}
              onChange={handleInputChange}
              name="daily_rate"
              type="text"
              placeholder="per AED"
              error={errors && !formData.daily_rate}
            />
            <FormField
              label="Weekly Rate"
              id="weekly-rate"
              value={formData.weekly_rate}
              onChange={handleInputChange}
              name="weekly_rate"
              type="text"
              placeholder="per AED"
              error={errors && !formData.weekly_rate}
            />
            <FormField
              label="Monthly Rate"
              id="monthly-rate"
              value={formData.monthly_rate}
              onChange={handleInputChange}
              name="monthly_rate"
              type="text"
              placeholder="per AED"
              error={errors && !formData.monthly_rate}
            />
            
          </div>

         
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Images:</p>
              <div className="flex w-full gap-3 flex-wrap">
              
                
                {files.map((image, index) => (
                  <div key={index} className="w-32 h-20 relative">
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 rounded-md grid place-content-center">
                      <Delete02Icon className="bg-white rounded-full p-1 cursor-pointer" onClick={() => handleRemoveImage(index)} />
                    </div>
                    <img className="w-full h-full border object-cover rounded-md" key={index} src={URL.createObjectURL(image)} alt="" />
                  </div>
                ))}
                {formData?.images.map((image, index) => (
                  <div key={index} className="w-32 h-20 relative">
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 rounded-md grid place-content-center">
                      <Delete02Icon className="bg-white rounded-full p-1 cursor-pointer" onClick={() => deleteImage(image)} />
                    </div>
                    <img className="w-full h-full border object-cover rounded-md" src={`${url}${image}`} alt="" />
                  </div>
                ))}
              </div>
            </div>
          
          {errors && <p className="text-sm text-center text-red-500">{errors}</p>}
          <Button type="submit" className="w-full">
            {isPending ? <Loader2 className="animate-spin"/>: "Save Changes"}
          </Button>
        </form>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

const FormField = ({ label, id, value, onChange, name, placeholder, type = 'text', error }) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
      className={error ? 'border-red-500' : ''}
    />
  </div>
);

const SelectField = ({ label, name, value, onValueChange, options, error }) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    <Select name={name} value={value} onValueChange={onValueChange}>
      <SelectTrigger className={error ? 'border-red-500' : ''}>
        <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option.toString()}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

const RadioGroupField = ({ label, value, onValueChange }) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    <RadioGroup className="flex gap-3" value={value} onValueChange={onValueChange}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="manual" id="manual" />
        <Label htmlFor="manual">Manual</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="automatic" id="automatic" />
        <Label htmlFor="automatic">Automatic</Label>
      </div>
    </RadioGroup>
  </div>
);