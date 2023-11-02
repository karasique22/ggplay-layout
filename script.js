function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "flex";
    setTimeout(function() {
      modal.classList.add("open");
    }, 5);
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.classList.remove("open");
    setTimeout(function() {
      modal.style.display = "none";
    }, 500);
  }