import { List, ListItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useData } from '../../pages/Equipments';

function Equipment() {
  const { name } = useParams();
  const { data } = useData();

  const device = data.find(device => device?.name === name);

  if (!device) return <div>Cihaz bulunamadı!</div>;
  return (
    <List spacing={4}>
      <ListItem>Cihaz Adı : {device?.name}</ListItem>
      <ListItem>Cihaz IP : {device?.ip}</ListItem>
      <ListItem>Cihaz Enlem : {device?.latitude}</ListItem>
      <ListItem>Cihaz Boylam : {device?.longitude}</ListItem>
    </List>
  );
}

export default Equipment;
