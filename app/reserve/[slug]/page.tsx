import Header from "./components/Header";
import ReservationForm from "./components/ReservationForm";

const ReservePage = (): JSX.Element => {
    return (
        <div className="border-t h-screen">
            <div className="py-9 w-3/5 m-auto">
                <Header />
                <ReservationForm />
            </div>
        </div>
    );
};

export default ReservePage;
