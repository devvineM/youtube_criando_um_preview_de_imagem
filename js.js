const modalPreviewImage =  document.getElementById("modalPreviewImage");
const imagePreview =  document.getElementById("image-preview");

const showModalPreviewImage = (url) => {
    modalPreviewImage.classList.replace("d-none","d-flex");
    imagePreview.src = url;
};

const removeModalPreviewImage = () => {
    imagePreview.src = "";
    modalPreviewImage.classList.replace("d-flex","d-none");
};

const showImage = (element) => {
    const getUrl = element.src;

    showModalPreviewImage(getUrl);
};