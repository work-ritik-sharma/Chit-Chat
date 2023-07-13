import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={"8c8e7a68-df47-446a-86b7-505b382350ca"}
        username={props.user.username} // 
        secret={props.user.secret} // 
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;