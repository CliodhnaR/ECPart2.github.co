document.getElementById("check0").onclick = function(){checkAll()};
const allChecks = ["check1", "check2", "check3", "check4"];


function checkAll() {
	var checkVal = document.getElementById("check0");

  	if (checkVal.checked == true){
		$("#text0").text("Uncheck All");
		for(let i = 0; i < allChecks.length; i++){
			document.getElementById(allChecks[i]).checked = true;
		}
	    
  	} else {
		$("#text0").text("Check All");
		for(let i = 0; i < allChecks.length; i++){
			document.getElementById(allChecks[i]).checked = false;
		}
  	}
}
