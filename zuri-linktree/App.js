import profile from './img/profile.jpg';
import github from './img/github-icon.png';
import slack from './img/slack-icon.png';
import zuri from './img/Vector.png';
import footerText from './img/Footer text.png';
import i4g from './img/I4G.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="profile" id="profile__img" alt="profile" />
        <p id="twitter">
          <a href="https://twitter.com/iamkira420" target="_blank">
            iamkira420
          </a>
        </p>
        <p id="slack">iamkira420</p>
      </header>

      <div className="links-section">
        <ul>
          <li><a id="my-twitter" href="https://twitter.com/iamkira420" target="_blank">Twitter Link</a></li>
          <li><a id="btn__zuri" href="https://training.zuri.team/" target="_blank">Zuri Team</a></li>
          <li><a id="books" href="http://books.zuri.team" target="_blank">Zuri Books</a></li>
          <li><a id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=iamkira420" target="_blank">Python Books</a></li>
          <li><a id="pitch" href="https://background.zuri.team" target="_blank">Background Check for Coders</a></li>
          <li><a id="book__design" href="https://books.zuri.team/design-rules" target="_blank">Design Books</a></li>
        </ul>
        <div className="social-links">
          <a href="https://slack.com" target="_blank"><img src={slack}/></a><br/>
          <a href="https://github.com" target="_blank"><img src={github}/></a>
        </div>
      </div>

      <div className="footer">
        <img id="zuri" src={zuri} alt="zuri internship logo"/>
        <br/>
        <img id="footerText" src={footerText} alt="#"/>
        <br/>
        <img id="i4g" src={i4g} alt="Ingressive for good logo"/>
      </div>
    </div>
  );
}

export default App;
