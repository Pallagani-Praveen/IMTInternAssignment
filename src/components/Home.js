

const Home = ({data,updatePosts}) => {


    const content = data.currentPosts.length === 0  ? (data.isRequested ? '' : 'Loading The Posts'): (
        data.currentPosts.map((post,ind)=>(
            <div className="post" key={ind}>
                <div className="post-title">Title {(data.currentPage-1)*10+ind+1} : {post.title}</div>
                <div className="post-body">Body {(data.currentPage-1)*10+ind+1} : {post.body}</div>
            </div>
        ))
    );

    const searchInfo = data.search ? <div style={{margin:"5px"}}>
            <b>Searched Word : </b> {data.search} <br/>
            <b>No Of Results : </b> {data.currentPosts.length} posts
        </div> : '';
    return (
        <div className="container">
            <div className="pagination">
                <button onClick={(e)=>updatePosts(e,1)}>1</button>
                <button onClick={(e)=>updatePosts(e,2)}>2</button>
                <button onClick={(e)=>updatePosts(e,3)}>3</button>
                <button onClick={(e)=>updatePosts(e,4)}>4</button>
                <button onClick={(e)=>updatePosts(e,5)}>5</button>
                <button onClick={(e)=>updatePosts(e,6)}>6</button>
                <button onClick={(e)=>updatePosts(e,7)}>7</button>
                <button onClick={(e)=>updatePosts(e,8)}>8</button>
                <button onClick={(e)=>updatePosts(e,9)}>9</button>
                <button onClick={(e)=>updatePosts(e,10)}>10</button>
            </div>
            {searchInfo}
           {content}
        </div>
    );
}

export default Home;