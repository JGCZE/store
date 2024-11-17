import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

interface IProps {
  productId: string;
}

export const FavoriteToggleButton = ({ productId }: IProps) => {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
};
