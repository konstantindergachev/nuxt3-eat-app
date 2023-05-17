import { useStoreProfile } from '@/stores/profile';

export const useImageUpload = () => {
  const imageFile = ref();
  const imageUrl = ref('');
  const imageId = ref('');
  const imageError = ref('');

  const storeProfile = useStoreProfile();

  const handleImageSelected = (target: FileList) => {
    if (target.length === 0) {
      imageFile.value = '';
      imageUrl.value = '';
      imageId.value = '';
      return;
    }
    imageFile.value = target[0];
    const url = URL.createObjectURL(imageFile.value);
    storeProfile.addToProfile({ fullname: '', email: '', location: '', image: url, imageId: '' });

    const reader = new FileReader();
    reader.readAsDataURL(imageFile.value);
    handleFileUpload(imageFile.value);
  };

  const handleFileUpload = async (imageFile: File) => {
    const file = new FormData();
    file.append('file', imageFile, imageFile.name);

    try {
      const serverResponse = await $fetch('/api/upload', {
        method: 'post',
        body: file,
      });
      imageUrl.value = serverResponse.imgUrl;
      imageId.value = serverResponse.imgId;
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
    imageId,
    imageError,
    handleImageSelected,
  };
};
