//Prevent spoilerphobes from seeing spoilerphobes

//Solution: Hide spoilers and reveal them through user interaction

// 1 Hide spoiler
$('.spoiler span').hide();
// 2 Add a button
$('.spoiler').append("<button>Reveal Spoiler</button>");
// jquery api: .append(content[,content1])

// 3 When button is pressed,
//   3.1 show spoiler
//   3.2 get rid of button
