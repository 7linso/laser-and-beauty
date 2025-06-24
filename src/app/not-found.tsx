import Link from "next/link"

export default function NotFoundPage() {
    return (<>
        <div className="text-teal-900 flex items-center justify-center min-h-screen text-center">
            <div>
                <h1 className="text-2xl font-semibold mb-4">
                    Sorry, you are searching for <br /> the page that does not exist
                </h1>
                <Link href="/" className="text-lg hover:text-teal-700 transition underline">
                    Go Back to Home page
                </Link>
            </div>
        </div>
    </>)
}