import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const EditPost = ({ posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit }) => {

    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditBody, setEditTitle]);

    return (
        <main className="NewPost">
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className="newPostForm" onSubmit={e => e.preventDefault()}>
                        <label htmlFor="title">Title:</label>
                        <input
                            id="title"
                            required
                            type="text"
                            value={editTitle || ''}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="body">Body:</label>
                        <textarea
                            id="body"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>Post does not exist</h2>
                    <p>GG</p>
                    <p><Link to='/'>Go home</Link></p>
                </>}
        </main>
    )
}

export default EditPost;