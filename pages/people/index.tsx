import Head from "next/head";
import Link from "next/link";

interface Props {
	users: Array<{
		id: number;
		username: string;
		email: string;
		name: string;
	}>;
}

export default function PeoplePage({ users }: Props) {
	return (
		<>
			<Head>
				<title>People | Next Learning</title>
			</Head>
			<ul>
				{users.map((user) => {
					return (
						<li key={user.id}>
							<h3>Name: {user.name}</h3>
							<h3>Email: {user.email}</h3>
							<h3>Username: {user.username}</h3>
							<h3>ID: {user.id}</h3>
							<Link href={`/people/${user.id}`}>User Page</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}

//Runs at build time
export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await res.json();

	return {
		props: {
			users,
		},
	};
};
