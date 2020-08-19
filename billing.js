
/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){

	if(document.querySelector("#same").checked)
	{
		var name=document.querySelector("#shippingName").value;  
		var zip=document.querySelector("#shippingZip").value;    

		document.querySelector("#billingName").value=name;   
		document.querySelector("#billingZip").value=zip;
	}

	else
	{
		document.querySelector("#billingName").value="";
		document.querySelector("#billingZip").value="";
	}
}


 /* utilizing getElementById
 function billingFunction()
    {
      var billingInput = document.getElementById("billingName");
      var billingZip = document.getElementById("billingZip");
      
      if (document.getElementById("same").checked)
      {
        billingInput.value = document.getElementById("shippingName").value;
        billingZip.value = document.getElementById("shippingZip").value;
      }
      else
      {
        billingInput.value = "";
        billingZip.value = "";
      }
    }*/