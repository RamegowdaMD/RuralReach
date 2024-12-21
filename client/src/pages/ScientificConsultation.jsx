import React, { useState } from 'react';
import { 
  Container, Typography, Box, Grid, Button, Card, CardContent, 
  CardMedia, Chip, MenuItem, Select, FormControl, InputLabel 
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import '../css/ScientificConsultation.css';

const consultants = [
  {
    id: 1,
    name: 'Dr. John Smith',
    specialization: 'Soil Testing Specialist',
    expertise: ['Advanced Soil Analysis', 'Productivity Improvement'],
    image: 'https://via.placeholder.com/150',
    description: 'Expert in advanced soil analysis and productivity improvement.',
    rating: 4.7,
    availability: 'Monday - Friday, 10 AM - 2 PM',
  },
  {
    id: 2,
    name: 'Dr. Sarah Johnson',
    specialization: 'Crop Health Advisor',
    expertise: ['Crop Disease Management', 'Pest Control'],
    image: 'https://via.placeholder.com/150',
    description: 'Specialist in diagnosing and managing crop diseases.',
    rating: 4.5,
    availability: 'Wednesday - Saturday, 1 PM - 5 PM',
  },
  {
    id: 3,
    name: 'Dr. Emily Davis',
    specialization: 'Farming Techniques Consultant',
    expertise: ['Modern Techniques', 'Sustainable Farming'],
    image: 'https://via.placeholder.com/150',
    description: 'Provides expert advice on modern and sustainable farming techniques.',
    rating: 4.3,
    availability: 'Tuesday - Friday, 11 AM - 3 PM',
  },
  {
    id: 4,
    name: 'Mr. Robert Miller',
    specialization: 'Industrial Operations Advisor',
    expertise: ['Lean Manufacturing', 'Process Optimization'],
    image: 'https://via.placeholder.com/150',
    description: 'Advises on improving operational efficiency in small-scale industries.',
    rating: 4.6,
    availability: 'Monday - Thursday, 9 AM - 1 PM',
  },
  {
    id: 5,
    name: 'Ms. Laura Wilson',
    specialization: 'Small Business Growth Consultant',
    expertise: ['Scaling Strategies', 'Market Analysis'],
    image: 'https://via.placeholder.com/150',
    description: 'Expert in developing strategies to scale small-scale businesses.',
    rating: 4.8,
    availability: 'Tuesday - Friday, 10 AM - 4 PM',
  },
  {
    id: 6,
    name: 'Dr. Kevin Brown',
    specialization: 'Technical Consultant for Industries',
    expertise: ['Machinery Setup', 'Energy Efficiency'],
    image: 'https://via.placeholder.com/150',
    description: 'Provides technical guidance for setting up and running efficient machinery.',
    rating: 4.4,
    availability: 'Wednesday - Saturday, 10 AM - 3 PM',
  },
  {
    id: 7,
    name: 'Dr. Alice Green',
    specialization: 'Packaging and Logistics Specialist',
    expertise: ['Product Packaging', 'Supply Chain Logistics'],
    image: 'https://via.placeholder.com/150',
    description: 'Assists small-scale industries in optimizing their packaging and logistics.',
    rating: 4.7,
    availability: 'Monday - Friday, 2 PM - 6 PM',
  },
  {
    id: 8,
    name: 'Mr. Peter Adams',
    specialization: 'IT Solutions Advisor',
    expertise: ['Digital Transformation', 'Software Implementation'],
    image: 'https://via.placeholder.com/150',
    description: 'Helps industries adopt modern IT solutions for operational improvement.',
    rating: 4.5,
    availability: 'Tuesday - Saturday, 11 AM - 4 PM',
  },
  {
    id: 9,
    name: 'Ms. Jennifer Lee',
    specialization: 'Financial Consultant',
    expertise: ['Cost Management', 'Investment Planning'],
    image: 'https://via.placeholder.com/150',
    description: 'Offers financial advice tailored to small-scale industry needs.',
    rating: 4.9,
    availability: 'Monday - Thursday, 10 AM - 2 PM',
  },
  {
    id: 10,
    name: 'Dr. Andrew Taylor',
    specialization: 'Innovation and Product Development',
    expertise: ['Product Design', 'Technology Integration'],
    image: 'https://via.placeholder.com/150',
    description: 'Guides industries in innovating and developing new products.',
    rating: 4.8,
    availability: 'Wednesday - Saturday, 12 PM - 5 PM',
  },
];

const ScientificConsultation = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredConsultants = filter
    ? consultants.filter((consultant) => consultant.specialization.includes(filter))
    : consultants;

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px', marginBottom: '20px' }}>
      {/* Title */}
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', fontWeight: 'bold' }}>
        Scientific Consultation
      </Typography>
      <Typography variant="body1" gutterBottom style={{ textAlign: 'center', marginBottom: '30px' }}>
        Connect with agricultural scientists for soil testing, crop health analysis, and expert farming advice to enhance productivity.
      </Typography>

      {/* Filter */}
      <Box display="flex" justifyContent="center" mb={4}>
        <FormControl variant="outlined" size="small" style={{ minWidth: 200 }}>
          <InputLabel>Filter by Specialization</InputLabel>
          <Select value={filter} onChange={handleFilterChange} label="Filter by Specialization">
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Soil Testing Specialist">Soil Testing Specialist</MenuItem>
            <MenuItem value="Crop Health Advisor">Crop Health Advisor</MenuItem>
            <MenuItem value="Farming Techniques Consultant">Farming Techniques Consultant</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Cards */}
      <Grid container spacing={4}>
        {filteredConsultants.length === 0 ? (
          <Typography variant="body1" color="textSecondary" style={{ textAlign: 'center', width: '100%' }}>
            No consultants found matching your criteria.
          </Typography>
        ) : (
          filteredConsultants.map((consultant) => (
            <Grid item xs={12} sm={6} md={4} key={consultant.id}>
              <Card style={{ height: '100%', position: 'relative', overflow: 'hidden' }} className="hover-card">
                <CardMedia
                  component="img"
                  alt={consultant.name}
                  height="150"
                  image={consultant.image}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {consultant.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    {consultant.specialization}
                  </Typography>
                  <Box mb={2}>
                    {consultant.expertise.map((exp, index) => (
                      <Chip key={index} label={exp} color="primary" size="small" style={{ marginRight: '5px' }} />
                    ))}
                  </Box>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {consultant.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    <strong>Availability:</strong> {consultant.availability}
                  </Typography>
                  <Box mt={1} display="flex" alignItems="center">
                    <StarIcon style={{ color: '#ff9800', marginRight: '5px' }} />
                    <Typography variant="body2" color="textSecondary">
                      {consultant.rating} / 5
                    </Typography>
                  </Box>
                  <Box mt={2} display="flex" justifyContent="space-around">
                    <Button variant="outlined" color="primary" size="small">
                      View Profile
                    </Button>
                    <Button variant="contained" color="primary" size="small">
                      Book Appointment
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default ScientificConsultation;
