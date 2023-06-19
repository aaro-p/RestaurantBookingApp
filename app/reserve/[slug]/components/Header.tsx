import Image from "next/image";

const Header = (): JSX.Element => {
    return (
        <div>
            <h3 className="font-bold">You&apos;re almost done!</h3>
            <div className="mt-5 flex">
                <Image
                    src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
                    alt=""
                    className="w-32 h-28 rounded"
                    width={128}
                    height={112}
                />
                <div className="ml-4">
                    <h1 className="text-3xl font-bold">
                        Aiāna Restaurant Collective
                    </h1>
                    <div className="flex mt-3">
                        <p className="mr-6">Tues, 22, 2023</p>
                        <p className="mr-6">7:30 PM</p>
                        <p className="mr-6">3 people</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
