import data from '../data/data.json'
import SingleItem from './SingleItem';
const bgImage = '/bg.png'
const CtaBody = () => {
    return (
        <main style={containerStyle} className=" p-10 " >
            <div className="max-w-5xl mx-auto flex justify-around gap-2 items-center  flex-wrap  mt-10 mb-10">
                {
                    data.map((item) => (
                        <div key={item.id} className='basis-1/4' >
                            <SingleItem {...item} />
                        </div>
                    ))
                }
            </div>
        </main>
    );
};

export default CtaBody;

const containerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    // You can also set other styles here
};
//style={{ backgroundImage: `url(${bgImage})`}}