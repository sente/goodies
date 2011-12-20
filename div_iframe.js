  var myform = document.createElement("form");
	  myform.setAttribute("method", "post");
	  myform.setAttribute("action", "http://curl.sente.cc/");
	  myform.setAttribute("style", "border:2px solid blue; background-color:grey; width:400px; margin:auto auto;");
	  myform.setAttribute("target", "_blank");


  var textareaField = document.createElement("textarea");              
	  textareaField.setAttribute("rows", "10");
	  textareaField.setAttribute("cols", "30");
	  textareaField.setAttribute("name", "textarea.html");
	  textareaField.setAttribute("value", "textarea.html");
	  textareaField.appendChild(document.createTextNode(document.body.innerHTML));

  myform.appendChild(textareaField);



  myform.appendChild(document.createElement('br'));


  myform.appendChild(document.createElement('br'));
  var submitField = document.createElement("input");              

  submitField.setAttribute("type", "submit");
  submitField.setAttribute("value", "submit");
  myform.appendChild(submitField);


  var divwrapper = document.createElement("div");              
  divwrapper.setAttribute("style", "z-index:99999; position:absolute; top: 10px; width:500px; margin: auto auto; background-color:red; border:2px solid blue");


  divwrapper.appendChild(myform);
  document.body.appendChild(divwrapper);
  

  myiframe = document.createElement('iframe');
  myiframe.setAttribute('width','500px');
  myiframe.setAttribute('height','200px');
  myiframe.setAttribute('id','myiframe');
  myiframe.setAttribute('style','text-align:center; border:2px solid blue; padding 4px; margin: auto auto;');
  divwrapper.appendChild(myiframe);
  myform.target = 'myiframe';


