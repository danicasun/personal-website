import Navigation from "@/components/navigation"

export default function Writing() {
  return (
    <div className="min-h-screen bg-white text-green-800">
      <Navigation isHomePage={false} />

      <div className="container mx-auto px-8 py-16">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-light mb-12">Writing</h2>

          <div className="space-y-12">
            {/* Placeholder writing items */}
            <article className="border-b border-gray-200 pb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gray-600 text-sm">August 2025  </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 text-sm">5 min read</span>
              </div>
              <h3 className="text-2xl font-medium mb-4">
                <a href="#" className="hover:text-[#82B590] transition-colors">
                  {"Why the Most Powerful Climate Startups Don’t Look Like Climate Startups"}
                </a>
              </h3>
              <p className="text-gray-600 mb-4">
                {"Most climate startups pitch themselves on impact. “We’ll cut emissions.” “We’ll save the planet.” The problem? That’s not why most people — or companies — change their behavior. Impact never has and never will be the strongest motivator for the scale of change we need.\n\nInstead, the most transformative climate solutions are hiding in plain sight. They’re not marketed as climate tech. They win customers because they’re simply better — faster, cheaper, easier.\n\nI call these “Secretly Climate” startups, and I believe they’re our best shot at solving the crisis in time."}
              </p>
              <a href="#" className="text-[#82B590] hover:text-green-600 transition-colors">
                 Read More →
              </a>
            </article>

            

            
          </div>
        </div>
      </div>
    </div>
  )
}
