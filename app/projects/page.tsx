import Navigation from "@/components/navigation"

export default function Projects() {
  const projects = [
    {
      title: "PriorityQueue - TreeHacks Winner",
      description: "Tackling the U.S. electricity grid interconnection queue. Developed a user-centric platform that visualizes geospatial data of generation stations, manages each developer's projects, and organizes said projects into clusters using proprietary algorithms.",
      link: "https://devpost.com/software/priorityqueue#updates",
      linkText: "View on Devpost",
      tags: ["Energy Tech", "Data Visualization", "Grid Infrastructure"]
    },
    {
      title: "EcoSort",
      description: "An app that uses ML image recognition to identify whether an item should be composted, recycled, or belongs in the landfill, in order to tackle the issue of compost contamination.",
      link: "https://drive.google.com/file/d/1jNO8bsFaV-MftNfmzfm8wK01zjpf67Mv/view",
      linkText: "View Demo Video",
      tags: ["Machine Learning", "Environmental Tech", "Computer Vision"]
    },
    {
      title: "Stanford Course Semantic Search Engine",
      description: "Advanced search engine implementation using semantic analysis to improve course discovery and matching for Stanford University courses.",
      tags: ["Natural Language Processing", "Search Technology", "Education Tech"]
    }
  ]

  return (
    <div className="min-h-screen bg-white text-green-800">
      <Navigation isHomePage={false} />

      <div className="container mx-auto px-8 py-16">
        <div className="max-w-6xl">
          <h1 className="text-5xl font-light mb-12">Projects</h1>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white border border-[#82B590] rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-medium mb-4 leading-tight">{project.title}</h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded border border-green-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#82B590] hover:text-green-600 transition-colors text-sm"
                  >
                    {project.linkText} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
