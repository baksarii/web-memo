function confirmDelete() {
  if (confirm("삭제하시겠습니까?")) {
    console.log("메모가 삭제되었습니다.");
  } else {
    console.log("삭제가 취소되었습니다.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const deleteButtons = document.querySelectorAll(".delete-btn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", confirmDelete);
  });
});
