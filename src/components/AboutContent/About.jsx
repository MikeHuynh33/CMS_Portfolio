function AboutMe({ data }) {
  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img
                src={data[0].profileUrl}
                alt="avatar"
                className="rounded-circle img-fluid"
                style={{ width: "150px" }}
              />
              <h5 className="my-3">{data[0].nickname}</h5>
              <p className="text-muted mb-1">Full Stack Developer</p>
              <p className="text-muted mb-4">{data[0].address}</p>
              <div className="d-flex justify-content-center mb-2">
                <a
                  href={`./files/${data[0].resumeUrl}`}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Resume
                </a>
                <a
                  className="btn btn-outline-primary ms-1"
                  href="mailto:minh160394@gmail.com"
                >
                  Message
                </a>
              </div>
            </div>
          </div>
          <div className="card mb-4 mb-lg-0">
            <div className="card-body p-0">
              <ul className="list-group list-group-flush rounded-3">
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i className="fas fa-globe fa-lg text-warning"></i>
                  <a
                    className="mb-0 text-primary"
                    href="https://github.com/MikeHuynh33"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i
                    className="fab fa-github fa-lg"
                    style={{ color: "#333333" }}
                  ></i>
                  <a
                    className="mb-0 text-primary"
                    href="https://www.linkedin.com/in/mike-huynh-79aa30267/"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i
                    className="fab fa-twitter fa-lg"
                    style={{ color: "#55acee" }}
                  ></i>
                  <a
                    className="mb-0 text-primary"
                    href="https://twitter.com/MINHHUY30286077"
                  >
                    Twitter
                  </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i
                    className="fab fa-instagram fa-lg"
                    style={{ color: "#ac2bac" }}
                  ></i>
                  <a
                    className="mb-0 text-primary"
                    href="https://www.facebook.com/bhjngt.vbbvfgb"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Full Name</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{data[0].fullname}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{data[0].email}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Phone</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{data[0].homephone}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Mobile</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{data[0].moblie}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Address</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{data[0].address}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4">
                      <span className="text-primary font-italic me-1">
                        assigment
                      </span>{" "}
                      Front-End
                    </p>
                    <p className="mb-1" style={{ fontSize: ".77rem" }}>
                      Web Design
                    </p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Website Markup
                    </p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow="72"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      One Page
                    </p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "89%" }}
                        aria-valuenow="89"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Mobile User-friendly
                    </p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Utilize API
                    </p>
                    <div
                      className="progress rounded mb-2"
                      style={{ height: "5px" }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "96%" }}
                        aria-valuenow="66"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4">
                      <span className="text-primary font-italic me-1">
                        assigment
                      </span>{" "}
                      Back-End
                    </p>
                    <p className="mb-1" style={{ fontSize: ".77rem" }}>
                      API Architecture
                    </p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "87%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Endpoints
                    </p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "72%" }}
                        aria-valuenow="72"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Data Management
                    </p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "89%" }}
                        aria-valuenow="89"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Authentication & Security
                    </p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Error Handling:
                    </p>
                    <div
                      className="progress rounded mb-2"
                      style={{ height: "5px" }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow="66"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutMe;
