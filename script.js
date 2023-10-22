function updateFileName() {
    const fileInput = document.getElementById("profile-picture");
    const fileName = document.getElementById("file-name");
    const previewImage = document.getElementById("image-preview");

    if (fileInput.files.length > 0) {
        fileName.textContent = fileInput.files[0].name;
        previewImage.src = URL.createObjectURL(fileInput.files[0]);
        previewImage.style.display = "block";
    } else {
        fileName.textContent = "Add Profile Picture";
        previewImage.src = "";
        previewImage.style.display = "none";
    }
}
