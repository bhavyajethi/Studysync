import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="bg-red-500 text-white p-4 rounded-t-lg">
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Something went wrong</h2>
          <p className="text-gray-600 text-sm">Cannot read properties of undefined (reading 'addEventListener')</p>
          <div className="flex gap-3 pt-2">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">Try Again</Button>
            <Button variant="secondary" className="flex-1 bg-gray-600 hover:bg-gray-700 text-white">
              Go to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
