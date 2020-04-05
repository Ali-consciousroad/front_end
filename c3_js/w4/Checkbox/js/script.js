function nicknameFunction(){
	if (document.getElementById('yesNick').checked){
		document.getElementById('nick').style.display="inline";
		document.getElementById('nickname').setAttribute('required',true);

		//Test that allow to copy the input written in "lastname" to "nickname"
		
		var test = document.getElementById('lName').value;
		//alert(test);
		document.getElementById('nickname').value = test;
		
		

	}
	else{ 
		document.getElementById('nickname').removeAttribute('required');
		document.getElementById('nick').style.display="none";
	}
}
