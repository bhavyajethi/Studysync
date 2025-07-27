import { User, Zap, MessageCircle, Users } from "lucide-react"

const steps = [
  {
    icon: User,
    title: "Create Profile",
    description: "Share your subjects, goals, and preferred study times",
    color: "bg-blue-500",
  },
  {
    icon: Zap,
    title: "AI Matching",
    description: "Our AI finds compatible study partners based on your preferences",
    color: "bg-orange-500",
  },
  {
    icon: MessageCircle,
    title: "Connect & Chat",
    description: "Message potential partners and plan your study sessions",
    color: "bg-green-500",
  },
  {
    icon: Users,
    title: "Study Together",
    description: "Collaborate, learn, and achieve your academic goals together",
    color: "bg-purple-500",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">How StudySync Connects You</h2>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Simple steps to find your ideal study companion and boost your academic success
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
