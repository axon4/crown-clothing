const INITIAL_STATE = {
	sections: [
		{
			title: 'hats',
			imageURL: 'https://manofmany.com/wp-content/uploads/2017/10/Guide-to-Wearing-Mens-Hats-With-Suits-20.jpg',
			ID: 1,
			linkURL: 'shop/hats'
		},
		{
			title: 'jackets',
			imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
			ID: 2,
			linkURL: 'shop/jackets'
		},
		{
			title: 'sneakers',
			imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			ID: 3,
			linkURL: 'shop/sneakers'
		},
		{
			title: 'women\'s',
			imageURL: 'https://www.suttons.co.uk/images/slides/highlight-flower-plants.jpg',
			size: 'large',
			ID: 4,
			linkURL: 'shop/womens'
		},
		{
			title: 'men\'s',
			imageURL: 'https://johnlewis.scene7.com/is/image/JohnLewis/winter-coat-men',
			size: 'large',
			ID: 5,
			linkURL: 'shop/mens'
		}
	]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	};
};

export default directoryReducer;