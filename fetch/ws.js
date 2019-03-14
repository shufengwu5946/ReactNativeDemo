var ws = new WebSocket('ws://121.40.165.18:8800');

ws.onopen = () => {
    ws.send('something');
};

ws.onmessage = (e) => {
    alert(e.data);
};

ws.onerror = (e) => {
    alert(e.message);
};

ws.onclose = (e) => {
    console.log(e.code, e.reason);
};