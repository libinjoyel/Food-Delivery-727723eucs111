/*import Dosa from '../images/dosa1.jpg';
import Chola from '../images/chola.jpg';
import Idli from '../images/idli.jpg';
import Paneer from '../images/Paneer.webp';
import Sweetpotato from '../images/sweetpot.webp';

export const MenuList = [
    {
        name:'Dosa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        image:Dosa,
        price:200
    },
    {
        name:'Chola',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        image:Chola,
        price:300
    },
    {
        name:'Idli',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        image:Idli,
        price:150
    },
    {
        name:'Paneer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        image:Paneer,
        price:285
    },
    {
        name:'Sweet Potato',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        image:Sweetpotato,
        price:350
    }
]*/
import React, { useState } from 'react';
 import Dosa from '../images/dosa1.jpg';
import Chola from '../images/chola.jpg';
import Idli from '../images/idli.jpg';
import Paneer from '../images/Paneer.webp';
import Sweetpotato from '../images/sweetpot.webp';
import chickenbiriyani from '../images/chickenbiriyani.jpg';
import Muttonbiriyani from '../images/Muttonbiriyani.jpg';
import FishTacos from '../images/FishTacos.jpg';
import ChickenAlfedo from '../images/ChikenAlfedo.jpg';
import ShrimpPadThai from '../images/ShrimpPadThai.jpg';
import Sushi from '../images/Sushi.jpg';
import Paella from '../images/Paella.jpg';
import Falafel from '../images/Falafel.jpg';

import BeefTacos from '../images/BeefTacos.jpg';
import axios from 'axios';

// data/data.js
export const MenuList = [
    // Vegetarian Dishes
    {
        name: 'Dosa',
        description: "Crispy rice and lentil crepe served with chutney.",
        price: 8.99,
        type: "veg",
        image: Dosa, // Replace with actual image URLs
        rating: 5,
    },
    {
        name: "Idli",
        description: "Steamed rice cakes served with sambar.",
        price: 7.99,
        type: "veg",
        image: Idli,
        rating: 4,
    },
    {
        name: "Paneer Tikka",
        description: "Marinated paneer grilled with spices.",
        price: 10.99,
        type: "veg",
        image: Paneer,
        rating: 4,
    },
    {
        name: "Chola",
        description: "Mixed vegetables cooked in a spicy gravy.",
        price: 9.99,
        type: "veg",
        image: Chola,
        rating: 4,
    },
    {
        name: "Sweet Potato",
        description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
        price: 6.99,
        type: "veg",
        image: Sweetpotato,
        rating: 5,
    },
    
    // Non-Vegetarian Dishes
    {
        name: "Chicken Biryani",
        description: "Aromatic basmati rice cooked with spiced chicken.",
        price: 12.99,
        type: "non-veg",
        image: chickenbiriyani,
        rating: 5,
    },
    {
        name: "Mutton Biryani",
        description: "Fragrant rice layered with tender mutton pieces.",
        price: 14.99,
        type: "non-veg",
        image: Muttonbiriyani,
        rating: 5,
    },
    {
        name: "Fish Tacos",
        description: "Grilled fish with cabbage slaw and spicy sauce.",
        price: 11.99,
        type: "non-veg",
        image: FishTacos,
        rating: 4,
    },
    {
        name: "Chicken Alfredo",
        description: "Fettuccine pasta in a creamy Alfredo sauce with grilled chicken.",
        price: 13.99,
        type: "non-veg",
        image: ChickenAlfedo,
        rating: 5,
    },
    {
        name: "Shrimp Pad Thai",
        description: "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts.",
        price: 12.99,
        type: "non-veg",
        image: ShrimpPadThai,
        rating: 5,
    },
    
    // Worldwide Dishes
    {
        name: "Sushi",
        description: "Vinegared rice accompanied by various ingredients, including seafood and vegetables.",
        price: 14.99,
        type: "non-veg",
        image: Sushi,
        rating: 5,
    },
    {
        name: "Paella",
        description: "A Spanish rice dish cooked with saffron, vegetables, and seafood or meat.",
        price: 16.99,
        type: "non-veg",
        image: Paella,
        rating: 5,
    },
    {
        name: "Falafel",
        description: "Deep-fried chickpea balls served with tahini sauce.",
        price: 8.99,
        type: "veg",
        image: Falafel,
        rating: 4,
    },
    {
        name: "Beef Tacos",
        description: "Spicy ground beef in a crispy shell topped with lettuce and cheese.",
        price: 9.99,
        type: "non-veg",
        image: BeefTacos,
        rating: 5,
    },
];


const Menu = () => {
    const [menuItems, setMenuItems] = useState(MenuList);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        image: '',
        price: ''
    });

    const addToCart = (item) => {
        axios.post('/api/cart', item)
            .then(response => {
                alert(`${item.name} has been added to the cart!`);
            })
            .catch(error => {
                console.error('There was an error adding the item to the cart!', error);
            });
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newItem = {
            ...newProduct,
            price: parseInt(newProduct.price),
            image: newProduct.image || 'https://via.placeholder.com/150' // Placeholder if no image is provided
        };
        setMenuItems([...menuItems, newItem]);
        setNewProduct({ name: '', description: '', image: '', price: '' }); // Reset form after adding
    };

    const handleChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h2>Menu</h2>
            {menuItems.map((menuItem, index) => (
                <div key={index} className="menu-item">
                    <img src={menuItem.image} alt={menuItem.name} width={150} height={150} />
                    <h3>{menuItem.name}</h3>
                    <p>{menuItem.description}</p>
                    <p>Price: ₹{menuItem.price}</p>
                    <button onClick={() => addToCart(menuItem)}>Add to Cart</button>
                </div>
            ))}

            <h2>Add a New Product</h2>
            <form onSubmit={handleAddProduct}>
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Product Description"
                    value={newProduct.description}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={newProduct.image}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default Menu;

