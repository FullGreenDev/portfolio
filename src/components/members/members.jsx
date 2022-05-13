import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Members</h1>
      <div className="member member-1">
        <div className="member-img-skygames"></div>
        <div className="member-info">
          <h1 className="name">SkyGames</h1>
          <h3 className="position">Leader</h3>
          <h4 className="about">
            Lag-free servers. A unique experience, mod packs, a community. come join us !
          </h4>
          <a href="https://www.skygames.fr" className="contact-member">
            <span>Website</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img-everydance"></div>
        <div className="member-info">
          <h1 className="name">Everydance</h1>
          <h3 className="position">Developper</h3>
          <h4 className="about">
            French Dance School
          </h4>
          <a href="https://everydance.fr" className="contact-member">
            <span>Website</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
