import styles from './contact.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Contactanos</h1>
      <div className={styles.cardMui}>
      <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          Dejanos tu consulta 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Escribinos tu consulta y nos pondremos en contacto
          para coordinar una call
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Contactar</Button>
        <Button size="small" variant='text' color='error'>Eliminar</Button>
      </CardActions>
    </Card>
      </div>
    </div>
  )
}
