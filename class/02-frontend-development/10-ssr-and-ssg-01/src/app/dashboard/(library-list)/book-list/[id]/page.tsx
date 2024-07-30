export default async function Page({ params }) {
  try {
    const response = await fetch(`https://gutendex.com/books/${params.id}/`);
    const book = await response.json();

    return (
      <div>
        <h1 className="text-4xl">{book.title}</h1>
        <p>{book.authors[0].name}</p>
        <p>{book.download_count} downloads</p>
        <ul>
          {book.subjects.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error(error);
  }
}
