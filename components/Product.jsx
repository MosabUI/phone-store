import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price ,details} }) => {
	return (
		<div>
			<Link href={`/product/${slug.current}`}>
				{/* <div className="product-card">
					<div className="product-image-container">
						<img
							src={urlFor(image && image[0])}
							width={250}
							height={250}
							className="product-image"
							alt={name}
						/>
					</div>
					<p className="product-name">{name}</p>
					<p className="product-price">${price}</p>
				</div> */}
				 <div className="wrapper">
					<div className="product-img">
					<img
							src={urlFor(image && image[0])}
							width={250}
							height={250}
							className="product-image"
							alt={name}
						/>
					</div>
					<div className="product-info">
					<div className="product-text">
						<h1 className="h-head">{name}</h1>
						<p>{details}</p>
					</div>
					<div className="product-price-btn">
						<p><span>{price}</span>$</p>
					</div>
					</div>
				</div>

			</Link>
		</div>
	);
};

export default Product;