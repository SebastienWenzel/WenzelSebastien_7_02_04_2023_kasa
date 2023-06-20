import Aboutdata from '../data/Aboutdata'
import BannerAbout from '../components/banner/BannerAbout';
import Collapse from '../components/collapse/Collapse';


const About = () => {

    return (
        <div className='aboutContainer'>
            <BannerAbout/>
            {Aboutdata.map(data =>{ 
            return (
                    <Collapse key={data.id} title={data.title} content={data.content}/>        
            )}
            )}
        </div>
    );
};

export default About;