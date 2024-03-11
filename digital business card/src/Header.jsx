import image from "./assets/headshot.avif";

export default function Header() {
  return (
    <header>
      <img src={image}></img>
      <div className="info">
        <h1>Olga Minaieva</h1>
        <h4>Frontend Developer</h4>
        <a href="#">minaieva.website</a>
      </div>
      <div className="buttons">
        <button type="button" className="emailBtn">
          <i className="fa-regular fa-envelope"></i>
          Email
        </button>
        <button type="button" className="linkdBtn">
          <i className="fa-brands fa-linkedin-in"></i>
          Linkedln
        </button>
      </div>
    </header>
  );
}
