import sanitizeHtml from 'sanitize-html'; // Importing a large package to test impacts of RSC vs Traditional React

export default function PostContent( {post}: {post: any}) {
  
  console.log('post',post);

  return (
    <article className="flex flex-col justify-center items-center w-full max-w-2xl p-4">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-xl">{sanitizeHtml(post.body)}</p>
      <ul>
        {post.tags.map( (tag: string) => <li key={`tag_${tag}`}>{tag}</li>)}
      </ul>
    </article>
  );
}