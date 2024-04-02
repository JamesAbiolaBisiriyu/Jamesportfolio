import { GiCalendar, GiClawSlashes, GiMailbox, GiPhone } from "react-icons/gi";

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/images/myImage.jpg" alt="" width="100" />
        </figure>
        <div className="info-content">
          <h1 className="name">James Abiola Bisiriyu</h1>
          <p className="title">Front End Developer</p>
        </div>
        <button className="info_more-btn">
          <span>Show Contacts</span>
          <GiClawSlashes />
        </button>
      </div>

      {/* Contact Info */}
      <div className="sidebar-info_more">
        <hr className="separator2" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:emperor2g@gmail.com" className="contact-link">
                emperor2g@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div>
              <GiPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">PHONE</p>
              <a href="tel: +2348171575268 " className="contact-link">
                +2348171575268
              </a>
            </div>
          </li>{" "}
          <li className="contact-item">
            <div>
              <GiCalendar />
            </div>
            <div className="contact-info">
              <p className="contact-title">BIRTHDAY</p>
              <time dateTime="1982-10-08" className="contact-link">
                October 08 1982
              </time>
            </div>
          </li>{" "}
          <li className="contact-item">
            <div>
              <GiMailbox />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address className="contact-link">Shangisha Magodo Lagos</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
