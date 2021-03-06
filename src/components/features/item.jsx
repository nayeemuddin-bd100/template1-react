function Item({icon,tittle,info}) {
    return (
      <div>
        <div
          className="card-2 d-flex flex-row flex-lg-row-reverse"
          style={{ marginBottom: "20px", marginTop: "20px" }}
        >
          <div>
            <span className="card-2__symbol mx-auto">
              <i className={icon}></i>
            </span>
          </div>
          <div className="px-2"></div>
          <div>
            <h3 className="card-2__title mb-2">{tittle}</h3>
            <p className="card-2__paragraph">{info}</p>
          </div>
        </div>
      </div>
    );
}

export default Item