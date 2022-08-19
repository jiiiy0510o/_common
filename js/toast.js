const Editor = toastui.Editor;

const editor = new Editor({
  el: document.querySelector(".text_editor"),
  height: "500px",
  initialEditType: "markdown",
  previewStyle: "vertical",
});

editor.getMarkdown();
