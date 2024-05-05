import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ButtonBase from '@mui/material/ButtonBase';
import Typogrphy from './Typogrphy';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';


const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://c4.wallpaperflare.com/wallpaper/30/304/946/galaxy-space-star-univers-wallpaper-preview.jpg',
    title: 'Picture of the Day',
    width: '40%',
    herf: '/picofday'
  },
  {
    url: 'https://c4.wallpaperflare.com/wallpaper/642/300/13/fire-planet-spaceships-sci-fi-wallpaper-preview.jpg',
    title: 'Astroids',
    width: '20%',
    herf: '/astroids'
  },
  {
    url: 'https://c1.wallpaperflare.com/preview/935/954/423/mars-mars-rover-space-travel-robot.jpg',
    title: 'Mars Rover Photos',
    width: '40%',
    herf: '/marsroverphotos'
  },
];

export default function ProductCategories() {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1s&api_key=EA6e24X5aQgJnj1PbnvZcASQJwpH5sQP01YA5ipT");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    

  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typogrphy variant="h4" marked="center" align="center" component="h2">
        Discover the world of NASA
      </Typogrphy>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        
        {images.map((image) => (
          
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typogrphy
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                <HashLink to={image.herf} style={{color:"white", textDecoration:"none"}} >{image.title}</HashLink>
                  
                  <div className="imageMarked" />
                
                
              </Typogrphy>
            </Box>
          </ImageIconButton>
          
        ))}
      </Box>
    </Container>
  );
}