function check() {
      var email1 = document.getElementById('email_addr');
      var email2 = document.getElementById('email_repeat');
            if ( email1.value != email2.value) {
                 alert("The two emails must match!!");

        /* Work even without the return false. 
        What is the purpose of this return? */
        
         return false;
        }
}