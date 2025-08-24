import Navigation from "@/components/navigation"

export default function Writing() {
  const articles = [
    {
      title: "Why the Most Powerful Climate Startups Don't Look Like Climate Startups",
      excerpt: "Many climate startups pitch themselves on impact. 'We'll cut emissions.' 'We'll save the planet.' The problem? That's not why most people, or companies, change their behavior. Impact never has and never will be the strongest motivator for the scale of change we need.",
      date: "August 2025",
      readTime: "5 min read"
    }
  ]

  return (
    <div className="min-h-screen bg-white text-green-800">
      <Navigation isHomePage={false} />

      <div className="container mx-auto px-8 py-16">
        <div className="max-w-4xl">
          <h1 className="text-6xl lg:text-9xl font-light mb-16">Writing</h1>

          <div className="space-y-8">
            {articles.map((article) => (
              <article key={article.title} className="border-b border-green-100 pb-8 last:border-b-0">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span>{article.date}</span>
                  <span className="text-gray-400">•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-medium mb-4 text-green-800">
                  <a href="#" className="hover:text-[#82B590] transition-colors duration-300">
                    {article.title}
                  </a>
                </h3>
                
                <p className="text-lg leading-8 text-gray-700 mb-6">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <a href="#" className="text-[#82B590] hover:text-green-600 transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-green-600 text-lg">
                    Coming Soon →
                  </a>
                </div>
              </article>
            ))}

            {/* Substack Subscription */}
            <div className="pt-8 border-t border-green-100">
              <p className="text-lg leading-8 text-gray-700">
                Subscribe to my newsletter on{" "}
                <a
                  href="https://substack.com/@danicasun/notes?utm_campaign=profile&utm_medium=profile-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-green-600"
                >
                  Substack
                </a>{" "}
                for updates on my journey exploring the intersection of technology, sustainability, and startups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
