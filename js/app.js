//Prevent spoilerphobes from seeing spoilerphobes

//Solution: Hide spoilers and reveal them through user interaction

// 1 Hide spoiler
$('.spoiler span').hide();
// 2 Add a button
$('.spoiler').append("<button>Reveal Spoiler</button>");
// jquery api: .append(content[,content1])

// 3 When button is pressed,

$('button').click(function() {
  //   3.1 show spoiler
  // $('.spoiler span').show();

  //Better to treverse the dom
  // .prev() Get the immediately preceding element. Opposite of .next()
  // SHow the spoiler next to the button clicked
  $(this).prev().show();

  //   3.2 get rid of button
  $(this).remove();
  // here we can use this instead if 'button'
});
