import PostContent from "../components/PostContent";


async function getPosts() {

  const res = await fetch('https://dummyjson.com/posts');

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


export default async function Home() {
  
  const posts = await getPosts();
  console.log({posts})

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        posts.map( (post: any) => <PostContent key={`post_${post.id}`} post={post} />)
      }
    </div>
  )
}
