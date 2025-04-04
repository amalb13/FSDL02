document.addEventListener("DOMContentLoaded", () => {
    // Form and Input Elements
    const studentForm = document.getElementById("studentForm");
    const studentsGrid = document.getElementById("studentsGrid");
    const totalStudents = document.getElementById("totalStudents");
    const searchInput = document.getElementById("searchInput");

    let students = []; // Array to store student data

    // Add a new student
    studentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Create a new student object
        const student = {
            id: Date.now(),
            name: document.getElementById("name").value.trim(),
            age: parseInt(document.getElementById("age").value.trim()),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            class: document.getElementById("class").value.trim(),
        };

        // Add the new student to the array
        students.push(student);

        // Update the UI
        renderStudents();

        // Reset the form fields
        studentForm.reset();
    });

    // Render the student cards in the grid
    function renderStudents() {
        studentsGrid.innerHTML = ""; // Clear the grid
        
        const filteredStudents = students.filter(student =>
            student.name.toLowerCase().includes(searchInput.value.toLowerCase())
        );

        totalStudents.textContent = filteredStudents.length; // Update the total count

        // If no students match the search, show a message
        if (filteredStudents.length === 0) {
            studentsGrid.innerHTML = `<div class="col-12 text-center text-white-50">No students found.</div>`;
            return;
        }

        // Create a card for each student
        filteredStudents.forEach(student => {
            const card = document.createElement("div");
            card.className = "col-md-4 student-card";

            card.innerHTML = `
                <div class="card-header">${student.name} (${student.age} years)</div>
                <div class="card-body">
                    <p><strong>Email:</strong> ${student.email}</p>
                    <p><strong>Phone:</strong> ${student.phone}</p>
                    <p><strong>Class:</strong> ${student.class}</p>
                </div>
                <div class="actions">
                    <button class="btn btn-warning btn-sm" onclick="editStudent(${student.id})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">Delete</button>
                </div>
            `;
            studentsGrid.appendChild(card);
        });
    }

    // Edit a student
    window.editStudent = (id) => {
        const student = students.find(s => s.id === id);

        // Populate form fields with the student's details
        document.getElementById("name").value = student.name;
        document.getElementById("age").value = student.age;
        document.getElementById("email").value = student.email;
        document.getElementById("phone").value = student.phone;
        document.getElementById("class").value = student.class;

        // Remove the student from the array (to update later)
        students = students.filter(s => s.id !== id);

        renderStudents(); // Re-render the UI
    };

    // Delete a student
    window.deleteStudent = (id) => {
        // Filter out the student to be deleted
        students = students.filter(s => s.id !== id);

        renderStudents(); // Update the UI
    };

    // Sort students by name
    window.sortByName = () => {
        students.sort((a, b) => a.name.localeCompare(b.name));
        renderStudents();
    };

    // Sort students by age
    window.sortByAge = () => {
        students.sort((a, b) => a.age - b.age);
        renderStudents();
    };

    // Search students dynamically as you type
    searchInput.addEventListener("input", renderStudents);
});
