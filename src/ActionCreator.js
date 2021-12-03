import { useMemo } from "react";
import { useDispatch } from "react-redux";

export default function useActionCreator(actionCreator) {
    const dispatch = useDispatch();
    return useMemo(() => {
        switch (actionCreator.length) {
            case 0: return _ => dispatch(actionCreator());
            case 1: return (p1) => dispatch(actionCreator(p1));
            case 2: return (p1, p2) => dispatch(actionCreator(p1, p2));
            default: throw `Unsupported params length: ${actionCreator.name}(${actionCreator.length})`
        }
    }, [actionCreator])
}