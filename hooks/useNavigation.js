import { useSelector } from "react-redux";

export const useNavigation = () => {
  const origin = useSelector((state) => state.navigation.origin);
  const destination = useSelector((state) => state.navigation.destination);
  const travelTimeInformation = useSelector(
    (state) => state.navigation.travelTimeInformation
  );

  return {
    origin,
    destination,
    travelTimeInformation,
  };
};
