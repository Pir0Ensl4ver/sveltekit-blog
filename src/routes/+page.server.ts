import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const respone = await fetch('api/posts');
	const posts: Post[] = await respone.json();

	return { posts };
}
