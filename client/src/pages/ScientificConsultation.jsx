import React from 'react';
import { Container, Typography, Box, Grid, Button, Card, CardContent, CardMedia } from '@mui/material';
import './ScientificConsultation.css';

const scientists = [
  {
    id: 1,
    name: 'Dr. John Smith',
    specialization: 'Soil Testing Specialist',
    image: 'https://via.placeholder.com/150',
    description: 'Expert in advanced soil analysis and productivity improvement.'
  },
  {
    id: 2,
    name: 'Dr. Sarah Johnson',
    specialization: 'Crop Health Advisor',
    image: 'https://via.placeholder.com/150',
    description: 'Specialist in diagnosing and managing crop diseases.'
  },
  {
    id: 3,
    name: 'Dr. Emily Davis',
    specialization: 'Farming Techniques Consultant',
    image: 'https://via.placeholder.com/150',
    description: 'Provides expert advice on modern and sustainable farming techniques.'
  }
];

const ScientificConsultation = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', fontWeight: 'bold' }}>
        Scientific Consultation
      </Typography>
      <Typography variant="body1" gutterBottom style={{ textAlign: 'center', marginBottom: '30px' }}>
        Producers can connect with agricultural scientists for soil testing, crop health analysis, and expert farming advice to enhance productivity.
      </Typography>

      <Grid container spacing={4}>
        {scientists.map((scientist) => (
          <Grid item xs={12} sm={6} md={4} key={scientist.id}>
            <Card style={{ height: '100%' }}>
              <CardMedia
                component="img"
                alt={scientist.name}
                height="150"
                image={scientist.image}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {scientist.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  {scientist.specialization}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {scientist.description}
                </Typography>
                <Box mt={2} textAlign="center">
                  <Button variant="contained" color="primary" size="small">
                    Contact
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ScientificConsultation;
