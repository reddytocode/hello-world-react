import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';



function ListaMartin(props) {

    const isAlive = props.character.status === "Alive";
    
    const CharacterCard = () =>{
        return(<div key="">
            <Typography gutterBottom variant="h5" component="div">
            {props.character.name}
          </Typography>
          {isAlive ? (
              <Typography gutterBottom variant="h5" component="div">
              on
            </Typography>
          ): (
            <Typography gutterBottom variant="h5" component="div">
            off
            </Typography>
          )}
          
          <Typography variant="body2" color="text.secondary">
            {props.character.gender}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {props.character.location.name}
          </Typography>
          
          </div>
        );
    };
    //console.log(props.character);
    return(
        
            <Grid item xs={8}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={props.character.image}
                />
                <CardContent>
                
                    <CharacterCard/>
                
                </CardContent>
                {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </Grid>
     
    );
}
export default ListaMartin;