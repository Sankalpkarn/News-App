import PropTypes from 'prop-types';


const NewsItem = ({ title, description, url,img_src}) => {
  return (
    <div className="card bg-dark text-light">
      <img src={img_src} className="card-img-top" alt="News Thumbnail Not Found" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Source: {description}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
}

NewsItem.propTypes = {        
  img_src: PropTypes.string,
  title: PropTypes.string,              
  description: PropTypes.string,                      
  url: PropTypes.string,          
};

export default NewsItem;
