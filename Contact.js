const input = document.querySelector(".chat-input input");
const button = document.querySelector(".chat-input button");
const messages = document.querySelector(".chat-messages");

/* 入力中チェック */
input.addEventListener("input", () => {
  if (input.value.trim() !== "") {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
});

button.addEventListener("click", sendMessage);

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {

  const text = input.value.trim();

  if (text === "") return;

  // ユーザー吹き出し（右・緑）
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = text;

  messages.appendChild(userMsg);

  input.value = "";
  button.classList.remove("active");

  // AI返信
  setTimeout(() => {

    const aiMsg = document.createElement("div");
    aiMsg.className = "message ai";
    aiMsg.textContent = "申し訳ありませんが、その内容には現在対応しておりません。";

    messages.appendChild(aiMsg);

    messages.scrollTop = messages.scrollHeight;

  }, 500);

}