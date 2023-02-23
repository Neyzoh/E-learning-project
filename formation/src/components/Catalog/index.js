import ContentPage from '../ContentPage';

import catalogImage from '../../assets/Background-catalog.jpg';
import './style.scss';


function Catalog({datas, categories}) {
  // Init and Retrieve Categories
  const categoriesLists = [];
  categories.map((category) => category.json_agg.map((title) => categoriesLists.push(title[0])));
  const categoriesSplice = categoriesLists.splice(2, categoriesLists.length);

  // Video Poster (temporary)
  const posters = [
    {"poster": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
    {"poster": "https://images.unsplash.com/photo-1573496130141-209d200cebd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"},
    {"poster": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"},
    {"poster": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {"poster": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"},
  ]

  // Display Courses
  const courses = datas.map((teacher) => {
    return teacher.courses.map((course) => {
      return(<ContentPage key={course.id} {...course} {...posters[course.id-1]} />)
    })
  });

  return (
    <div className='container-fluid p-0'>
      {/* Header */}
      <div className="header-catalog d-flex justify-content-between align-items-center d-none d-lg-flex">
        {categoriesSplice.map((category) => <span className="text-white text-center underline mx-5">{category}</span>)}
      </div>
      <div className='sub-header'>
        <img src={catalogImage} alt='Background Catelogue'/>
        <span className='layer'></span>
      </div>
      {/* Section */}
      {categoriesSplice.map((title) => {return (
      <div className="section ms-3 mt-3">
        <p className='title mb-0'>Les cours dans le domaine de <span>{title}</span></p>
        <div className="courses d-flex px-2">{courses}</div>
      </div>
      )})}
    </div>
  );
};

export default Catalog;






