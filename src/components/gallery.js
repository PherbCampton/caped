import LandscapeAds from './landscape-ads'
import PortraitAds from './portrait-ads'

export default function Gallery () {
    return (
        <div className='gallery'>
            <div className='landscape-cards'>
                <LandscapeAds src="W1.png"/>
                <LandscapeAds src="W2.png"/>
            </div>
                <PortraitAds src="W7.png" price="$344"/>
                <PortraitAds src="W8.png" price="$665"/>
                <PortraitAds src="W3.png" price="$989"/>
                <PortraitAds src="W4.png" price="$834"/>
                < div className='landscape-cards'>
                        <LandscapeAds src="W5.png"/>
                        <LandscapeAds src="W6.png"/>
                    </div>
        </div>
    )
}