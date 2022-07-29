import React from "react";
import { useDispatch } from 'react-redux';
import { CardContent, Typography } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { deleteText, getTexts } from '../../redux/actions-creators';

export default function Text({ text, id }) {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteText(id));
    dispatch(getTexts());
  }

  return (
    <React.Fragment>
      <CardContent sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', background:'#ffffff','&:hover': {background: '#dddddd'}}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {text}
        </Typography>
        <CloseOutlinedIcon onClick={() => handleDelete()} sx={{cursor:'pointer', color:'#ff5555'}}/>
      </CardContent>
    </React.Fragment>
  );
}
