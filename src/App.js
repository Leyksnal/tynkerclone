import './App.css';

function App() {
  return (
    <div>
      <div className="hero">
        <header>
          <div className="logo"></div>
          <div className="nav">
            <span>PLAY</span><span>PARENTS</span><span>EDUCATORS</span><span>WHY CODE?</span>
          </div>
          <div className="actionbtn">
            <button className="join">JOIN FOR FREE</button>
            <button className="login">LOG IN</button>
          </div>
        </header>
        <div className="content-wrapper">
          <div className="content">
            <h2>Coding Made Easy</h2>
            <p>The fun way to learn programming and develop problem-solving & critical thinking skills! Ages 5-18</p>
            <button className='hero-btn'>GET STARTED FOR FREE</button>
            <h3>At-home plans from <span className='underline'>$9 per month</span></h3>
          </div>
          <div className="img"></div>
        </div>
      </div>

      <div className="info-section">
        <div className="info-wrapper">
          <div className="info-content">
            <h2>The #1 Coding Platform for Kids</h2>
          </div>
          <div className="info-img"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
