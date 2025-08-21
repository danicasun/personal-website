import Navigation from "@/components/navigation"

export default function Projects() {
  return (
    <div className="min-h-screen bg-white text-green-800">
      <Navigation isHomePage={false} />

      <div className="container mx-auto px-8 py-16">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-light mb-12">Projects</h2>

          <div className="space-y-12">
            <div className="border-l-2 border-[#82B590] pl-8">
              <h3 className="text-2xl font-medium mb-4">PriorityQueue - Hackathon Project</h3>
              <p className="text-gray-600 mb-4">
                {"Tackling the U.S. electricity grid interconnection queue. Developed a user-centric platform that visualizes geospatial data of generation stations, manages each developer’s projects, and organizes said projects into clusters using proprietary algorithms."}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://devpost.com/software/priorityqueue#updates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors"
                >
                  View on Devpost →
                </a>
              </div>
            </div>

            <div className="border-l-2 border-[#82B590] pl-8">
              <h3 className="text-2xl font-medium mb-4">EcoSort</h3>
              <p className="text-gray-600 mb-4">
                An app that uses ML image recognition to identify whether an item should be composted, recycled, or belongs in the landfill, in order to tackle the issue of compost contamination.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://drive.google.com/file/d/1jNO8bsFaV-MftNfmzfm8wK01zjpf67Mv/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors"
                >
                  View Demo Video →
                </a>
                <span className="text-gray-500 text-sm py-0.5 text-center">Machine Learning • Environmental Tech</span>
              </div>
            </div>

            <div className="border-l-2 border-[#82B590] pl-8">
              <h3 className="text-2xl font-medium mb-4">Stanford Course Semantic Search Engine</h3>
              <p className="text-gray-600 mb-4">
                Advanced search engine implementation using semantic analysis to improve course discovery and matching
                for Stanford University courses.
              </p>
              <div className="flex gap-4">
                <span className="text-gray-500 text-sm">Natural Language Processing • Search Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
