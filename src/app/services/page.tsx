import services from '@/data/services.json'
import Image from 'next/image';
import Button from '@/components/button';

export default function ServicesPage() {
    return (<>
        <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-teal-900 mb-10 border-b-4 border-teal-700 inline-block pb-3">
                Our Services
            </h1>
            <div className="team-grid gap-8">
                {services.map((service, index) => (
                    <div key={index}
                        className="flex flex-col bg-white rounded-2xl shadow-lg border border-teal-300 p-6 transition hover:shadow-2xl">
                        <Image
                            width={100}
                            height={100}
                            src={service.image}
                            alt={service.name}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                            {service.name}
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {service.description}
                        </p>
                        <div className="mt-auto pt-4 ">
                            <Button/>
                        </div>
                    </div>

                ))}
            </div>
            <div className="pt-6">
                <h1 className="text-4xl font-bold text-teal-900 mb-10 border-b-4 border-teal-700 inline-block pb-3">
                    Important Note!
                </h1>
                <div className="flex-1 bg-white rounded-2xl shadow-lg border border-teal-300 p-6 transition hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                        Cancellation Policy
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        24-hour notice is required for all cancellations
                        to aviod a late cancellation or no-show fee.
                        <br /><br />
                        We provide clients with a 10-minute grace period,
                        however if you are later than 10 minutes your appointment
                        may need to be rescheduled and you will be required to pay
                        a late cancellation fee.
                        <br /><br />
                        Late Cancellation Fee: 50% of service booked.
                        <br />
                        Less than 24-hour Cancellation Fee: 50% of service booked.
                        <br />
                        No-show Fee: 100% of service booked.
                        <br /><br />
                        Please contact the salon if you have any questions.
                    </p>
                </div>
            </div>
        </div>

    </>
    );
}
