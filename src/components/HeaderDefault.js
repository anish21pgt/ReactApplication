import './Header.css';
import Logo from '../images/logo.jpeg';

const HeaderDefault = () => {
  return (
    <>
      <header className="header-with-space">
        <div className="logo-container">
          <div className="logo-wrapper">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          <h1>ABC International School</h1>
        </div>
        <nav>
          <ul className="navbar">
            <li><a href="/">Home</a></li>
            <li className="dropdown">
              <a href="/about/aboutabc">About Us &#9660;</a>
              <div className="dropdown-content">
                <ul>
                  <li><a href="/about/aboutabc">About ABC</a></li>
                  <li><a href="/about/message">Principal's message</a></li>
                  <li><a href="/about/facilities">Facilities</a></li>
                </ul>
              </div>
            </li>
            <li className="dropdown">
              <a href="/activities/sports">Activities &#9660;</a>
              <div className="dropdown-content">
                <ul>
                  <li><a href="/activities/sports">Sports</a></li>
                  <li><a href="/activities/extracurricular">Extracurricular Activites</a></li>
                </ul>
              </div>
            </li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/auth">CMS Login</a></li>
            <li><a href="/user">User</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderDefault;




