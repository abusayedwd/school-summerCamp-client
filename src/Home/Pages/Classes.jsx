 
import useClass from '../../Hooks/useClass';
import Cover from '../../cover/Cover';

const Classes = () => {
        const [classes] = useClass()
        console.log(classes) 
        return (
                <div>
                        <Cover></Cover>
                        <h1 className=" mt-12 mb-8 border-b-2 text-3xl text-orange-200 text-center font-bold"> All Classes: {classes.length}</h1>
                <div className="grid md:grid-cols-3 gap-4 mb-10">
                      {
                        classes.map(clas => 
                        <div key={clas._id} className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                          <img src={clas.image} alt="Shoes" className="rounded-xl w-72 h-60" />
                        </figure>
                        <div className="card-body  ">
                          <h2 className="card-title">Game : {clas.name}</h2>
                          <p>Instructor Name : {clas.instructor}</p>
                  <small> Available seats : {clas.available_seats}</small>
                  <small>Students : {clas.number_of_students}</small>

                          <small>Price: ${clas.price}</small>
                          <div className="card-actions">
                            <button className="btn btn-success">Select Class</button>
                          </div>
                        </div>
                      </div>)
                      } 
                </div>
                </div>
        );
};

export default Classes;