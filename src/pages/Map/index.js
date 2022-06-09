import { Flex, Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Sidebar from '../../components/Sidebar';
import data from '../../data.json';
import 'leaflet/dist/leaflet.css';

import { useNavigate } from 'react-router-dom';

function Map() {
  const navigate = useNavigate();
  return (
    <Flex>
      <Sidebar />
      <Flex direction={'column'} flex={1} h="100%">
        <Box background={useColorModeValue('white', '#1f1f1f')} py={5} pl={10}>
          <Heading>Harita</Heading>
        </Box>
        <MapContainer
          style={{ height: '90vh', width: '100%' }}
          center={[39.3, 35]}
          zoom={7}
          scrollWheelZoom={true}
        >
          {data.map((device, index) => (
            <Marker
              key={index}
              eventHandlers={{
                click: () => {
                  navigate(`/equipments/${device.name}`);
                },
              }}
              position={[device.latitude, device.longitude]}
            />
          ))}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </Flex>
    </Flex>
  );
}

export default Map;
