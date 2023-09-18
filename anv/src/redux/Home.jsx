import './Home.css'
import myImagen from './cachorra.jpg';

export default function Home(){
    return(
        <div className="fondo">
            <h1>Feliz 18 mi amor</h1>
            <p>Te decidi hacer mi carta por aca, ya que la mayoria de veces te la hago por mail, solo queria decirte que eres muy importante para mi, aunque estas lejitos te sigo amando con mas intensidad que nunca, me haces feliz amor, no me aguanto para darte un abrazo inmenso ya que me haces demasiada falta mi gordita, como siempre te digo la camita se siente fria sin ti mi amor.</p>

            <p>Te extraño muchote, pero lo que mas quiero es que la pases bien alla, cuando vengas te esperare para que sigamos creando nuestro futuro amor, un futuro prospero y lleno de abundancia, porque solo tu y yo podremos decidir que tan alto llegaremos, siempre aferrados a Dios, todo es posible sirenita sabrosita.</p>

            <p>ATT: El hombre mas enamorado del mundo. </p>

            <p>Adjunto la imagen que siempre veo antes de comenzar mi dia, sin ella no puedo comenzar bien el dia.</p>
            <p>La veo y suena en mi cabeza esta cancion Fly Me to the Moon de sinatra.</p>
            

            <img className='imagen' alt='cachorra' src={myImagen}/>
        </div>
    )
}