import Image from "next/image";

const Images = (): JSX.Element => {
    return (
        <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                5 photos
            </h1>
            <div className="flex flex-wrap">
                <Image
                    className="w-56 h-44 mr-1 mb-1"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"
                    alt=""
                    width={224}
                    height={176}
                />
                <Image
                    className="w-56 h-44 mr-1 mb-1"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg"
                    alt=""
                    width={224}
                    height={176}
                />
                <Image
                    className="w-56 h-44 mr-1 mb-1"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg"
                    alt=""
                    width={224}
                    height={176}
                />
                <Image
                    className="w-56 h-44 mr-1 mb-1"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg"
                    alt=""
                    width={224}
                    height={176}
                />
                <Image
                    className="w-56 h-44 mr-1 mb-1"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
                    alt=""
                    width={224}
                    height={176}
                />
            </div>
        </div>
    );
};

export default Images;
