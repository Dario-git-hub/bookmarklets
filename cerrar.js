function handleShortcut(event) {
    if (event.key === ".") {
        event.preventDefault();
        window.close()
      }
    }
      document.addEventListener("keydown", handleShortcut);