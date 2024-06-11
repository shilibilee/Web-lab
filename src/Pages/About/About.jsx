import sibli from '../../assets/sibli.png';
import useTitle from '../../hooks/useTitle';
const About = () => {
    useTitle('About');
    return (
        <div>
            {/* Banner */}
            <div>
                <div className="banner w-full bg-repeat-x bg-center h-48">
                    <div className="ovarlay-sec absolute flex items-center h-48 w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <h1 className='font-extrabold text-3xl lg:text-5xl flex mx-auto text-center text-white'>Our Team</h1>
                    </div>
                </div>
            </div>
            {/* body */}
            <div className='w-full my-28 grid justify-center gap-8'>
                <div className="w-1/2 mx-auto card card-compact bg-base-100 shadow-xl">
                    <figure><img className='w-2/3' src={sibli} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-serif font-bold text-2xl">Aktaruzzaman Siddiquei</h2>
                        <p><span className='font-semibold'>Student ID:</span> 201-15-3132</p>
                        <p>“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;