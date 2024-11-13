/*import React from "react";
import {MenuList} from '../data/data';
import Layout from "../components/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

const Menu = () => {
    return(
        <div>
            <Layout>
            <Box sx={{ display: "flex",flexWrap:"wrap",justifyContent: 'center'}}>
                 {
                    MenuList.map((menu) => (
                        <Card sx={{maxWidth:"390px", display:"flex", m: 2}}>
                            <CardActionArea>
                                <CardMedia 
                                sx={{minHeight:"400px"}} 
                                component={'img'} 
                                src={menu.image} 
                                alt={menu.name}/>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom component={"div"}>
                                        {menu.name}
                                    </Typography>
                                    <Typography variant="body2">
                                        {menu.description}
                                    </Typography>
                                    <Typography variant="bold">
                                     Price:   {menu.price}
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                 }
            </Box>
            </Layout>
        </div>
    );
};
export default Menu;*/
import React, { useState } from "react";
import { MenuList } from '../data/data'; // Make sure the path is correct
import Layout from "../components/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button, TextField, ToggleButtonGroup, ToggleButton } from "@mui/material";

const Menu = () => {
    const [quantities, setQuantities] = useState(MenuList.map(() => 0));
    const [ratings, setRatings] = useState(MenuList.map(() => null));
    const [orderedDishes, setOrderedDishes] = useState(MenuList.map(() => false));
    const [feedbacks, setFeedbacks] = useState(MenuList.map(() => ""));  // New feedback state
    const [searchQuery, setSearchQuery] = useState(""); 
    const [dishType, setDishType] = useState("all");

    const handleIncrement = (index) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] += 1;
        setQuantities(updatedQuantities);
    };

    const handleDecrement = (index) => {
        const updatedQuantities = [...quantities];
        if (updatedQuantities[index] > 0) {
            updatedQuantities[index] -= 1;
        }
        setQuantities(updatedQuantities);
    };

    const calculateTotalPrice = () => {
        return MenuList.reduce((total, menu, index) => {
            return total + (menu.price * quantities[index]);
        }, 0);
    };

    const handleOrderNow = () => {
        const totalPrice = calculateTotalPrice();
        if (totalPrice > 0) {
            alert(`Your order has been placed! Total Price: $${totalPrice.toFixed(2)}`);
            setOrderedDishes(quantities.map(q => q > 0));
        } else {
            alert("Please select at least one item before placing an order.");
        }
    };

    // Handle rating update
    const handleRatingSubmit = (index, rating) => {
        const updatedRatings = [...ratings];
        updatedRatings[index] = rating;
        setRatings(updatedRatings);
    };

    // Handle feedback submission
    const handleFeedbackChange = (index, value) => {
        const updatedFeedbacks = [...feedbacks];
        updatedFeedbacks[index] = value;
        setFeedbacks(updatedFeedbacks);
    };

    // Update button handler
    const handleUpdateSubmit = (index) => {
        const rating = ratings[index];
        const feedback = feedbacks[index];

        if (rating && feedback) {
            alert(`Feedback Submitted! \nRating: ${rating} stars\nFeedback: ${feedback}`);
        } else {
            alert("Please provide both rating and feedback.");
        }
    };

    const renderRating = (rating) => {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {[...Array(5)].map((_, index) => (
                    <span key={index}>
                        {index < rating ? '⭐' : '☆'}
                    </span>
                ))}
            </Box>
        );
    };

    const filteredMenuItems = MenuList.filter(menu => 
        (menu.name.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === "") &&
        (dishType === "all" || (dishType === "veg" && menu.type === "veg") || (dishType === "non-veg" && menu.type === "non-veg"))
    );

    return (
        <div>
            <Layout>
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <TextField
                        label="Search Menu"
                        variant="outlined"
                        fullWidth
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Box>

                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <ToggleButtonGroup
                        value={dishType}
                        exclusive
                        onChange={(e, newType) => setDishType(newType)}
                        aria-label="dish type"
                    >
                        <ToggleButton value="all" aria-label="all dishes">
                            All Dishes
                        </ToggleButton>
                        <ToggleButton value="veg" aria-label="vegetarian dishes">
                            Veg
                        </ToggleButton>
                        <ToggleButton value="non-veg" aria-label="non-vegetarian dishes">
                            Non-Veg
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>

                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                    {
                        filteredMenuItems.map((menu, index) => (
                            <Card key={menu.name} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                                <CardActionArea>
                                    <CardMedia
                                        sx={{ minHeight: "400px" }}
                                        component={'img'}
                                        src={menu.image}
                                        alt={menu.name}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom component={"div"}>
                                            {menu.name}
                                        </Typography>
                                        <Typography variant="body2">
                                            {menu.description}
                                        </Typography>

                                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Typography variant="body1">
                                                Price:
                                            </Typography>
                                            <Box sx={{ p: 1, bgcolor: '#f0f0f0', borderRadius: '4px', minWidth: '80px', textAlign: 'center' }}>
                                                ${menu.price.toFixed(2)}
                                            </Box>
                                        </Box>

                                        <Box sx={{ mt: 1 }}>
                                            {renderRating(ratings[index] || menu.rating)}
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                            <Button
                                                variant="contained"
                                                onClick={() => handleDecrement(index)}
                                                sx={{
                                                    minWidth: '40px',
                                                    bgcolor: '#4a1c1c',
                                                    '&:hover': { bgcolor: '#6a2a2a' }
                                                }}
                                            >
                                                -
                                            </Button>
                                            <Typography variant="h6" sx={{ mx: 2 }}>
                                                {quantities[index]}
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                onClick={() => handleIncrement(index)}
                                                sx={{
                                                    minWidth: '40px',
                                                    bgcolor: '#1c4a4a',
                                                    '&:hover': { bgcolor: '#2a6a6a' }
                                                }}
                                            >
                                                +
                                            </Button>
                                        </Box>

                                        {orderedDishes[index] && quantities[index] > 0 && (
                                            <Box sx={{ mt: 2 }}>
                                                <TextField
                                                    select
                                                    label="Rate this dish"
                                                    value={ratings[index] || 0}
                                                    onChange={(e) => handleRatingSubmit(index, Number(e.target.value))}
                                                    SelectProps={{
                                                        native: true,
                                                    }}
                                                    sx={{ width: '100%' }}
                                                >
                                                    <option value={0}>Select Rating</option>
                                                    {[1, 2, 3, 4, 5].map((rate) => (
                                                        <option key={rate} value={rate}>
                                                            {rate} {renderRating(rate)}
                                                        </option>
                                                    ))}
                                                </TextField>

                                                <TextField
                                                    label="Provide Feedback"
                                                    multiline
                                                    fullWidth
                                                    rows={3}
                                                    value={feedbacks[index]}
                                                    onChange={(e) => handleFeedbackChange(index, e.target.value)}
                                                    sx={{ mt: 2 }}
                                                />

                                                <Button
                                                    variant="contained"
                                                    onClick={() => handleUpdateSubmit(index)}
                                                    sx={{ mt: 2, bgcolor: 'darkgreen', '&:hover': { bgcolor: 'green' } }}
                                                >
                                                    Update
                                                </Button>
                                            </Box>
                                        )}
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))
                    }
                </Box>

                <Box sx={{ mt: 4, p: 2, textAlign: 'center' }}>
                    <Typography variant="h5" gutterBottom>Total Price: ${calculateTotalPrice().toFixed(2)}</Typography>
                    
                    <Button 
                        variant="contained" 
                        color="success" 
                        onClick={handleOrderNow}
                        sx={{ mt: 2 }}
                    >
                        Order Now
                    </Button>
                </Box>
            </Layout>
        </div>
    );
};

export default Menu;
