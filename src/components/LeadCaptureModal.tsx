import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Lock, Palette, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
});

type FormData = z.infer<typeof formSchema>;

const LeadCaptureModal = ({ isOpen, onClose }: LeadCaptureModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [generatedColor, setGeneratedColor] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const generatePurpleColor = useCallback(() => {
    // Generate random dark purple variations
    const hue = 260 + Math.random() * 40; // 260-300 for purple range
    const saturation = 40 + Math.random() * 30; // 40-70%
    const lightness = 20 + Math.random() * 25; // 20-45%
    const color = `hsl(${Math.round(hue)}, ${Math.round(saturation)}%, ${Math.round(lightness)}%)`;
    setGeneratedColor(color);
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Form data with hidden fields
    const fullData = {
      ...formData,
      why: "Requested Free Numerology Report to gain clarity on life purpose",
      colorCode: generatedColor || "Not generated",
      timestamp: new Date().toISOString(),
    };
    
    console.log("Form submitted:", fullData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset form after animation completes
    setTimeout(() => {
      setFormData({ name: "", phone: "", email: "" });
      setErrors({});
      setGeneratedColor(null);
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-lg z-50"
          >
            <div className="card-cosmic rounded-3xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {isSubmitted ? (
                // Success state
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                    <Check className="w-10 h-10 text-background" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                    You're All Set!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your personalized numerology report is on its way to your inbox. 
                    Check your email in the next few minutes!
                  </p>
                  <Button onClick={handleClose} className="bg-button-gradient">
                    Close
                  </Button>
                </motion.div>
              ) : (
                // Form state
                <>
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-cosmic-light flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-foreground" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2 text-foreground">
                      Get Your Free Report
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Enter your details below to receive your personalized numerology reading
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-secondary/50 border-border focus:border-primary"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-secondary/50 border-border focus:border-primary"
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-secondary/50 border-border focus:border-primary"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>

                    {/* Color Generator */}
                    <div className="space-y-2">
                      <Label className="text-foreground">Your Cosmic Color</Label>
                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={generatePurpleColor}
                          className="flex-1 border-border hover:bg-secondary"
                        >
                          <Palette className="w-4 h-4 mr-2" />
                          Generate Color
                        </Button>
                        {generatedColor && (
                          <div
                            className="w-12 h-10 rounded-lg border border-border flex-shrink-0"
                            style={{ backgroundColor: generatedColor }}
                            title={generatedColor}
                          />
                        )}
                      </div>
                      {generatedColor && (
                        <p className="text-xs text-muted-foreground font-mono">
                          {generatedColor}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 text-base font-semibold bg-button-gradient hover:opacity-90 transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 mr-2" />
                          Get My Free Report Now
                        </>
                      )}
                    </Button>

                    {/* Privacy Note */}
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Lock className="w-4 h-4" />
                      <span>Your data stays private & secure</span>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadCaptureModal;
