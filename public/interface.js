$( document ).ready(function() {
    let element = document.getElementById('app')
    let form = document.getElementById('form')
    form.addEventListener('submit', (data) => {
      event.preventDefault()
      let input = document.getElementById('input')
      let postcode = input.value
      let restaurants = new Restaurants(element, $)
      restaurants.get(postcode)
    })
});
