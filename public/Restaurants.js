class Restaurants {
  constructor(element, $) {
    this.element = element
    this.$ = $
    this.showRestaurantInfo = this.showRestaurantInfo.bind(this)
  }

  get(postcode) {
    $.post('/restaurants', { postcode: postcode })
      .done(() => {
        $.get('/restaurants', this.showRestaurantInfo)
      })
  }

  showRestaurantInfo(data) {
    let summary = data.Restaurants.map(restaurant =>
    [
      `<p>${restaurant.Name}`,
      `Average rating: ${restaurant.Rating.Average}`,
      `Cuisines: ${restaurant.Cuisines.map(cuisine => cuisine.Name).join(", ")}</p>`
    ]
    .join("<br>"))
    .join("")
    this.element.innerHTML = summary
  }
}
