import { useState } from 'react';

const ProjectGallery = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 mt-12">
        {project.screens.map((screen) => {
          return (
            <div
              className="mb-10 sm:mb-0"
              key={screen.id}
              style={{
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p className="text-xl font-bold text-primary-dark dark:text-primary-light text-center py-5">
                {screen.title}
              </p>
              <img
                src={screen.img}
                className="cursor-pointer shadow-lg sm:shadow-none"
                alt={screen.title}
                onClick={() => openModal(screen.img)}
              />
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            className="max-w-fit max-h-max-w-fit w-auto h-auto"
            alt="Zoomed"
          />
        </div>
      )}
    </>
  );
};

export default ProjectGallery;