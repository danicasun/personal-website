import Navigation from "@/components/navigation"

export default function Projects() {
  const projects = [
    {
      title: "Climate x AI Market Map",
      description: "Helping Climactic VC develop their comprehensive Climate x AI Market map, which showcases over 200+ companies working at the intersection of artificial intelligence and climate solutions across various sectors including energy, construction, agriculture, and more.",
      link: "https://www.climactic.vc/climate-ai-market",
      linkText: "View Market Map",
      tags: ["Sourcing", "Market Intelligence"]
    },
    {
      title: "PriorityQueue - TreeHacks Winner",
      description: "Tackling the U.S. electricity grid interconnection queue. Developed a user-centric platform that visualizes geospatial data of generation stations, manages each developer's projects, and organizes said projects into clusters using proprietary algorithms.",
      link: "https://devpost.com/software/priorityqueue#updates",
      linkText: "View on Devpost",
      tags: ["Data Visualization", "Web Development"]
    },
    {
      title: "EcoSort",
      description: "An app that uses image recognition to identify whether an item should be composted, recycled, or belongs in the landfill, tackling the expensive and harmful issue of compost contamination.",
      link: "https://drive.google.com/file/d/1jNO8bsFaV-MftNfmzfm8wK01zjpf67Mv/view",
      linkText: "View Demo Video",
      tags: ["Machine Learning", "Computer Vision"]
    },
    {
      title: "Stanford Course Semantic Search Engine",
      description: "Advanced search engine implementation using semantic analysis to improve course discovery and matching for Stanford University courses.",
      tags: ["Natural Language Processing", "Search Technology"]
    }
  ]

  return (
    <div className="min-h-screen bg-white text-green-800">
      <Navigation isHomePage={false} />

      <div className="container mx-auto px-8 py-16">
        <div className="max-w-4xl">
          <h1 className="text-6xl lg:text-9xl font-light mb-16">Projects</h1>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="border-b border-green-100 pb-8 last:border-b-0"
              >
                <h3 className="text-2xl font-medium mb-4 leading-tight text-green-800">
                  {project.title}
                </h3>
                
                <p className="text-lg leading-8 text-gray-700 mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full border border-green-200"
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
                    className="inline-block text-[#82B590] hover:text-green-600 transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-green-600 text-lg"
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
