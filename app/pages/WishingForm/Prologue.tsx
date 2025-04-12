import { useNavigate } from "react-router";
import PrimaryButton from "~/components/Button";
import Text from "~/components/Text";

function Prologue() {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen justify-center">
            <div className="text-center flex flex-col gap-40 justify-center items-center px-6">
                <Text size="h2" weight="bold">
                    Last but not least
                </Text>
                <Text size="caption">
                    This is your birthday, you must have hopes and prayers for the future right?, you will write about it. Ready?
                </Text>
                <PrimaryButton
                    className="bg-blue-500 text-white"
                    onClick={() =>
                        navigate("/game/wishing-form", {
                            replace: true,
                        })
                    }
                >
                    Ready!
                </PrimaryButton>
            </div>
        </div>
    );
}

export default Prologue;
