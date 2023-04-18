function replaceTextWithColor() {
  // Set the target color of the text to search for and replace.
  var targetColor = '#4a86e8'; // Change this to the hex code of the color you want to search for.
  var replacementColor = '#e84a4a'; // Change this to the hex code of the color you want to replace with.
  
  // Get the current document.
  var doc = DocumentApp.getActiveDocument();
  
  // Get the body of the document.
  var body = doc.getBody();
  
  // Get all text elements in the body.
  var textElements = body.getParagraphs();
  
  // Loop through each text element in the body.
  for (var i = 0; i < textElements.length; i++) {
    var element = textElements[i];
    
    // Get the text and font color for the element.
    var text = element.getText();
    var color = element.getForegroundColor();
    
    // If the font color matches the target color, replace it with the replacement color.
    if (color == targetColor) {
      // Replace the color.
      element.setForegroundColor(replacementColor);
      
      // Log the original text to the console.
      Logger.log(text);
      //text.setForegroundColor(replacementColor);
      // Replace the text.
      //var newText = text.replace(targetColor, replacementColor);
      //element.editAsText().setText(newText);
    }
  }
}
