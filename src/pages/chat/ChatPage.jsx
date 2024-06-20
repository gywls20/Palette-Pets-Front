import DefaultLayout from "../../layouts/DefaultLayout.jsx";
import ChatListView from "../../components/chat/ChatListView.jsx";

const ChatPage = () => {

    return (
        <DefaultLayout>
            <ChatListView/>
        </DefaultLayout>
    );
}

export default ChatPage;