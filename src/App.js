
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {useEffect,useState} from 'react';

function App() {

  const [data,setData] = useState({
    'posts':[],
    'currentPage':1,
    'postsPerPage':10,
    'currentPosts':[],
    'search':'',
    'isRequested':false
});

const url = 'https://jsonplaceholder.typicode.com/posts';
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(posts=>{
            setData(prev=>({
                ...prev,
                'posts':posts,
                'currentPosts':posts.slice(0,10),
                'isRequested':true
            }));
        })
    },[]);

    const updatePosts = (e,pageNo) => {
        
        e.preventDefault();
        const start = (pageNo-1)*10;
        const end = pageNo*10;
        
        setData(prev=>({
            ...prev,
            'currentPage':pageNo,
            'currentPosts':data.posts.slice(start,end),
            'search':'',
        }));

    }

  const updatePostsBySearch = (word) => {
    let newPosts = [];
    if(data.posts.length!==0) {
      newPosts = data.posts.filter(post=>{
        if(post.title.includes(word) || post.body.includes(word)) {
          return true;
        }
        return false;
      });
    }
    setData(prev=>({
      ...prev,
      'currentPosts':newPosts,
      'search':word,
      'currentPage':1
    }));

  }

  return (
    <div className="App">
      <Navbar updatePostsBySearch={updatePostsBySearch}/>
      <Home data={data} updatePosts={updatePosts}/>
    </div>
  );
}

export default App;
