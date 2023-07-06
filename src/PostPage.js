import { Link, useParams } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams();
    const post = posts.find(post => post.id.toString() === id);
    return (
        <main className="PostPage">
            <article className="post">
                {post && <>
                    <h2>{post.title}</h2>
                    <p>{post.datetime}</p>
                    <p>{post.body}</p>
                    <Link to={`/edit/${post.id}`}>
                        <button className="buttonEdit">
                            Edit Post</button>
                    </Link>
                    <button
                        className="buttonDelete"
                        onClick={() => handleDelete(post.id)}
                    >Delete Post</button>
                </>}
                {!post && <>
                    <h2>Post does not exist</h2>
                    <p>GG</p>
                    <p><Link to='/'>Go home</Link></p>
                </>}
            </article>

        </main>
    )
}

export default PostPage;