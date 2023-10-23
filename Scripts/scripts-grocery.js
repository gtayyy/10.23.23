function handleForm(event) {
    event.preventDefault();
    const userSelections = document.querySelectorAll("input:checked");
    const userSelectionsArray = Array.from(userSelections);

    const previousResults = document.querySelectorAll("h2, p");
  previousResults.forEach(element => element.remove());
  
    // create results heading
    const resultsHeading = document.createElement("h2");
    resultsHeading.append("Your grocery list:");
    document.body.append(resultsHeading);
    
    userSelectionsArray.forEach(function(element) {
      const paragraph = document.createElement("p");
      paragraph.append(element.value);
      document.body.append(paragraph);
    });
  }
  
  window.addEventListener("load", function() {
    document.querySelector("form#grocery_list").addEventListener("submit", handleForm);
	});
	
