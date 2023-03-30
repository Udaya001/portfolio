import Image from 'next/image';
import type { Metadata } from 'next'
import Education from './components/education';
import Projects from './components/projects';
import Inprogress from './components/inprogress';
import Skills from './components/skills';
import Social from './components/social';
import Avatar from '../../assets/uttano.jpg';

const Page = () => {

	return (
		<div className="flex flex-col gap-8 mx-4 my-16 md:mx-0">
			<div className="flex flex-col-reverse gap-8 md:flex-row">
				<div className="flex flex-col gap-4">
					<h1 className="text-4xl font-medium">
						Udaya Ram <span className="text-primary">Sharma</span>
					</h1>
					<p>
						CFO | <span className="font-bold">LinkBinary</span>
					</p>
					<p>Namaskar!</p>
					<p className="text-justify">
						My name is Bhaskar Rijal and I'm an undergraduate computer science student based in Jhapa. I enjoy developing
						web applications and, in my free time, I like to delve into the theories of space physics and spectroscopy.
						When I'm not coding or studying, I'm usually listening to heavy rock and heavy metal and playing guitar.
					</p>
				</div>
				<Image
					src={Avatar}
					alt="Udaya Ram Sharma"
					className="object-cover object-center w-auto md:w-32 md:h-auto grayscale"
					width={300}
					height={300}
				/>
			</div>
			<div className="flex gap-2">
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="DoB: 2001">
					2001
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="Blood group: B+VE">
					B+VE
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="Height: 5 feet 7 inches">
					<span>5'7</span>
				</div>
			</div>

			<Education />

			{/* <Projects /> */}

			{/* <Inprogress /> */}

			<Skills />

			<Social />

			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-medium">Contact</h2>
				<ul className="list-inside">
					<li>
						<span>{'email: '}</span>
						<a href="mailto:mail@bhaskarrijal.me" className="italic underline text-primary">
							mail@udayasharma.com.np
						</a>
					</li>
					<li>
						<span>{'full website: '}</span>
						<a href="https://udayasharma.com.np" target="_blank" className="italic underline text-primary">
							udayasharma.com.np
						</a>
					</li>
				</ul>
			</div>

			<p className="text-xs">
				{'Udaya Ram Sharma' + new Date().getFullYear()}, <a href='https://github.com/bhaskarrijal/bhaskarrijal-min' target='_blank' className='italic underline text-primary'>edit this site</a>
			</p>
		</div>
	);
};

export default Page;