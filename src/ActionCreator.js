import { useMemo } from "react";
import { useDispatch } from "react-redux";

export default function useActionCreator(actionCreator) {
    const dispatch = useDispatch();
    return useMemo(() => {
        switch (actionCreator.length) {
            case 0: return actionCreator().then(res => dispatch(res));
            case 1: return (p1) => actionCreator(p1).then(res => dispatch(res));
            case 2: return (p1, p2) => dispatch(actionCreator(p1, p2));
            default: throw `Unsupported params length: ${actionCreator.name}(${actionCreator.length})`
        }
    }, [actionCreator])
}