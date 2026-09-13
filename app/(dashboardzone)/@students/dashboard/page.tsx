import { CounterCart } from "../../components/widgets/counterCart";

export default function Page() {
    return (
        <>
            <div className="w-full flex justify-around items-center">
                <CounterCart bgColor="var(--card-purchased)" />
                <CounterCart bgColor="var(--card-favorite)" />
                <CounterCart bgColor="var(--card-learning)" />
            </div>
        </>
    )
}