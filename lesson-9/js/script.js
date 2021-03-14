const year = new Date();
document.getElementById("current-year").textContent = year.getFullYear();
var updatedMessage = "Last Updated " + document.lastModified;
document.getElementById("updated-date").textContent = updatedMessage;