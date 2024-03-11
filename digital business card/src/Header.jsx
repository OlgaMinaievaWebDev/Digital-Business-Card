

export default function Header() {
  return (
   <header className="container">
    <div className="image">
    
    </div>
      <div className="info">
        <h1>Olga Minaieva</h1>
        <h4>Frontend Developer</h4>
        <a href="#">minaieva.website</a>
      </div>
      <div className="buttons">
        <button type="button" className="emailBtn">
          <i className="fa-regular fa-envelope icon"></i>
          Email
        </button>
        <button type="button" className="linkdBtn">
          <i className="fa-brands fa-linkedin-in icon"></i>
          LinkedIn
        </button>
      </div>
    </header>
  );
}
