"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, CheckCircle } from "lucide-react"

export function RepairForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    jerseyDetails: "",
    description: "",
    images: [] as File[]
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an API
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitted) {
    return (
      <div className="text-center py-12 px-8 bg-secondary rounded">
        <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
        <h3 className="font-serif text-xl tracking-wide-custom text-foreground mb-2">
          REQUEST RECEIVED
        </h3>
        <p className="text-muted-foreground">
          Thanks for your submission! We&apos;ll review your request and send you a quote within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-xs tracking-wide text-foreground">
            NAME
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-xs tracking-wide text-foreground">
            EMAIL
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Service Type */}
      <div className="space-y-2">
        <Label htmlFor="service" className="text-xs tracking-wide text-foreground">
          SERVICE NEEDED
        </Label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full h-10 px-3 rounded bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Select a service</option>
          <option value="repair">Jersey Repair (From $35)</option>
          <option value="reprint">Name & Number Reprint (From $45)</option>
          <option value="restoration">Full Restoration (From $95)</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      {/* Jersey Details */}
      <div className="space-y-2">
        <Label htmlFor="jerseyDetails" className="text-xs tracking-wide text-foreground">
          JERSEY DETAILS
        </Label>
        <Input
          id="jerseyDetails"
          name="jerseyDetails"
          value={formData.jerseyDetails}
          onChange={handleChange}
          required
          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
          placeholder="e.g., 1998 France Home, Size L"
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description" className="text-xs tracking-wide text-foreground">
          DESCRIBE THE ISSUE
        </Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
          placeholder="Please describe what repairs or services you need..."
        />
      </div>

      {/* Image Upload */}
      <div className="space-y-2">
        <Label className="text-xs tracking-wide text-foreground">
          PHOTOS (OPTIONAL)
        </Label>
        <div className="border-2 border-dashed border-border rounded p-8 text-center hover:border-muted-foreground transition-colors cursor-pointer">
          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
          <p className="text-sm text-muted-foreground mb-1">
            Drag and drop images or click to browse
          </p>
          <p className="text-xs text-muted-foreground">
            PNG, JPG up to 10MB each
          </p>
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files) {
                setFormData(prev => ({
                  ...prev,
                  images: Array.from(e.target.files || [])
                }))
              }
            }}
          />
        </div>
      </div>

      {/* Submit */}
      <Button 
        type="submit" 
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-wide-custom"
      >
        SUBMIT REQUEST
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to our terms and privacy policy.
      </p>
    </form>
  )
}
