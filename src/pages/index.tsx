import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import PostContent from "../components/PostContent";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

// Fetches posts from dummyjson.com
async function getPosts() {

  const res = await fetch('https://dummyjson.com/posts?limit=50');

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  const data = await res.json();
  if (data?.posts) {
    return data.posts;
  } else { return []}
}

async function getQuotes() {
  const response = await fetch(`https://dummyjson.com/quotes?limit=50`);
  const {quotes} = await response.json();
  return quotes;
}

async function getComments(postId: number) {
  const response = await fetch(`https://dummyjson.com/posts/${postId}/comments`);
  const {comments} = await response.json();
  return comments;
}

// Note this is a a server component, so we can fetch data here
export default function Home(props:any) {
  
  const {posts, quotes} = props;

  return (
    <div className="flex min-h-screen flex-row justify-between p-24">
      <Sidebar quotes={quotes}/>
      <Main>
        <h1 className="text-4xl font-bold mb-6">First 50 Posts</h1>
        {
          posts.map( (post: any) => <PostContent key={`post_${post.id}`} post={post} />)
        }
      </Main>
      
    </div>
  )
}

Home.displayName = 'Home';

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<any>> {
  
  const posts = await getPosts();
  const quotes = await getQuotes();

  // Fetch comments for each post and add to post object
  const postsWithComments = await Promise.all(posts.map(async (post: any) => {
    const comments = await getComments(post.id) || [];
    return {...post, comments};
  }));

  const props = {
    posts: postsWithComments,
    quotes
  }

  return {props};
}
