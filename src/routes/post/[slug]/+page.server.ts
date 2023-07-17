export async function load({ params, fetch }) {
	const response = await fetch(`https://gutendex.com/books/${params.slug}`);
	const articles = await response.json();
	return {
		articles
	};
}
