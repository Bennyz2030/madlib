$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();
    const outputArray = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
  
    outputArray.forEach(function(element, index) {
      let final = $(".output" + index);
      final.text(element);
    });

    $("#story").show();
  });
});