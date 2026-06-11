"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AvailabilityCalendar } from "@/components/ui/availability-calendar";

const faqs = [
  {
    question: "How far in advance should I book?",
    answer: "For weddings, we recommend booking 6-12 months in advance, as popular dates fill up quickly. For portrait or maternity sessions, 4-6 weeks is usually sufficient."
  },
  {
    question: "Do you travel for destination weddings?",
    answer: "Absolutely! We love traveling and have shot weddings across India, Europe, and Southeast Asia. Custom travel quotes are provided upon request."
  },
  {
    question: "How long does photo delivery take?",
    answer: "We know you're excited! You will receive a 'sneak peek' of 15-20 images within 48 hours. The full curated gallery is delivered within 4-6 weeks."
  },
  {
    question: "Do you provide printed albums?",
    answer: "Yes. Our Gold and Platinum packages include premium, handcrafted leather albums. We believe your memories deserve to live off-screen in high-quality print."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", eventType: "", date: "", location: "", budget: "", message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", eventType: "", date: "", location: "", budget: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            We would love to hear from you. Tell us about your vision, your event, or simply say hello.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Form */}
          <AnimatedSection>
            <div className="bg-warm-gray-dark/5 p-8 rounded-2xl border border-warm-gray-dark/10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send an Inquiry</h2>
              
              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>Your inquiry has been received. We will get back to you within 24 hours.</p>
                  <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name *</label>
                      <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-background border border-warm-gray-dark/20 rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address *</label>
                      <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-background border border-warm-gray-dark/20 rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="jane@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground/80">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-background border border-warm-gray-dark/20 rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="eventType" className="text-sm font-medium text-foreground/80">Event Type</label>
                      <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} className="w-full bg-background border border-warm-gray-dark/20 rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors text-foreground">
                        <option value="">Select an option...</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Pre-Wedding">Pre-Wedding</option>
                        <option value="Maternity">Maternity/Newborn</option>
                        <option value="Corporate">Corporate/Event</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-sm font-medium text-foreground/80">Event Date</label>
                      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-background border border-warm-gray-dark/20 rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors text-foreground" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="location" className="text-sm font-medium text-foreground/80">Location/Venue</label>
                      <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full bg-background border border-warm-gray-dark/20 rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="City or Venue Name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-foreground/80">Estimated Budget (₹)</label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-background border border-warm-gray-dark/20 rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors text-foreground">
                      <option value="">Select a range...</option>
                      <option value="< 50k">Less than ₹50,000</option>
                      <option value="50k - 1L">₹50,000 - ₹1,00,000</option>
                      <option value="1L - 2L">₹1,00,000 - ₹2,00,000</option>
                      <option value="2L+">₹2,00,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/80">Your Message *</label>
                    <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-background border border-warm-gray-dark/20 rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Tell us about your plans..." />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full text-lg h-14">
                    {isSubmitting ? "Sending..." : (
                      <>Send Message <Send className="ml-2 w-5 h-5" /></>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Contact Details & FAQ */}
          <div className="space-y-16">
            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Studio Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Address</h4>
                    <p className="text-foreground/70">123 Luxury Lane, Bandra West<br />Mumbai, Maharashtra 400050<br />India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Business Hours</h4>
                    <p className="text-foreground/70">Tuesday - Sunday: 10:00 AM - 7:00 PM<br />Monday: Closed (By Appointment Only)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Contact</h4>
                    <p className="text-foreground/70">+91 98765 43210<br />hello@lenscraft.com</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-warm-gray-dark/20 pb-6 last:border-0 last:pb-0">
                    <h4 className="font-semibold text-foreground text-lg mb-2">{faq.question}</h4>
                    <p className="text-foreground/70">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Availability Calendar + Instagram */}
        <AnimatedSection delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AvailabilityCalendar />
            
            <div className="rounded-2xl overflow-hidden border border-warm-gray-dark/10 bg-warm-gray-dark/5 p-8 flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-14 h-14 flex items-center justify-center font-bold text-lg border-2 border-gold text-gold rounded-2xl mb-5 bg-gold/5">
                IG
              </div>
              <h3 className="font-heading font-bold text-2xl mb-2 text-foreground">Follow Our Journey</h3>
              <p className="text-foreground/60 text-center max-w-xs mb-2 text-sm">
                Behind-the-scenes, sneak peeks, and daily inspiration — all on our feed.
              </p>
              <p className="text-gold font-semibold mb-6 text-sm">12.4K Followers</p>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
                  @lenscraftstudios
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
