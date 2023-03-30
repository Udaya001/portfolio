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
						What's up, folks? The name's Udaya Ram Sharma, and I'm a student at the Institute of Science and Technology (IOST), Tribhuvan University. Hailing from Jhapa, I'm all about the study of data science and machine learning. And let me tell you, nothing gets my adrenaline pumping like exploring the wild frontiers of time, space, and multiverses. I'm a passionate learner with an insatiable thirst for knowledge, and I'm always on the lookout for new ways to broaden my horizons in these fields.
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