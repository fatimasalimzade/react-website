import Swal from 'sweetalert2';

const useSuccessMessage = () => {
  return {
    showSuccessMessage: () => {
      Swal.fire({
        icon: 'success',
        title: 'Succesfully',
        text: 'Success',
      });
    },
  };
};

const useErrorMessage = () => {
  return {
    showError: () => {
      Swal.fire({
        icon: 'error',
        title: 'Succesfully',
        text: 'Success',
      });
    },
  };
};

export { useSuccessMessage, useErrorMessage};
