let rooms = [];

function addRoom() {
  const roomNo = document.getElementById("roomNo").value;
  const capacity = Number(document.getElementById("capacity").value);
  const hasAC = document.getElementById("ac").checked;
  const hasWashroom = document.getElementById("washroom").checked;

  if (!roomNo || !capacity) {
    alert("Please fill all fields");
    return;
  }

  rooms.push({ roomNo, capacity, hasAC, hasWashroom });
  displayRooms();

  document.getElementById("roomNo").value = "";
  document.getElementById("capacity").value = "";
  document.getElementById("ac").checked = false;
  document.getElementById("washroom").checked = false;
}

function allocateRoom() {
  const students = Number(document.getElementById("students").value);
  const needAC = document.getElementById("needAC").checked;
  const needWashroom = document.getElementById("needWashroom").checked;

  let suitable = rooms
    .filter(r => r.capacity >= students)
    .filter(r => !needAC || r.hasAC)
    .filter(r => !needWashroom || r.hasWashroom)
    .sort((a, b) => a.capacity - b.capacity);

  const result = document.getElementById("result");

  if (suitable.length === 0) {
    result.innerHTML = " No room available";
    result.style.color = "red";
  } else {
    const r = suitable[0];
    result.style.color = "green";
    result.innerHTML = `
       Room Allocated <br>
      Room No: ${r.roomNo}<br>
      Capacity: ${r.capacity}<br>
      AC: ${r.hasAC ? "Yes" : "No"}<br>
      Washroom: ${r.hasWashroom ? "Yes" : "No"}
    `;
  }
}

function displayRooms() {
  const container = document.getElementById("rooms");
  container.innerHTML = "";
  rooms.forEach(r => {
    container.innerHTML += `
      <div class="room">
        <strong>Room ${r.roomNo}</strong>
        <p>Capacity: ${r.capacity}</p>
        <p>AC: ${r.hasAC ? "Yes" : "No"}</p>
        <p>Washroom: ${r.hasWashroom ? "Yes" : "No"}</p>
      </div>
    `;
  });
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
