function changeContent() {
    const text = document.getElementById("dynamic-text");
    text.textContent = "🎉 The text has been updated dynamically!";
    text.classList.toggle("highlight");
  }
  
  function toggleElement() {
    const container = document.getElementById("container");
    const existing = document.getElementById("new-element");
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newEl = document.createElement("p");
      newEl.id = "new-element";
      newEl.textContent = "🚀 A new element has been added!";
      container.appendChild(newEl);
    }
  }
  