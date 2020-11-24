$( document ).ready(function() {
    let element = document.getElementById('app')
    let form = document.getElementById('form')
    let input = document.getElementById('input')
    form.addEventListener('submit', (data) => {
      event.preventDefault()
      let postcode = input.value
      let restaurants = new Restaurants(element, $)
      restaurants.get(postcode)
    })
    // let restaurants = new Restaurants(element, $)
    // restaurants.get('EC4M')
});
