// import { useState } from 'react';

// import testPdf from '../../assets/model.pdf';
// import { Document, Page} from 'react-pdf';

// function Pdf () {
//     const [numPages, setNumPages] = useState(null);
// 	const [pageNumber, setPageNumber] = useState(1);

// 	const onDocumentLoadSuccess = ({ numPages }) => {
// 		setNumPages(numPages);
// 	};

// 	const goToPrevPage = () =>
// 		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

// 	const goToNextPage = () =>
// 		setPageNumber(
// 			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
// 		);

//     return(
//     <div>
//         <button onClick={goToPrevPage}>Prev</button>
//         <button onClick={goToNextPage}>Next</button>
    

//         <Document
//         file={[testPdf]}
//         onLoadSuccess={onDocumentLoadSuccess}
//         >
//         <Page pageNumber={pageNumber}/>
//         </Document>
//     </div>
//     )
// }

// export default Pdf;