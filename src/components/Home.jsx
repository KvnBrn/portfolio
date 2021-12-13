import './Home.css';

const Home = () => {
  return (
    <div className="stars">
      <div className="shooting-stars-one"></div>
      <div className="shooting-stars-two"></div>
      <div className="shooting-stars-three"></div>
      <div className="Home">
        <div className="home-left-container">
          <div className="home-main-title">
            <h1>
              Hi,
              <br/>
              I'm <span>K</span>evin,
              <br/>
              web developer.
            </h1>
          </div>
          <div className="home-title">
            <div className="carrousel">
              <div className="prefix">Full stack developer</div>
              <div className="change-hidden">
                <div className="hidden-content">
                  <div className="element">HTML / CSS.</div>
                  <div className="element">JavaScript.</div>
                  <div className="element">React.</div>
                  <div className="element">Express / NodeJS.</div>
                  <div className="element">MySQL.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-right-container">
          <div className="home-initial">
            <h1>K</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
