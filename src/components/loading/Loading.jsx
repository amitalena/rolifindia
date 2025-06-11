import { BeatLoader } from 'react-spinners';

const Loading = () => {
    return <>
        <div className="w-full h-screen flex justify-center items-center">
            <BeatLoader color='#1e2939' />
        </div>
    </>
}

export default Loading;