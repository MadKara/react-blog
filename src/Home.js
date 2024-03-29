import Feed from "./Feed";

const Home = ({ posts }) => {
    return (
        <main className="Home">
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ margin: "2rem" }}>
                    No posts.
                </p>
            )}
        </main>
    )
}

export default Home;