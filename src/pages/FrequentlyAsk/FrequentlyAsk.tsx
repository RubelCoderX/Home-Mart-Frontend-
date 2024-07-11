import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FrequentlyAsk = () => {
  const faqItems = [
    {
      id: "item-1",
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      id: "item-2",
      question: "How do I place an order?",
      answer:
        "You can place an order through our website. Simply browse the products, add items to your cart, and proceed to checkout.",
    },
    {
      id: "item-3",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal.",
    },
    {
      id: "item-4",
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unused and undamaged items. Please refer to our Returns page for detailed instructions.",
    },
  ];

  return (
    <div className="bg-[#f8f9fa] py-8">
      <div className="container mx-auto px-4">
        <div className=" mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700">
            Here are some common questions about our products and services.
          </p>
        </div>
        <Accordion type="single" collapsible>
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FrequentlyAsk;
