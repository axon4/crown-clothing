const INITIAL_STATE = {
	sections: [
		{
			title: 'hats',
			imageURL: 'https://manofmany.com/wp-content/uploads/2017/10/Guide-to-Wearing-Mens-Hats-With-Suits-20.jpg',
			id: 1,
			linkURL: 'shop/hats'
		},
		{
			title: 'jackets',
			imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
			id: 2,
			linkURL: 'shop/jackets'
		},
		{
			title: 'sneakers',
			imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			id: 3,
			linkURL: 'shop/sneakers'
		},
		{
			title: 'womens',
			imageURL: 'https://www.suttons.co.uk/images/slides/highlight-flower-plants.jpg',
			size: 'large',
			id: 4,
			linkURL: 'shop/womens'
		},
		{
			title: 'mens',
			imageURL: 'https://johnlewis.scene7.com/is/image/JohnLewis/winter-coat-men',
			size: 'large',
			id: 5,
			linkURL: 'shop/mens'
		}
	]
};

const directoryReducer = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	};
};

export default directoryReducer;