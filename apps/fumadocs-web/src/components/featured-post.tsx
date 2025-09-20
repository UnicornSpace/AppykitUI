export function FeaturedPost() {
  return (
    <div className="mb-16">
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-80 rounded-2xl bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-8 left-8 w-3 h-3 bg-white/30 rounded-full" />
              <div className="absolute top-16 right-12 w-2 h-2 bg-white/40 rounded-full" />
              <div className="absolute bottom-12 left-16 w-4 h-4 bg-white/20 rounded-full" />
              <div className="absolute bottom-8 right-8 w-2 h-2 bg-white/50 rounded-full" />
            </div>

            {/* Central circle element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">March 25, 2021</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">
              Tentang Creativity Block pada UI Designer
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Beberapa cara yang saya lakukan ketika tidak memiliki ide atau bingung untuk memulai desain.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
