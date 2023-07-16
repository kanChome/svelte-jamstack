export async function load({ fetch }: any) {
	const response = await fetch('https://gutendex.com/books/?languages=ja');
	const articles = await response.json();
	return { articles };
}
