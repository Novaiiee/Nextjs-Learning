import Link from "next/link";
import { FC } from "react";

export const Navbar: FC = () => {
	return (
		<div>
			<Link href="/people">People Page</Link>
			<Link href="/">Home Page</Link>
		</div>
	);
};
