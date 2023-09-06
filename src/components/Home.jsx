import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <div className="container">
      <h1>Bienvenidos a la pagina de Inicio</h1>
      <div className='cardMui'>
      <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bienvenidos a la pagina de inicio
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mejoramos tu web para una mejor experiencia de usuario
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
