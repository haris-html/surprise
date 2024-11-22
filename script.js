// Function to toggle the diary (open/close on click)
function toggleDiary() {
    const diary = document.querySelector('.diary');

    // Toggle the rotation between open and close
    const currentRotation = diary.style.transform;

    if (currentRotation === "rotateY(-180deg)") {
        // If the diary is already open, close it
        diary.style.transform = "rotateY(0deg)";
    } else {
        // If the diary is closed, open it
        diary.style.transform = "rotateY(-180deg)";
    }
}
