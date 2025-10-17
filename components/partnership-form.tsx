"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const partnershipFocusOptions = [
  "Mercy Seat",
  "Aesthetics (Stage & Hall Decoration)",
  "Facility",
  "Welfare",
  "Junior Church",
  "Teens Church",
  "Publicity",
  "Sound Equipment",
  "Media Equipment",
  "Transport (Bus Service)",
  "Conferences /Special Programmes",
  "Mercy Encounters",
  "Global Missions",
]

const seedFrequencyOptions = ["Weekly", "Monthly", "Quarterly", "Annually", "One-Time"]

export function PartnershipForm() {
  const [selectedFocus, setSelectedFocus] = useState<string[]>([])
  const [selectedFrequency, setSelectedFrequency] = useState("")

  const handleFocusChange = (option: string) => {
    setSelectedFocus((prev) => (prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <section id="form" className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-yellow-600">Start a Partnership with God</CardTitle>
            <CardDescription className="text-lg">Partnership Form</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-base">First Name *</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-base">Last Name *</Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-base">Email *</Label>
                <Input id="email" type="email" required />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base">Phone Number *</Label>
                <Input id="phone" type="tel" required />
              </div>

              <div>
                <Label htmlFor="dob" className="text-base">Date of Birth</Label>
                <Input id="dob" type="date" />
              </div>

              <div>
                <Label htmlFor="anniversary" className="text-base">Wedding Anniversary</Label>
                <Input id="anniversary" type="date" />
              </div>

              <div>
                <Label htmlFor="location" className="text-base">State/Country *</Label>
                <Input id="location" required />
              </div>

              {/* <div>
                <Label className="mb-3 block">Partnership Focus (Kindly pick one or more) *</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {partnershipFocusOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={selectedFocus.includes(option)}
                        onCheckedChange={() => handleFocusChange(option)}
                      />
                      <label
                        htmlFor={option}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currency" className="text-base">Currency *</Label>
                  <select
                    id="currency"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select currency</option>
                    <option value="NGN">NGN</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR [SEPA]</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="amount" className="text-base">Amount *</Label>
                  <Input id="amount" type="number" required />
                </div>
              </div>

              <div>
                <Label className="mb-3 block">Seed Frequency</Label>
                <div className="flex flex-wrap gap-3">
                  {seedFrequencyOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={`freq-${option}`}
                        name="frequency"
                        value={option}
                        checked={selectedFrequency === option}
                        onChange={(e) => setSelectedFrequency(e.target.value)}
                        className="h-4 w-4"
                      />
                      <label htmlFor={`freq-${option}`} className="text-sm">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full text-lg bg-yellow-500 hover:bg-yellow-600" size="lg">
                Become a Partner
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
