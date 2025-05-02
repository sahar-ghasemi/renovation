"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What types of renovation and remodeling services do you offer?",
    answer:
      "We offer a wide range of renovation and remodeling services, including complete building renovation, kitchen remodeling, bathroom renovation, room renovations, and exterior space modernization. Each project is designed and executed according to your specific needs.",
  },
  {
    question: "How long do renovation projects typically take?",
    answer:
      "Project duration depends on the type and scope of work. Smaller projects like bathroom renovations may take 2-3 weeks, while larger projects like complete home renovations may require 2-3 months. We always strive to minimize disruption to your daily life through careful planning.",
  },
  {
    question: "Do you provide warranties for completed work?",
    answer:
      "Yes, we provide warranties for all our services. The warranty period varies depending on the type of work but typically ranges from 1 to 5 years. Warranty details are clearly specified in the contract.",
  },
  {
    question: "How can I estimate my project budget?",
    answer:
      "We have an online estimator tool on our website that helps you get an initial cost estimate. You can also contact our team for a free consultation to get a more accurate cost assessment.",
  },
  {
    question: "Can I stay in my home during the renovation?",
    answer:
      "This depends on the type and scope of the project. For smaller projects, you can usually stay in your home. However, for larger projects, you may need to temporarily relocate. We'll consult with you and suggest appropriate solutions.",
  },
  {
    question: "How can I ensure the quality of your work?",
    answer:
      "We are licensed professionals with an expert team. You can view our previous work samples and speak with our past clients. Additionally, we provide regular progress reports throughout the project, allowing you to verify the quality at every stage.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 bg-ivory px-4 sm:px-6 lg:px-8 relative min-h-[800px]">
      {/* FAQ Section */}
      <div className="w-full lg:w-2/3">
        <div className="mb-4">
          <div className="relative">
            <div className="absolute left-0 top-3 h-[60px] w-[4px] bg-brown rounded-tr-full rounded-br-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-4 pl-8">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600 pl-8">
              Answers to common questions about our renovation and remodeling
              services
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.4,
          }}
        >
          <Accordion.Root
            type="single"
            collapsible
            className="w-full space-y-4"
          >
            {faqData.map((item, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl rounded-br-[90px] shadow-sm  
                overflow-hidden border border-beige/10 hover:border-beige/20 transition-colors"
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    className="group flex w-full items-center justify-between p-4 
                    text-left hover:bg-beige/50 data-[state=open]:bg-beige transition-colors"
                  >
                    <motion.span
                      className="text-lg font-semibold text-gray-800"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1 * index,
                      }}
                    >
                      {item.question}
                    </motion.span>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1 * index,
                      }}
                    >
                      <ChevronDown
                        className="h-5 w-5 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180"
                        aria-hidden
                      />
                    </motion.div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="p-6 text-gray-600 border-t border-gray-100"
                  >
                    {item.answer}
                  </motion.div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="fixed lg:absolute top-1/2 -translate-y-1/2 right-8 w-96 hidden lg:block">
        <motion.div
          style={{
            backgroundImage: "url(/assets/images/kitchen8.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-96 h-96 rounded-t-full rounded-br-full shadow-lg border-6 border-beige"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.4,
          }}
        />
      </div>
    </section>
  );
};

export default FAQSection;
