import services from '@/data/services.json'

export default function ServicesPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-teal-900 mb-8 border-b-2 border-teal-700 pb-2 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.1)]">
                Our Services
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-semibold text-teal-800 mb-2">{service.name}</h2>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}
