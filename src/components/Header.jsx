export default function Header() {
  return (
    <header>
      <div className="d-flex justify-content-between align-items-center mx-5">
        <div className="d-flex justify-content-center flex-column align-items-center ms-xxl--5 mx-lg-3 mt-3 text-white">
          <div className="fs-2 fw-bold text-family-Name">Mike Huynh</div>
          <div className="fs-5 fw-medium .text-family-title">Web Developer</div>
        </div>

        <nav>
          <ul className="d-flex fs-4 fw-bold nav-gap me-xxl-5  mt-3 list-unstyled">
            <li>
              <a href="#Skill">Skill</a>
            </li>
            <li>
              <a href="#Project">Project</a>
            </li>
            <li>
              <a href="#AboutMe">About Me</a>
            </li>
            <li>
              <a href="#Experience">Experience</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container h-75">
        <div className="d-flex h-100 justify-content-center align-items-center flex-column mt-4">
          <img
            src="./photo/humanFace.png"
            className="humanface"
            alt="humanface"
          ></img>
          <p className="fs-1 fw-bolder width_resize w-50 ">
            Seek a problem-solving partner for your web development journey.
          </p>
          <p className="fs-4 fw-semibold width_resize_content w-50 mt-2">
            I'm Mike Huynh, a passionate Web Developer specializing in crafting
            dynamic and high-performing websites. Explore my recent projects
            below and let's collaborate on your next venture.
          </p>
          <a
            className="btn btn-warning fs-4 fw-bold mt-3 p-3 rounded-end-circle"
            href="#Contact"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
}
