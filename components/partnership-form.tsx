"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const seedFrequencyOptions = ["Weekly", "Monthly", "Quarterly", "Annually", "One-Time"];

export function PartnershipForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    location: "",
    currency: "",
    amount: "",
    frequency: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await addDoc(collection(db, "partnerships"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
        location: "",
        currency: "",
        amount: "",
        frequency: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="form" className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-yellow-600">Start a Partnership with God</CardTitle>
            <CardDescription className="text-lg">Partnership Form</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-base text-gray-700">First Name *</Label>
                  <Input id="firstName" className="text-gray-700" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-base text-gray-700">Last Name *</Label>
                  <Input id="lastName" className="text-gray-700" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-base text-gray-700">Email *</Label>
                <Input id="email" className="text-gray-700" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base text-gray-700">Phone Number *</Label>
                <Input id="phone" className="text-gray-700" type="tel" value={formData.phone} onChange={handleChange} required />
              </div>

              <div>
                <Label htmlFor="dob" className="text-base text-gray-700">Date of Birth</Label>
                <Input id="dob" type="date" className="text-gray-700" value={formData.dob} onChange={handleChange} />
              </div>

              <div>
                <Label htmlFor="location" className="text-base text-gray-700">State/Country *</Label>
                <Input id="location" className="text-gray-700" value={formData.location} onChange={handleChange} required />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currency" className="text-base text-gray-700">Currency *</Label>
                  <select
                    id="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-white text-gray-700 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select currency</option>
                    <option value="NGN">NGN</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR [SEPA]</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="amount" className="text-base text-gray-700">Amount *</Label>
                  <Input id="amount" className="text-gray-700" type="number" value={formData.amount} onChange={handleChange} required />
                </div>
              </div>

              <div>
                <Label className="mb-3 block text-gray-700">Seed Frequency</Label>
                <div className="flex flex-wrap gap-3">
                  {seedFrequencyOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={`freq-${option}`}
                        name="frequency"
                        value={option}
                        checked={formData.frequency === option}
                        onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                        className="h-4 w-4"
                      />
                      <label htmlFor={`freq-${option}`} className="text-sm text-gray-700">{option}</label>
                    </div>
                  ))}
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full text-lg bg-yellow-500 hover:bg-yellow-600" size="lg">
                {loading ? "Submitting..." : "Become a Partner"}
              </Button>

              {success && <p className="text-green-600 text-center mt-2">Form submitted successfully!</p>}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
