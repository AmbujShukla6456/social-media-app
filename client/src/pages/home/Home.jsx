import './Home.scss';
import Stories from '../../components/stories/stories';
import Posts from '../../components/posts/Posts';

const Home = () => {
  return (
    <div>
      <Stories/>
      <Posts/>
    </div>
  )
}

export default Home