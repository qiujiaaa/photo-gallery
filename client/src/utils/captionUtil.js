export const previewCaption = (caption) => {
	if (caption.length > 40) {
		return caption.substring(0, 40) + '...';
	} else {
		return caption;
	}
};
