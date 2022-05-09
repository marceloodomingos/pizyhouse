import { useState } from "react";

const useModal = () => {
  const [selected, setSelected] = useState<null | string>(null);
  const [isShowing, setIsShowing] = useState(false);

  const open = (props: string) => {
    setSelected(props);
    setIsShowing(true);
  };

  const close = () => {
    setSelected(null);
    setIsShowing(false);
  };

  return {
    isShowing,
    open,
    close,
    selected,
  };
};

export default useModal;
