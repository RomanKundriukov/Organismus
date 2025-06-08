import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cl from './BasisCard.module.scss';

export default function BasisCard({ cardData }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <div className={cl.cardTitel}>
                        <label>{cardData.tag}</label>
                        <label>{cardData.date}</label>
                    </div>
                </Typography>
                <Typography variant="h6">
                    <div className={cl.cardTitel}>
                        <label>Status</label>
                        <input type="checkbox" defaultChecked={cardData.status} />
                    </div>
                </Typography>
                {cardData.muskeln.map((muskel, idx) => (
                    <Typography key={idx} variant="body2" sx={{ color: 'text.secondary' }}>
                        <label>{muskel.zweck}</label>
                        <ul>
                            {muskel.uebungen.map((uebung, uidx) => (
                                <li key={uidx}>{uebung}</li>
                            ))}
                        </ul>
                    </Typography>
                ))}
            </CardContent>
            <CardActions>
                <Button size="small">Check</Button>
            </CardActions>
        </Card>
    );
}
