import './style.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function SocialNetwork() {


    const url = 'https://facebook.com/'



    return (

        <div className='icons'>

            <a  href="https://instagram.com"><InstagramIcon /></a>

            <a  href={url}><FacebookIcon /></a>

            <a  href="https://twitter.com"><TwitterIcon /></a>
            
            
        </div>

    )
}



export default SocialNetwork;

