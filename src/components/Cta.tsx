"use client";

import React from "react";
import { Container } from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

import { AppStoreButton, GalaxyStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content: "This credit card has completely transformed how I manage my finances. The analytics feature helped me save over $2,000 last year!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Youtuber",
      content: "The mobile app is incredibly intuitive. I love getting instant notifications and the security features give me peace of mind.",
      rating: 5,
      avatar: "MC"
    },

    {
      name: "Emily Rodriguez",
      role: "Student",
      content: "The cashback rewards are unmatched. I've earned over $550 in cashback this year alone. Highly recommend!",
      rating: 5,
      avatar: "ER"
    },
        {
      name: "Lisa Park",
      role: "Startup Founder",
      content: "I recommend this card to all my clients. The financial insights and spending categories are professional-grade.",
      rating: 5,
      avatar: "LP"
    },
    {
      name: "David Thompson",
      role: "Travel Blogger",
      content: "No foreign transaction fees have saved me hundreds while traveling. The global acceptance is truly worldwide.",
      rating: 5,
      avatar: "DT"
    },

    {
      name: "James Wilson",
      role: "Entrepreneur",
      content: "Customer service is exceptional. They resolved my issue within minutes through the chat feature. Outstanding experience!",
      rating: 5,
      avatar: "JW"
    }
  ];


export const Cta = () => {
  return (


    


    <Container>


      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="bg-gradient-primary text-red-500 bg-clip-text">Users</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their financial lives
          </p>
      </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">4.9/5</div>
            <div className="text-muted-foreground">App Store Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">500K+</div>
            <div className="text-muted-foreground">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <div className="w-10 h-10 bg-coral/10 rounded-lg flex items-center justify-center">
                    <Quote className="w-5 h-5 text-coral" />
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-coral text-coral" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      

      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Join over 500,000 customers who have already discovered the future of banking. Apply now and get instant approval.
          </p>
        </div>


        <div className="flex flex-col items-start gap-3 md:flex-row">
            <GooglePlayButton size="md"/>
            <AppStoreButton size="md" />
        </div>
        {/* <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Download for Free
          </a>
        </div> */}
      </div>
    </Container>
  );
};
