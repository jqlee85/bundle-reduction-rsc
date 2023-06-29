import sanitizeHtml from 'sanitize-html'; // Importing a large package to test impacts of RSC vs Traditional React
import TagsList from '../TagsList';
import CommentsList from '../CommentsList';

export default function PostContent( {post}: {post: any}) {
  
  const {comments} = post;

  return (
    <article className="flex flex-col justify-center items-center w-full max-w-2xl p-4 mb-10">
      <h2 className="text-2xl font-bold my-2">{post.title}</h2>
      <p className="text-xl my-8">{sanitizeHtml(post.body)}</p>
      <TagsList tags={post.tags} />
      <CommentsList comments={comments} />
    </article>
  );
}

PostContent.displayName = 'PostContent';