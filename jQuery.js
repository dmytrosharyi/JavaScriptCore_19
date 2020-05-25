 $('#getButton').click(function(){
    userData = {
      Name: $("#userNameGet").val(),
      Surname: $("#userSurnameGet").val(),
      Age: $("#userAgeGet").val(),
      Residence: $('#userResidenceGet').val()
    }
      if($('#userAgeGet').val() >= 1 && $('#userAgeGet').val() <= 100){
      $.get('/userGet?userName=' + userData.Name + '&userSurname=' + userData.Surname + '&userAge=' +
              userData.Age + '&userResidence=' + userData.Residence,
      function(){
        for(let key in userData){
          console.log(userData[key] + " ValidatedByGET");
        }
      })
    }else{alert('wrong data')}
  })
  $('#postButton').click(function(){
    if($('#userAgePost').val() >= 1 && $('#userAgePost').val() <= 100){
      $.post('/userPost',userData = {
        Name: $("#userNamePost").val(),
        Surname: $("#userSurnamePost").val(),
        Age: $("#userAgePost").val(),
        Residence: $('#userResidencePost').val()
      },function(){
        for(let key in userData){
          console.log(userData[key] + " ValidatedByPOST");
        }
      })
    }else{alert('wrong data')}
  })