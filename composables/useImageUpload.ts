export const useImageUpload = () => {
  const imageFile = ref();
  const imageUrl = ref('');
  const imageError = ref('');

  const handleImageSelected = (target: FileList) => {
    if (target.length === 0) {
      imageFile.value = '';
      imageUrl.value = '';
      return;
    }
    imageFile.value = target[0];

    const reader = new FileReader();
    reader.readAsDataURL(imageFile.value);
    handleFileUpload(imageFile.value);
  };

  const handleFileUpload = (imageFile: File) => {
    const file = new FormData();
    file.append('file', imageFile, imageFile.name);

    try {
      //TODO: Created API for upload file
      $fetch('/api/upload', {
        method: 'post',
        body: file,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        imageError.value = error.message;
      } else {
        imageError.value = 'Unexpected error';
      }
    }
  };

  return {
    imageFile,
    imageUrl,
    imageError,
    handleImageSelected,
  };
};
