import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the AI matching work?",
    answer:
      "Our AI analyzes your academic subjects, study preferences, and schedule to find the most compatible study partners.",
  },
  {
    question: "Is StudySync free to use?",
    answer:
      "Yes! Basic matching and messaging are completely free. Premium features like advanced analytics are available for a small fee.",
  },
  {
    question: "How do you ensure user safety?",
    answer:
      "All profiles are verified through educational email addresses. We have reporting systems and moderation to maintain a safe environment.",
  },
  {
    question: "Can I study with people from other universities?",
    answer: "You can connect with students from any university, expanding your learning network beyond your campus.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about StudySync</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
