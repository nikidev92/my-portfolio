import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `Nikola Petrović | Personal Portfolio - ${pageTitle}`;
	}, [pageTitle]);
};
