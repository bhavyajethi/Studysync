import { Zap, Calendar, Video, Target, Shield, Smartphone } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "AI-Powered Matching",
    description: "Smart algorithm matches you with compatible study partners",
    color: "bg-purple-500",
  },
  {
    icon: Calendar,
    title: "Schedule Sync",
    description: "Automatically sync calendars and find optimal study times",
    color: "bg-blue-500",
  },
  {
    icon: Video,
    title: "Virtual Study Rooms",
    description: "Built-in video chat and collaborative tools",
    color: "bg-orange-500",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set and monitor study goals and progress together",
    color: "bg-green-500",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Verified profiles and secure messaging",
    color: "bg-purple-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Study on-the-go with our mobile app",
    color: "bg-pink-500",
  },
]

export default function Features() {
  return (
    <section id="features" className="px-6 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Study Better</h2>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Powerful features designed to enhance your collaborative learning experience
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
