import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Home | Next Learning</title>
			</Head>
			Hello i am under the water
			<Link href="/people">People Page</Link>
		</div>
	);
};

export default Home;
