const form = document.getElementById('form');
const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

let studentId = 1;

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('studentName').value;
    const age = document.getElementById('studentAge').value;
    const grade = document.getElementById('grade').value;
    const place = document.getElementById('place').value;

    addStudentRow(studentId, name, age, grade, place);

    studentId++;

    form.reset();
});

function addStudentRow(id, name, age, grade, place) {
    const row = studentTable.insertRow();

    row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>${grade}</td>
        <td>${place}</td>
        <td class="action">
            <button class="edit" onclick="editStudent(this)">Edit</button>
            <button class="delete" onclick="deleteStudent(this)">Delete</button>
        </td>`;
}

function deleteStudent(button) {
    const row = button.closest('tr');
    studentTable.removeChild(row);
}

function editStudent(button) {
    const row = button.closest('tr');
    const cells = row.getElementsByTagName('td');

    document.getElementById('studentName').value = cells[1].innerHTML;
    document.getElementById('studentAge').value = cells[2].innerHTML;
    document.getElementById('grade').value = cells[3].innerHTML;
    document.getElementById('place').value = cells[4].innerHTML;

    studentTable.removeChild(row);
}
