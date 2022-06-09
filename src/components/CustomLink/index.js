import { ListItem, useColorModeValue } from '@chakra-ui/react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import styles from './styles.module.css';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const bg = useColorModeValue('gray.200', '#5D5D5D');
  return (
    <ListItem bg={match ? bg : 'none'}>
      <Link className={styles.link} to={to} {...props}>
        {children}
      </Link>
    </ListItem>
  );
}

export default CustomLink;
