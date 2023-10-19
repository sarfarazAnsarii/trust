$(document).ready(function() {                   
  $("#contact-form").validate({
    rules:{
        inputOrg:{
            required:true
        },
        inputDesig:{
            required:true
        },
      inputName: {
          required: true
      },              
      inputEmail: {
          required: true
      },
      inputNumber: {
          required: true
      }      
      
    },
    messages: {   
        inputOrg: {
            required: "Please enter your organization."
        },
        inputDesig: {
            required: "Please enter your Designation."
        },             
        inputName: {
            required: "Please enter your full name."
        },
        inputEmail: {
            required: "Please enter your email address."
        },
        inputNumber: {
            required: "Please enter your mobile number."
        }                                               
    },
  
    submitHandler: function (form) {    
       

        $("#reused_form").text('Processing...');      

        var inputOrg = $("#inputOrg").val();
        var inputDesig = $("#inputDesig").val();
        var inputName = $("#inputName").val();
        var inputNumber = $("#inputNumber").val();
        var inputEmail = $("#inputEmail").val();
        
        // var time = new Date().fullDate();
        
       
        const person = {
            company: inputOrg,
            designation: inputDesig,
            name: inputName,                 
            email: inputEmail,
            mobile:inputNumber,
        }     
       
        console.log(person);        

        $.ajax({
            url:"../registration.php",
            type:"post",
            data:person,
            success: function(){
                // alert("Form Data Submitted :)")
                // $("#reused_form").text('Submitted');
                window.location.href = "thank-you.html"
            },
            error: function(){
                // alert("There was an error :(")
                $("#reused_form").text('Error...');
            }
        });       
    }



  });          
});


