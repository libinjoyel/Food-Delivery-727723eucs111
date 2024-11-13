/*import React from 'react'
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <div>
        <Layout>
          <Box sx={{
            my: 15,
            textAlign:"center",
            p:2,
            "& h4": {
              fontWeight: "bold",
              my: 2,
              fontSize: "2rem",
            },
            "& p": {
              textAlign: "justify",
            },
          }}>
            <Typography variant='h4'>
              Welcome To Our Resturant
            </Typography >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam culpa dignissimos repellat cumque consequuntur excepturi
               et quas ad fugit pariatur, fuga sit accusantium libero omnis laboriosam, beatae distinctio? Temporibus, magnam dicta! Quasi nisi nam neque voluptas! 
               Tempora, tenetur qui aperiam aliquam odio inventore facere doloremque a dolore cum laboriosam non neque, obcaecati asperiores et vitae laborum explicabo itaque 
               blanditiis iure aut. Recusandae, quaerat? Quidem delectus eveniet, modi vitae consequatur, magni inventore maiores excepturi beatae sed asperiores, eius ducimus sequi illum
                laudantium? Nobis corporis ex molestias a harum assumenda 
              labore voluptas expedita ducimus. Dolor unde velit omnis aperiam consequatur veniam error!
            </p>
            <br/>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam culpa dignissimos repellat cumque consequuntur excepturi
               et quas ad fugit pariatur, fuga sit accusantium libero omnis laboriosam, beatae distinctio? Temporibus, magnam dicta! Quasi nisi nam neque voluptas! 
               Tempora, tenetur qui aperiam aliquam odio inventore facere doloremque a dolore cum laboriosam non neque, obcaecati asperiores et vitae laborum explicabo itaque 
               blanditiis iure aut. Recusandae, quaerat? Quidem delectus eveniet, modi vitae consequatur, magni inventore maiores excepturi beatae sed asperiores, eius ducimus sequi illum
                laudantium? Nobis corporis ex molestias a harum assumenda 
              labore voluptas expedita ducimus. Dolor unde velit omnis aperiam consequatur veniam error!
            </p>
          </Box>
        </Layout>
    </div>
  );
};

export default About;*/
import React from 'react';
import Layout from '../components/Layout/Layout';
import appitizers from '../images/appitizers.jpg';
import Desserts from '../images/Desserts.jpg';
import maincourse from '../images/maincourse.jpg';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const About = () => {
  const products = [
    {
      title: "Appetizers",
      description: "Start your meal with our delightful appetizers, crafted to tease your taste buds.",
      image: appitizers,
    },
    {
      title: "Main Courses",
      description: "Satisfy your hunger with our hearty and flavorful main dishes, made with fresh ingredients.",
      image: maincourse,
    },
    {
      title: "Desserts",
      description: "Indulge in our heavenly desserts, the perfect way to end your meal on a sweet note.",
      image: Desserts,
    },
  ];

  return (
    <div>
      <Layout>
        <Box sx={{
          my: 10,
          textAlign: "center",
          p: 4,
          backgroundColor: "#f4f4f4",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2.5rem",
          },
          "& p": {
            textAlign: "justify",
            color: "#555",
            fontSize: "1.1rem",
            lineHeight: "1.6",
          },
        }}>
          <Typography variant='h4'>
            Welcome to Our Restaurant
          </Typography>
          <p>
            Experience the finest culinary delights delivered right to your door. From mouth-watering appetizers to decadent desserts, we ensure that every bite is a moment of joy. Our menu is designed to cater to every palate, offering a variety of dishes that are both comforting and exciting.
          </p>
          <br/>
          <p>
            Whether you're dining solo, with family, or hosting a party, our food delivery service brings restaurant-quality dishes to the comfort of your home. Explore our menu and discover flavors that are guaranteed to impress!
          </p>
        </Box>

        {/* Product Cards Section */}
        <Box sx={{ mt: 10, px: 2 }}>
          <Typography variant="h4" sx={{ mb: 5, textAlign: "center", fontWeight: "bold" }}>
            Our Signature Dishes
          </Typography>
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{
                  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                  borderRadius: "10px",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {product.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Layout>
    </div>
  );
};

export default About;
