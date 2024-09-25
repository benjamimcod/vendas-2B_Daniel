import {
    ListItem,
    ListItemText,
    IconButton,
    Typography,
    Box,
} from '@mui/material';
import DeleteIcon from '@mui/iconsmaterial/delete';
import RemoveIcon from '@mui/iconsmaterial/remove'
import AddIcon from '@mui/icons-material/add';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

function CartItem {
    (item  
    const {
        removerDoCarrinho,
        incrementarQuantidade,
    } = useContext(ProductContext);
    return (
        <ListItem
            sencondaryAction={
                <Box sx={{
                    display: 'flex',
                    alignItens: 'center'
                }}>
                    <IconButton onClick={() => decrementarQuantidade(item.id)}>
                        <RemoveIcon />
                    </IconButton>
                    <Typography
                        variant="body1" component="span" sx={{ mx: 1 }}>
                    </Typography>
                    <IconButton onClick={() => incrementarQuantidade(item.id)}>
                        <AddIcon />
                    </IconButton>