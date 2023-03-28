


    fetch("http://github.com/login/oauth/access_token?client_id=206417b82c00e1e001a7&client_secret=b882b2716cb928b6490450f64a4c1bebd38a22af", {
        method: 'post',
        body: {
          title: 'Title',
          body: {body: "body", title: "title"}
        }
      })