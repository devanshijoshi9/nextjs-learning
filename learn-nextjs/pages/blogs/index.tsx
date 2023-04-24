import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async() => {
	const response = await fetch( "https://jsonplaceholder.typicode.com/posts" )
	const data = await response.json();

	return {
		props: {
			data,
		}
	}
}

export default function Blog({data}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
					<a
					className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
					>
					<Image
						src="/vercel.svg"
						alt="Vercel Logo"
						className="dark:invert"
						width={100}
						height={24}
						priority
					/>
					</a>
				</div>
				<Navbar/>
			</div>

			<div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
				{
					data.slice(0, 5).map(( value )=> {
						return <div key={value.id} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
							<Link href={`/blogs/${value.id}`}>
								<h2>{ value.title }</h2>
							</Link>
						</div>
					})
				}
			</div>
		</main>
    )
}
