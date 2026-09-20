let CouresData = [];

$.ajax({
  url: 'https://localhost:54888/Course',
  method: 'GET',
  contentType: 'application/json',
  success: function(response) {
    // console.log(response);
    response.forEach((x, i) => {
      // console.log(response[i]);

      let tmp = {
        name: response[i].name,
        price: response[i].price,
        courseTime: response[i].courseTime.slice(0, 5)
      }

                CouresData.push(tmp);
                 CreateCard(tmp, i);
    });
  },
  error: function(error) {
    console.log(error);
  }
});