describe('Restaurants', () => {
  let element
  let mock$
  let restaurants
  let api

  beforeEach(() => {
    element = {}
    mock$ = { get: () => Promise.resolve(justEatApidata) }
    restaurants = new Restaurants(element, mock$)
  })

  it('can make a get request to the api', async() => {
    await restaurants.get('postcode')
    expect(element.innerHTML).toEqual('<p>TEST_DP_1<br>Average rating: 0<br>Cuisines: English</p>')
  })
})
