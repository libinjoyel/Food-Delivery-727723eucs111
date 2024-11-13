/*import React from 'react'
import Layout from '../components/Layout/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <div>
        <Layout>
        <Box sx={{ my:10, ml:10, "& h4": { fontWeight: "bold", mb: 2}}}>
          <Typography variant='h4'>Contact Us!!!!</Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum eius soluta facilis laudantium! Iste,
             autem vero. Culpa nihil corrupti ea labore eligendi facilis, reprehenderit eveniet nobis quidem eaque accusantium
              dicta illum, nemo, totam illo! Eveniet velit eos adipisci asperiores iure. Nostrum, dolorem, repudiandae perspiciatis
               sequi pariatur numquam eaque maxime vero eligendi recusandae commodi nobis at voluptatibus eos soluta optio aspernatur 
               corrupti id provident. Repellendus itaque perferendis similique sapiente modi officia adipisci quasi dolorum ipsa.
                Culpa, deserunt debitis! Maxime, ducimus perspiciatis nisi cupiditate, vel nostrum perferendis itaque inventore,
                 soluta officiis magnam commodi recusandae quod totam odio eius. Dolore, inventore qui.
          </p>  
        </Box>
        <Box sx={{ m: 3, width: "600px" ,ml:10}}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black', color:'white',}} align='center'>Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                     <SupportAgentIcon sx={{ color: "red",pt: 1}}/> 1800-00-5500 (toolfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                     <MailIcon sx={{ color: "skyblue",pt: 1}}/> help@skcet.ac.in
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                     <PhoneIcon sx={{ color: "green",pt: 1}}/> 1234567890
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        </Layout>
    </div>
  );
};

export default Contact;*/
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PublicIcon from '@mui/icons-material/Public';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarIcon from '@mui/icons-material/Star';

const Contact = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const checkBusinessHours = (time) => {
    const day = time.getDay();
    const hour = time.getHours();

    if (day >= 1 && day <= 5) { // Monday to Friday
      return hour >= 8 && hour < 20;
    } else if (day === 6) { // Saturday
      return hour >= 9 && hour < 17;
    } else if (day === 0) { // Sunday
      return hour >= 10 && hour < 16;
    }
    return false;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = new Date();
      setCurrentTime(newTime);
      setIsOpen(checkBusinessHours(newTime));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Layout>
        {/* Contact Us Section */}
        <Box sx={{
          my: 10,
          ml: 10,
          p: 3,
          background: 'linear-gradient(135deg, #e3f2fd, #e0f7fa)',
          borderRadius: '15px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          "& h4": { 
            fontWeight: "bold", 
            mb: 2,
            fontSize: "2.4rem",
            textAlign: 'center',
            color: "#333",
          },
          "& p": {
            fontSize: "1.2rem",
            color: "#555",
            textAlign: 'justify',
            mt: 2,
          }
        }}>
          <Typography variant='h4'>Contact Us</Typography>
          <Typography variant='body1'>
            We’re here to help! Whether you have questions about our services or need support, feel free to reach out to us through any of the channels below. 
            We value your feedback and aim to provide the best assistance possible. Our team is available to assist you during business hours and beyond.
          </Typography>
        </Box>

        <Grid container spacing={5} sx={{ ml: 10 }}>
          {/* Contact Details Table */}
          <Grid item xs={12} md={6}>
            <Box sx={{ width: "100%" }}>
              <TableContainer component={Paper} sx={{ borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                <Table aria-label="contact table">
                  <TableHead>
                    <TableRow>
                      <TableCell align='center' sx={{ bgcolor: 'black', color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Contact Details
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              bgcolor: '#e0f7fa',
                              boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                              cursor: 'pointer',
                            },
                            '& svg': {
                              transition: 'all 0.3s ease',
                              transform: 'scale(1.2)',
                              '&:hover': {
                                transform: 'scale(1.5)',
                              }
                            },
                          }}
                        >
                          <SupportAgentIcon sx={{ color: "white", bgcolor: 'black', borderRadius: '50%', p: 1 }} /> 
                          1800-00-5500 (toll-free)
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              bgcolor: '#e0f7fa',
                              boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                              cursor: 'pointer',
                            },
                            '& svg': {
                              transition: 'all 0.3s ease',
                              transform: 'scale(1.2)',
                              '&:hover': {
                                transform: 'scale(1.5)',
                              }
                            },
                          }}
                        >
                          <MailIcon sx={{ color: "white", bgcolor: 'black', borderRadius: '50%', p: 1 }} /> 
                          help@skcet.ac.in
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              bgcolor: '#e0f7fa',
                              boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                              cursor: 'pointer',
                            },
                            '& svg': {
                              transition: 'all 0.3s ease',
                              transform: 'scale(1.2)',
                              '&:hover': {
                                transform: 'scale(1.5)',
                              }
                            },
                          }}
                        >
                          <PhoneIcon sx={{ color: "white", bgcolor: 'black', borderRadius: '50%', p: 1 }} /> 
                          123-456-7890
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>

          {/* Additional Information: Worldwide Presence */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: 2, 
              background: 'linear-gradient(135deg, #f9fbe7, #f3e5f5)', 
              borderRadius: '15px', 
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)', 
              "& h5": { 
                fontWeight: 'bold', 
                mb: 3, 
                textAlign: 'center', 
                color: '#333',
              },
              "& p": {
                fontSize: '1rem',
                color: '#555',
                textAlign: 'justify',
              }
            }}>
              <Typography variant='h5'>Our Global Presence</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <PublicIcon sx={{ color: '#4caf50', fontSize: 40 }} />
                <Typography variant='body1'>
                  Over 500+ restaurants worldwide, serving customers in over 50 countries with a diverse menu tailored to local tastes.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <RestaurantIcon sx={{ color: '#ff9800', fontSize: 40 }} />
                <Typography variant='body1'>
                  Featuring international cuisines including Italian, Chinese, Mexican, and Japanese delicacies to satisfy every palate.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <StarIcon sx={{ color: '#ffd700', fontSize: 40 }} />
                <Typography variant='body1'>
                  Award-winning chefs and a globally recognized brand for culinary excellence, innovation, and customer service.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Additional Contact Info: Social Media & Business Hours */}
        <Box sx={{ m: 5, ml: 10 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Typography variant='h5' sx={{ mb: 2, fontWeight: 'bold' }}>Follow Us</Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <FacebookIcon sx={{ color: '#3b5998', fontSize: 40 }} />
                <InstagramIcon sx={{ color: '#C13584', fontSize: 40 }} />
                <TwitterIcon sx={{ color: '#1DA1F2', fontSize: 40 }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 2,
                  borderRadius: '10px',
                  backgroundColor: isOpen ? '#e8f5e9' : '#ffebee',
                  color: isOpen ? '#2e7d32' : '#c62828',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Business Hours</Typography>
                <Box sx={{ fontSize: '1.1rem', mt: 1 }}>
                  <p><strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 5:00 PM</p>
                  <p><strong>Sunday:</strong> 10:00 AM - 4:00 PM</p>
                </Box>
                <Typography variant='h6' sx={{ mt: 2, fontWeight: 'bold' }}>
                  {isOpen ? 'We are Open' : 'We are Closed'}
                </Typography>
                <Typography variant='body2' sx={{ mt: 1, fontWeight: 'bold' }}>
                  Current Time: {currentTime.toLocaleTimeString()}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </div>
  );
};

export default Contact;
