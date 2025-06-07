import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:{" "}
              <img
                src="https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profilPic"
              />
            </span>
            <span>
              Username: <b>John Smith</b>
            </span>
            <span>
              Email: <b>johnsmith@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List </h1>
            <button>Create New Post</button>
          </div>
          <List />

          <div className="title">
            <h1>Saved List </h1>
          </div>
        </div>
        <List />
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
