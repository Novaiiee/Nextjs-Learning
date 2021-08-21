import Head from "next/Head";

export default function PeopleDetails({ user }) {
	return (
		<>
			<Head>
				<title>{user.name} | Next Learning</title>
			</Head>
			<div>
				<h3>Name: {user.name}</h3>
				<h3>Email: {user.email}</h3>
				<h3>Username: {user.username}</h3>
				<h3>ID: {user.id}</h3>
			</div>
		</>
	);
}

export const getStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await res.json();

  //Next generates a html file (path) for each parameter in the users array
	const paths = users.map((user) => {
		return {
			params: { id: user.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

//Called each time getStaticPaths is called
export const getStaticProps = async (context) => {
	const id = context.params.id;

	const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);
	const user = await res.json();

	return {
		props: { user },
	};
};
