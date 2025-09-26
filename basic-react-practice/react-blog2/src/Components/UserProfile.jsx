import style from "./UserProfile.module.css";
function UserProfile() {
  return (
    <>
    {/* <h1 className={style.heading}> User Profile</h1> */}
      <div className={style.card}>
        <img className={style.img}
          src="https://plus.unsplash.com/premium_photo-1661515955970-cb360741ebff?q=80&w=1367&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div>
          <h4>Prachi Pundir</h4>
          <p>Web Developer</p>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
