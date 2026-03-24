let socket;

function connect() {
  socket = new WebSocket("wss://your-app.up.railway.app");

  socket.onopen = () => {
    console.log("Connected");
  };

  socket.onmessage = (event) => {
    console.log("Message:", event.data);
  };
}
