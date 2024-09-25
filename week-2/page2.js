import Link from 'next/link'
export default function Home(){
    return(
        <main className = "flex flex-col items-center justify-center min-h-screen">
            <h1 classNae = "text-4xl font-bold text-center">
                CPRG 306: Web Developement 2 - Assignments
            </h1>
            <p>
                <link href="/week-2" className="underline hover:text-blue-300">Week 2 Assignment</link>
            </p>
        </main>
    );
}

