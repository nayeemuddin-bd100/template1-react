function MoreItem({icon,title,text}) {
    return (
      <div>
        {/* <div className="col-md-6 mb-2-1rem"> */}
          <div className="card-1 card-1--selected text-center">
            <span className="card-1__symbol mx-auto mb-4">
              <i className={icon}></i>
            </span>
            <h3 className="card-1__title mb-2">{title}</h3>
            <p className="card-1__paragraph">{text}
            </p>
          </div>
        </div>
      //....
    );
}

export default MoreItem