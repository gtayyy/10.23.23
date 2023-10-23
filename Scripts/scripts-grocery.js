function handleForm(event) {
    event.preventDefault();
    const userSelections = (document.querySelectorAll("input[name=grocery-list]:checked")).toUpperCase();
    console.log(userSelections)
    const userSelectionsArray = Array.from(userSelections);


    const previousResults = document.querySelectorAll("h2, p");
    previousResults.forEach(element => element.remove());
  
    // create results heading
    const resultsHeading = document.createElement("h2");
    resultsHeading.append("Your grocery list:");
    document.body.append(resultsHeading);

	// const capitalizedArray = userSelectionsArray.map(function(value) {
	// 	return value.toUpperCase();
	// 	});
	// }
    // const capitalizedArray = []
    // userSelectionsArray.forEach(item => {
    //     let capitalizedArray = item.toUpperCase();
    //     capitalizedArray.push(capitalizedArray);
    // })

    
    userSelectionsArray.forEach(function(element) {
      const paragraph = document.createElement("p");
      paragraph.append(element.value);
      document.body.append(paragraph);
    });
  
  window.addEventListener("load", function() {
    document.querySelector("form#grocery_list").addEventListener("submit", handleForm);
	});
}
