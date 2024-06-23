function validate()
  {
    let fname = document.getElementById('fn');
    let lname = document.getElementById('ln');
    let mail = document.getElementById('mail');

    if(fname.value.trim() == "" || lname.value.trim() == "" || mail.value.trim() == "")
        {
            alert('Blank values not allowed!!');
            return false;
        }
    else{
      true;
    }
  }