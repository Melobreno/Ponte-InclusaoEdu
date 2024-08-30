import { Container } from "./style.jsx";
function Chatbot() {
  function toggleChat() {
    const chatbox = document.getElementById("chatbox");
    chatbox.classList.toggle("hidden");
  }

  return (
    <Container>
      <div id="chatbot-button" onClick={toggleChat}>
        Chat 💬
      </div>

      <div id="chatbox" className="hidden">
        <iframe
          title="Dialogflow Chatbot"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/4730aa58-8ecc-4b17-93dc-e16520caef3c"
        />
      </div>
    </Container>
  );
}

export default Chatbot;
