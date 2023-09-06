import styles from './about.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Sobre Nosotros</h1>
      <div className={styles.cardMui}>
      <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Descarga nuestra tarjeta de presentacion
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Somo una empresa de desarrollo FrontEnd especializada
          en UX - UI.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Agregar</Button>
        <Button size="small" variant='text' color='error'>Eliminar</Button>
      </CardActions>
    </Card>
      </div>
      
    </div>
  )
}
