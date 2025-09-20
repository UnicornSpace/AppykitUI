const blogPosts = [
  {
    id: 1,
    date: "March 01, 2021",
    title: "Memilih foto yang cocok untuk desain website",
    description: "Tips memilih foto yang cocok untuk desain website dan bagaimana cara menempatkan nya dengan tepat",
    gradient: "from-blue-400 to-cyan-500",
    icon: (
      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
        </svg>
      </div>
    ),
  },
  {
    id: 2,
    date: "February 28, 2021",
    title: "Membuat desain header yang proporsional",
    description: "Secret Tips untuk membuat desain bagian header pada website yang ideal dan tidak terlalu kegadean",
    gradient: "from-cyan-400 to-blue-500",
    icon: (
      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
        <div className="space-y-1">
          <div className="w-6 h-1 bg-white/60 rounded" />
          <div className="w-4 h-1 bg-white/60 rounded" />
          <div className="w-5 h-1 bg-white/60 rounded" />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    date: "February 24, 2021",
    title: "Cara mendapatkan inspirasi dari referensi",
    description: "Bagaimana saya biasanya mengambil inspirasi dari referensi pada desain dengan sesuai modifikasi",
    gradient: "from-purple-500 to-indigo-600",
    icon: (
      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19v2h-1.5v17.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5V4H4.5C3.67 4 3 3.33 3 2.5S3.67 1 4.5 1h15c.83 0 1.5.67 1.5 1.5S20.33 4 19.5 4z" />
        </svg>
      </div>
    ),
  },
  {
    id: 4,
    date: "February 23, 2021",
    title: "Sebaiknya Belajar UI Design mulai dari mana?",
    description:
      "Tahapan belajar UI Design di tengah dera nya informasi tentang industri UI/UX yang kadang membuat bingung",
    gradient: "from-pink-400 to-orange-400",
    icon: (
      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
        <div className="space-y-0.5">
          <div className="w-5 h-0.5 bg-white/60 rounded" />
          <div className="w-6 h-0.5 bg-white/60 rounded" />
          <div className="w-4 h-0.5 bg-white/60 rounded" />
          <div className="w-5 h-0.5 bg-white/60 rounded" />
        </div>
      </div>
    ),
  },
  {
    id: 5,
    date: "February 21, 2021",
    title: "Pertanyaan tentang terjun di Industri UI/UX",
    description: "Menjawab beberapa pertanyaan dari teman tentang bagaimana terjun di industri ui/ux",
    gradient: "from-blue-400 to-cyan-400",
    icon: (
      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
        <div className="w-4 h-4 bg-white/60 rounded-full" />
        <div className="w-6 h-6 bg-white/30 rounded-full absolute" />
      </div>
    ),
  },
  {
    id: 6,
    date: "February 18, 2021",
    title: "Dari Website Programmer Menjadi UI Designer",
    description: "Pengalaman saya menjalani proses transisi menjadi UI Designer, beberapa poin bisa dipraktekkan",
    gradient: "from-purple-400 to-pink-400",
    icon: (
      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
    ),
  },
]

export function BlogGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <article
          key={post.id}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full" />
            <div className="absolute bottom-6 left-4 w-3 h-3 bg-white/20 rounded-full" />

            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">{post.icon}</div>
          </div>

          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-balance">{post.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{post.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
