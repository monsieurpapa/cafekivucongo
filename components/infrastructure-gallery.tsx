export default function InfrastructureGallerySection({ dict }: { dict: any }) {
  const infrastructureImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_usine3-vIG8dRn1oarFTRTws3vRKJLCYDDwfd.jpeg",
      alt: "Cafe Kivu Congo main coffee processing factory building with ISO certification",
      title: "Manufacturing Facility",
      description: "Advanced coffee deparchment factory",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_bureau-jt8hnbCk3W1cudclLCLZ1EHLhWjNgI.jpeg",
      alt: "Cafe Kivu Congo administrative office and management building",
      title: "Administrative Center",
      description: "Professional management offices",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_logistics-9rNu29ZdEp9BtywpQdwbm2GhXLGS9y.jpeg",
      alt: "Cafe Kivu Congo TMK logistics truck for coffee distribution and export shipping",
      title: "Export Logistics",
      description: "Professional transportation fleet",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_drying-qt3PWUmejA4K1NZfXt1YfrsNECt8gs.jpeg",
      alt: "Cafe Kivu Congo workers on traditional coffee drying beds with quality control",
      title: "Drying Operations",
      description: "Traditional sun-drying methods",
    },
  ]

  return (
    <section className="py-16 md:py-24 section-cream coffee-pattern relative overflow-hidden">
      <div className="natural-texture absolute inset-0"></div>
      <div className="container relative z-10 flex flex-col items-center">
        <div className="text-center mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">
            {dict.infrastructure?.title || "Our Infrastructure"}
          </h2>
          <p className="text-coffee-700 dark:text-coffee-200 text-lg">
            {dict.infrastructure?.subtitle || "Comprehensive facilities for premium coffee processing and export"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {infrastructureImages.map((image, index) => (
            <div key={index} className="group relative h-64 rounded-lg overflow-hidden organic-shadow">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                <p className="text-coffee-100 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
