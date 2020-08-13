import React, { Fragment } from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview, { ICollectionPreview } from '../../components/collectionPreview/CollectionPreview';

type CollectionProps = ICollectionPreview & {
	id:number
};

class ShopPage extends React.Component<object, any> {
	constructor(props:object) {
		super(props);

		this.state = {
			collections: SHOP_DATA
		};
	};

	render() {
		const { collections } = this.state;

		return (
			<Fragment>
				<div className='shop-page'>
					{
						collections.map(({ id, ...otherCollectionProps }:CollectionProps) => (
							<CollectionPreview key={id} {...otherCollectionProps} />
						))
					}
				</div>
			</Fragment>
		);
	};
};

export default ShopPage;