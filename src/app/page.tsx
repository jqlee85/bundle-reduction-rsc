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

// Note this is a a server component, so we can fetch data here
export default async function Home() {
  
  const posts = await getPosts();
  console.log({posts})

  return (
    <div className="flex min-h-screen flex-row justify-between p-24">
      <Sidebar/>
      <Main>
        <h1 className="text-4xl font-bold mb-6">First 50 Posts</h1>
        {
          posts.map( (post: any) => <PostContent key={`post_${post.id}`} post={post} />)
        }
      </Main>
      
    </div>
  )
}
