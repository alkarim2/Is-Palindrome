// Function to check if text is a palindrome.
function checkIsPalindrome() {
    const textInput = document.getElementById('textInput').value;
    var reverseTextInput = '';
    var j = textInput.length;
    var k = j - 1;

    for (i=0; i < j; i++) {
        reverseTextInput += textInput[k];
        k--;
    }

    if (textInput && (textInput == reverseTextInput)) {
        window.alert(textInput + " is a palindrome");
    }
    else {
         window.alert(textInput + " isn't a palindrome");
    }
}