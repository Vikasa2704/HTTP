// ComponentA.jsx
const ComponentA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openModal}>Open modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

// ComponentB.jsx
const ComponentB = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <button onClick={openSidebar}>Open sidebar</button>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

// src/hooks/useToggle.js

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};

// ComponentA.jsx
import { useToggle } from "../hooks/useToggle.js";

const ComponentA = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button onClick={open}>Open modal</button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};

// ComponentB.jsx
import { useToggle } from "../hooks/useToggle.js";

const ComponentB = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button onClick={open}>Open sidebar</button>
      <Sidebar isOpen={isOpen} onClose={close} />
    </>
  );
};
// src/hooks/useToggle.js
export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};

// MyComponent.jsx
import { useToggle } from "../hooks/useToggle.js";

const MyComponent = () => {
  const { isOpen, open, close } = useToggle(true);

  return (
    <>
            <button onClick={open}>Open modal</button>
            <Modal isOpen={isOpen} onClose={close} />   {" "}
    </>
  );
};
