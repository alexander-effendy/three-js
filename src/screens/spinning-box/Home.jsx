import { IoLogoGithub } from "react-icons/io5";

const Home = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center text-2xl font-bold text-amber-900 bg-amber-100">
			<section className="flex gap-2 p-2 border-[1px] border-amber-900 rounded-[5px]">
				<span>nehimomo</span>
				<IoLogoGithub size={30} className="text-amber-950" />
			</section>
			
		</div>
	)

}

export default Home;