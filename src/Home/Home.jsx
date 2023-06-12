import Accessories from './Home/Accessories';
import Benner from './Home/Benner';
import PopularClass from './Home/PopularClass';
import PopularInstructors from './Home/PopularInstructors';

const Home = () => {
        return (
                <div>
                        <Benner></Benner>
                        <PopularClass></PopularClass>
                        <PopularInstructors></PopularInstructors>
                        <Accessories></Accessories>

                </div>
        );
};

export default Home;