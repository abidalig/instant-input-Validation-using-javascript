function validation()
      {
      	var fnam = document.getElementById('fN').value;
        var lnam = document.getElementById('LN').value;
        var phoneNo = document.getElementById('phNo').value;
        var unam = document.getElementById('user').value;
        var passWord= document.getElementById('pass').value;
        var letters = /^[A-Za-z]+$/;
        var numbers= /^\d{10}$/;                   //var numbers = /^[0-9]+$/;
        var username = /^[a-z0-9]+$/i;
        var password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;
        //var checkDuplicate = /(\w+)(?=\1)/g ;
      /*if(fnam.match(letters))
        {
         return true;
       } */


       /* first Name validation */
    if(!fnam.match(letters))
      {
        //document.getElementById('spanId1').innerHTML = "*input alphabets characters only";
        //document.getElementById('fN').style.backgroundColor = "#FD7575";
         return false;
      }

      if(!lnam.match(letters))
      {
         return false;
      }

      if(!phoneNo.match(numbers))
      {
          return false;
      }

    if(! (unam.match(username) && unam.length==10 ))
    {
         return false;
    }

    if(! (passWord.match(password)  ))
    {
         return false;
    }

    }

/* instant input validation using onblur()  method */
    function validateFname()
          {
          	var fnam = document.getElementById('fN').value;
            var letters = /^[A-Za-z]+$/;

          if(! (fnam.match(letters)  ))
            {
              document.getElementById('spanId1').innerHTML = "*input alphabets characters only";
              document.getElementById('fN').style.borderColor = "red";
            }
          else
            {
          document.getElementById('spanId1').innerHTML="";
          document.getElementById('fN').style.removeProperty("border-color");
            }
          }

function validateLname()
{
            var lnam = document.getElementById('LN').value;
            var letters = /^[A-Za-z]+$/;

                if(! (lnam.match(letters)  ))
                  {
                    document.getElementById('spanId2').innerHTML = "*input alphabets characters only";
                    document.getElementById('LN').style.borderColor = "red";
                  }
                else
                  {
                document.getElementById('spanId2').innerHTML="";
                document.getElementById('LN').style.removeProperty("border-color");
                  }
}

function validatePhone()
{
            var phoneNo = document.getElementById('phNo').value;
            var numbers= /^\d{10}$/;

                if(!phoneNo.match(numbers))
                  {
                      document.getElementById('spanId3').innerHTML = "* input 10 digit numbers only";
                      document.getElementById('phNo').style.borderColor = "red";
                  }
                else
                  {
                      document.getElementById('spanId3').innerHTML="";
                      document.getElementById('phNo').style.removeProperty("border-color");
                  }
}

function validateUserName()
{
         var unam = document.getElementById('user').value;
         var username = /^[a-z0-9]+$/i;
          //var checkDuplicate = /(\w+)(?=\1)/g ;

                if(! (unam.match(username) && unam.length==10 ) )
                  {
                      document.getElementById('spanId4').innerHTML = "* input 10 alphanumeric characters only";
                      document.getElementById('user').style.borderColor = "red";
                  }
              else
                  {
                      document.getElementById('spanId4').innerHTML="";
                      document.getElementById('user').style.removeProperty("border-color");
                  }
}

function validatePassword()
{
         var passWord= document.getElementById('pass').value;
         var password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;

         console.log(passWord);
              if(! (passWord.match(password) ))
                  {
                      document.getElementById('spanId5').innerHTML = "* input atleast one number,one special character &(6-15)";
                      document.getElementById('pass').style.borderColor = "red";
                  }
              else
                  {
                      document.getElementById('spanId5').innerHTML="";
                      document.getElementById('pass').style.removeProperty("border-color");
                  }
}
/*    function allnumeric(inputtxt)
   {
      var numbers = /^[0-9]+$/;
      if(inputtxt.value.match(numbers))
      {
      alert('Your Registration number has accepted....');
      document.form1.text1.focus();
      return true;
      }
      else
      {
      alert('Please input numeric characters only');
      document.form1.text1.focus();
      return false;
      }
   } */
