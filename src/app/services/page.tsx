import services from '@/data/services.json'
import Image from 'next/image';
import Card from '@/components/card';
import AnimatedElement from '@/components/animated-element';
import FAQSection from '@/components/faq-section';
import faqs from '../../data/faq.json'

export default function ServicesPage() {
    return (<>
        <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-teal-900 mb-10">
                Our Services
            </h1>
            <section className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <AnimatedElement key={index}>
                        <Card className="h-full">
                            <div className="flex flex-col h-full">
                                <div className="w-full h-48 relative rounded-t-lg overflow-hidden mb-2">
                                    <Image priority
                                        fill
                                        sizes="100vw"
                                        src={service.image}
                                        alt={service.name}
                                        className="object-cover"
                                    />
                                </div>
                                <h2 className="text-xl px-2  font-semibold text-teal-800">
                                    {service.name}
                                </h2>
                                <p className="text-gray-700 p-2 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </Card>
                    </AnimatedElement>
                ))}
            </section>
            <section className="pt-6">
                <h1 className="text-4xl font-bold text-teal-900 mb-10 ">
                    Important Note!
                </h1>
                <AnimatedElement>
                    <Card className='p-4'>
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
                    </Card>
                </AnimatedElement>
            </section>
            <section className="pt-6">
                <h1 className="text-4xl font-bold text-teal-900 mb-10">
                    Frequently Asked Questions
                </h1>
                <FAQSection faqs={faqs} />
            </section>
        </div>
    </>
    );
}
